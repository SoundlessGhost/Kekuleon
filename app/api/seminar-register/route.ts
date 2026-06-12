import dns from "dns/promises";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  getSeminarBySlug,
  isRegistrationStillOpen,
} from "@/lib/seminars-data";
import {
  checkIpLimit,
  getClientIp,
  wasSeen,
  markSeen,
} from "@/lib/ratelimit";
import { escapeHtml } from "@/lib/escape-html";

// Resend is instantiated lazily so the route module doesn't crash on
// load when RESEND_API_KEY is missing (e.g. local dev without the key).
// Registration still saves to the Sheet — only the confirmation email
// is skipped, with a warning logged for the admin to follow up manually.
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  try {
    return new Resend(key);
  } catch (err) {
    console.error("Failed to construct Resend client:", err);
    return null;
  }
}

// Rate limiting now lives in lib/ratelimit.ts (Upstash Redis). The old
// file-based store here was a silent no-op on Vercel — see that file.

async function isValidEmailDomain(email: string): Promise<boolean> {
  try {
    const domain = email.split("@")[1];
    if (!domain) return false;
    const mxRecords = await dns.resolveMx(domain);
    return mxRecords.length > 0;
  } catch {
    return false;
  }
}

interface RegistrationPayload {
  seminarSlug: string;
  fullName: string;
  email: string;
  phone: string;
  universityCode: string;
  universityOther?: string;
  department: string;
  yearOfStudy: string;
  studentId?: string;
  whyInterested?: string;
  consent: boolean;
  // Honeypot — bots fill it, humans don't
  website?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<RegistrationPayload>;

    // Honeypot — silently accept and drop bot submissions
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    // Per-IP abuse limit (3/hour) — main defence against email-bombing loops.
    const ip = getClientIp(request);
    if (!(await checkIpLimit("seminar", ip))) {
      return NextResponse.json(
        {
          error:
            "Too many registration attempts from your network. Please try again in about an hour.",
        },
        { status: 429 },
      );
    }

    const {
      seminarSlug,
      fullName,
      email,
      phone,
      universityCode,
      universityOther,
      department,
      yearOfStudy,
      studentId,
      whyInterested,
      consent,
    } = body;

