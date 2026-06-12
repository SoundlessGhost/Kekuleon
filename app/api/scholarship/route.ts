import dns from "dns/promises";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  checkIpLimit,
  getClientIp,
  wasSeen,
  markSeen,
} from "@/lib/ratelimit";
import { escapeHtml } from "@/lib/escape-html";
import { tooLong } from "@/lib/validate";

// Scholarship applications used to be sent straight from the browser via
// EmailJS (credentials hard-coded in the client bundle, zero spam protection).
// This route brings it in line with /api/contact and /api/seminar-register:
// server-side Resend send, per-IP + per-email rate limiting, honeypot, MX
// validation, and HTML escaping of every user field.

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

interface ScholarshipPayload {
  program_type: string;
  from_name: string;
  from_email: string;
  phone: string;
  education_level: string;
  department?: string;
  message?: string;
  // Honeypot — bots fill it, humans don't
  website?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ScholarshipPayload>;

    // Honeypot — silently accept and drop bot submissions
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    // Per-IP abuse limit (3/hour)
    const ip = getClientIp(request);
    if (!(await checkIpLimit("scholarship", ip))) {
      return NextResponse.json(
        {
          error:
            "Too many applications from your network. Please try again in about an hour.",
        },
        { status: 429 },
      );
    }

    const {
      program_type,
      from_name,
      from_email,
      phone,
      education_level,
      department,
      message,
    } = body;

    // Required-field validation
    if (
      !program_type ||
      !from_name ||
      !from_email ||
      !phone ||
      !education_level
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    // Length caps — block multi-MB spam payloads
    if (
      tooLong({
        program_type: [program_type, 120],
        from_name: [from_name, 100],
        from_email: [from_email, 254],
        phone: [phone, 30],
        education_level: [education_level, 60],
        department: [department, 120],
        message: [message, 2000],
      })
    ) {
      return NextResponse.json(
        { error: "One of your fields is too long. Please shorten it and try again." },
        { status: 400 },
      );
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Real domain (MX records)
    if (!(await isValidEmailDomain(from_email))) {
      return NextResponse.json(
        {
          error:
            "This email address does not appear to be valid. Please use a real email.",
        },
        { status: 400 },
      );
    }

    // Per-email dedup — one application per address per 24h.
    const emailKey = `krtc/scholarship:${from_email.toLowerCase()}`;
    if (await wasSeen(emailKey)) {
      return NextResponse.json(
        {
          error:
            "You have already submitted an application in the last 24 hours. We'll be in touch — please check your email.",
        },
        { status: 429 },
      );
    }

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Application service is not configured. Please email kekuleoninfo@gmail.com directly.",
        },
        { status: 503 },
      );
    }

    const { error } = await resend.emails.send({
      from: "KRTC Scholarships <noreply@kekuleon.com>",
      to: ["kekuleoninfo@gmail.com"],
      replyTo: from_email,
      subject: `[KRTC] Scholarship Application — ${program_type} — from ${from_name}`,
      html: scholarshipHtml({
        program_type,
        from_name,
        from_email,
        phone,
        education_level,
        department,
        message,
      }),
    });

    if (error) {
      console.error("Resend error (scholarship):", error);
      return NextResponse.json(
        { error: "Failed to submit application. Please try again." },
        { status: 500 },
      );
    }

    await markSeen(emailKey);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Scholarship API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

function scholarshipHtml(args: {
  program_type: string;
  from_name: string;
  from_email: string;
  phone: string;
  education_level: string;
  department?: string;
  message?: string;
}): string {
  const {
    program_type,
    from_name,
    from_email,
    phone,
    education_level,
    department,
    message,
  } = args;

  const row = (label: string, value: string) => `
    <tr><td style="padding-bottom:10px;">
      <span style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">${label}</span><br>
      <span style="font-size:14px;color:#111827;">${value}</span>
    </td></tr>`;

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
          <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">New Scholarship Application</h1>
          <p style="margin:6px 0 0;font-size:13px;color:#ffffff;opacity:0.9;">${escapeHtml(program_type)}</p>
        </td></tr>

        <tr><td style="padding:24px 32px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
            <tr><td style="padding:16px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row("Applicant", escapeHtml(from_name))}
                ${row("Email", `<a href="mailto:${escapeHtml(from_email)}" style="color:#E31837;text-decoration:none;">${escapeHtml(from_email)}</a>`)}
                ${row("Phone", escapeHtml(phone))}
                ${row("Education level", escapeHtml(education_level))}
                ${department ? row("Preferred department", escapeHtml(department)) : ""}
              </table>
            </td></tr>
          </table>
        </td></tr>

        ${
          message && message.trim()
            ? `<tr><td style="padding:24px 32px 0;">
                 <p style="margin:0 0 8px;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Motivation</p>
                 <div style="font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</div>
               </td></tr>`
            : ""
        }

        <tr><td style="padding:24px 32px;border-top:1px solid #e5e7eb;background-color:#f9fafb;margin-top:24px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">Reply directly to this email to respond to ${escapeHtml(from_name)}.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}
