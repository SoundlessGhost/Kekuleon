import dns from "dns/promises";
import { join } from "path";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { existsSync, readFileSync, writeFileSync } from "fs";
import {
  getSeminarBySlug,
  isNorthZoneUniversityCode,
  isRegistrationStillOpen,
} from "@/lib/seminars-data";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limit: 1 registration per (seminar, email) per 24 hours.
// Keyed as `${seminarSlug}:${email}` so a registrant can sign up for
// future seminars without being blocked by a previous registration.
const RATE_LIMIT_FILE = join(process.cwd(), ".rate-limit.json");
const RATE_LIMIT_HOURS = 24;

function getRateLimitData(): Record<string, number> {
  try {
    if (existsSync(RATE_LIMIT_FILE)) {
      return JSON.parse(readFileSync(RATE_LIMIT_FILE, "utf-8"));
    }
  } catch {}
  return {};
}

function saveRateLimitData(data: Record<string, number>) {
  try {
    writeFileSync(RATE_LIMIT_FILE, JSON.stringify(data));
  } catch {}
}

function isRateLimited(key: string): boolean {
  const data = getRateLimitData();
  const lastSent = data[key];
  if (!lastSent) return false;
  const hoursSince = (Date.now() - lastSent) / (1000 * 60 * 60);
  return hoursSince < RATE_LIMIT_HOURS;
}

function recordKey(key: string) {
  const data = getRateLimitData();
  const now = Date.now();
  for (const k of Object.keys(data)) {
    if (now - data[k] > RATE_LIMIT_HOURS * 60 * 60 * 1000) {
      delete data[k];
    }
  }
  data[key] = now;
  saveRateLimitData(data);
}

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

    // University must be in the seminar's audience whitelist
    if (!isNorthZoneUniversityCode(universityCode)) {
      return NextResponse.json(
        {
          error:
            "This seminar is currently open to North Zone universities only.",
        },
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

    // Rate limit per (seminar, email)
    const rateKey = `${seminarSlug}:${email.toLowerCase()}`;
    if (isRateLimited(rateKey)) {
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

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "";

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

    // Confirmation email to the registrant
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
      console.error("Resend (registrant) error:", registrantEmail.error);
      // Sheet already has the row; we still tell the user it failed at email
      // step so they can contact us. They can also re-register tomorrow.
      return NextResponse.json(
        {
          error:
            "Registered, but we couldn't send your confirmation email. Please email kekuleoninfo@gmail.com to confirm.",
        },
        { status: 500 },
      );
    }

    // Admin notification email is intentionally disabled — admins read
    // registrations directly from the Google Sheet to keep email volume low
    // (Resend free tier: 100/day). Re-enable later if needed.

    recordKey(rateKey);

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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