    // Required-field validation
    if (
      !seminarSlug ||
      !fullName ||
      !email ||
      !phone ||
      !universityCode ||
      !department ||
      !yearOfStudy
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Please agree to receive event updates from KRTC." },
        { status: 400 },
      );
    }

    // Seminar must exist and be open
    const seminar = getSeminarBySlug(seminarSlug);
    if (!seminar) {
      return NextResponse.json(
        { error: "This seminar does not exist." },
        { status: 404 },
      );
    }
    if (!isRegistrationStillOpen(seminar)) {
      return NextResponse.json(
        {
          error:
            "Registration for this seminar has closed. Please contact kekuleoninfo@gmail.com if you have questions.",
        },
        { status: 400 },
      );
    }

    // University must be in the seminar's audience whitelist. Validating
    // against the seminar's own list (rather than a global function) lets
    // each seminar declare a different audience without code changes.
    const allowedCodes = new Set(
      seminar.audienceUniversities.map((u) => u.code),
    );
    if (!allowedCodes.has(universityCode)) {
      return NextResponse.json(
        { error: "Please select a valid university for this seminar." },
        { status: 400 },
      );
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Real domain
    const validDomain = await isValidEmailDomain(email);
    if (!validDomain) {
      return NextResponse.json(
        {
          error:
            "This email address does not appear to be valid. Please use a real email.",
        },
        { status: 400 },
      );
    }

    // Duplicate-registration guard per (seminar, email)
    const rateKey = `krtc/reg:${seminarSlug}:${email.toLowerCase()}`;
    if (await wasSeen(rateKey)) {
      return NextResponse.json(
        {
          error:
            "You have already registered for this seminar. Please check your email for the confirmation.",
        },
        { status: 429 },
      );
    }

    // Forward to Google Apps Script — appends a row to the Sheet.
    // If this fails, abort BEFORE sending confirmation so user can retry.
    const webhookUrl = process.env.SEMINAR_SHEETS_WEBHOOK_URL;
    const webhookSecret = process.env.SEMINAR_SHEETS_WEBHOOK_SECRET;

    if (!webhookUrl || !webhookSecret) {
      console.error(
        "SEMINAR_SHEETS_WEBHOOK_URL or SEMINAR_SHEETS_WEBHOOK_SECRET is not configured",
      );
      return NextResponse.json(
        { error: "Registration is temporarily unavailable. Please try again later." },
        { status: 503 },
      );
    }

    const universityLabel =
      seminar.audienceUniversities.find((u) => u.code === universityCode)
        ?.name || universityCode;

    const sheetPayload = {
      secret: webhookSecret,
      timestamp: new Date().toISOString(),
      seminarSlug,
      seminarTitle: seminar.title,
      fullName,
      email,
      phone,
      universityCode,
      university: universityLabel,
      universityOther: universityOther || "",
      department,
      yearOfStudy,
      studentId: studentId || "",
      whyInterested: whyInterested || "",
      consent: consent ? "yes" : "no",
      ip,
    };

    try {
      const sheetRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetPayload),
        // Apps Script can be slow on cold start
        signal: AbortSignal.timeout(15_000),
      });
      if (!sheetRes.ok) {
        const text = await sheetRes.text().catch(() => "");
        console.error("Sheets webhook non-OK:", sheetRes.status, text);
        return NextResponse.json(
          {
            error:
              "We couldn't save your registration. Please try again in a moment.",
          },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("Sheets webhook fetch failed:", err);
      return NextResponse.json(
        {
          error:
            "We couldn't save your registration. Please try again in a moment.",
        },
        { status: 502 },
      );
    }

    // Confirmation email to the registrant.
    // The Sheet row is already written above — the registration is "saved"
    // from the user's perspective. If the email step fails (Resend free-tier
    // daily limit, transient outage, missing key in local dev, etc.) we
    // still treat the registration as successful so the user isn't shown
    // a confusing error. The failure is logged server-side so admins can
    // follow up manually from the Sheet.
    const resend = getResend();
    if (!resend) {
      console.warn(
        "RESEND_API_KEY not set — skipping confirmation email for:",
        email,
      );
    } else {
      try {
        const registrantEmail = await resend.emails.send({
          from: "KRTC Seminars <noreply@kekuleon.com>",
          to: [email],
          replyTo: "kekuleoninfo@gmail.com",
          subject: `[KRTC] Your seminar registration is confirmed — ${seminar.title}`,
          html: registrantConfirmationHtml({
            fullName,
            seminarTitle: seminar.title,
            date: seminar.date,
            time: seminar.time,
            venue: seminar.venue,
            certificateNote: seminar.certificateNote,
          }),
        });

        if (registrantEmail.error) {
          console.error(
            "Resend (registrant) error — email NOT sent for:",
            email,
            registrantEmail.error,
          );
        }
      } catch (err) {
        // Network/SDK-level failure — same policy: don't block the user.
        console.error(
          "Resend (registrant) threw — email NOT sent for:",
          email,
          err,
        );
      }
    }

    // Admin notification email is intentionally disabled — admins read
    // registrations directly from the Google Sheet to keep email volume low
    // (Resend free tier: 100/day). Re-enable later if needed.

    // Mark the (seminar, email) as registered — the Sheet has the row, so
    // further submissions would create duplicates. 24h TTL in Redis.
    await markSeen(rateKey);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Seminar register API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

// =============================================
// Email templates
// =============================================

function registrantConfirmationHtml(args: {
  fullName: string;
  seminarTitle: string;
  date: string;
  time: string;
  venue: string;
  certificateNote?: string;
}): string {
  const { fullName, seminarTitle, date, time, venue, certificateNote } = args;
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

        <tr><td style="background-color:#E31837;padding:28px 32px;">
          <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">Registration Confirmed</h1>
          <p style="margin:6px 0 0;font-size:13px;color:#ffffff;opacity:0.9;">KRTC Seminar — <a href="https://www.kekuleon.com" style="color:#ffffff;text-decoration:none;">kekuleon.com</a></p>
        </td></tr>

        <tr><td style="padding:28px 32px 0;">
          <p style="margin:0 0 8px;font-size:15px;color:#374151;">Dear <strong>${escapeHtml(fullName)}</strong>,</p>
          <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">
            Thank you for registering for our seminar. Your spot is confirmed. Please save the details below.
          </p>
        </td></tr>

        <tr><td style="padding:24px 32px 0;">
          <p style="margin:0 0 4px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Seminar</p>
          <p style="margin:0 0 16px;font-size:17px;color:#111827;font-weight:600;line-height:1.4;">${escapeHtml(seminarTitle)}</p>

          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
            <tr><td style="padding:16px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding-bottom:10px;">
                  <span style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Date</span><br>
                  <span style="font-size:14px;color:#111827;">${escapeHtml(date)}</span>
                </td></tr>
                <tr><td style="padding-bottom:10px;">
                  <span style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Time</span><br>
                  <span style="font-size:14px;color:#111827;">${escapeHtml(time)}</span>
                </td></tr>
                <tr><td>
                  <span style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Venue</span><br>
                  <span style="font-size:14px;color:#111827;">${escapeHtml(venue)}</span>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        ${
          certificateNote
            ? `<tr><td style="padding:20px 32px 0;">
                 <p style="margin:0 0 6px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Certificate</p>
                 <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${escapeHtml(certificateNote)}</p>
               </td></tr>`
            : ""
        }

        <tr><td style="padding:24px 32px;">
          <p style="margin:0 0 6px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">What to bring</p>
          <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">
            • Your university student ID for verification at the entrance.<br>
            • A notebook and pen.<br>
            • Curiosity and questions for the speakers.
          </p>
        </td></tr>

        <tr><td style="padding:0 32px 24px;">
          <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.6;">
            We will email you the final venue details and any updates closer to the date. If you can no longer attend, please reply to this email so we can offer your seat to another student.
          </p>
        </td></tr>

        <tr><td style="padding:20px 32px;border-top:1px solid #e5e7eb;background-color:#f9fafb;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">Kekuleon Research and Training Center (KRTC) · kekuleoninfo@gmail.com</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}
