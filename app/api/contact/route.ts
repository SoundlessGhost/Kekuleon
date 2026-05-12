import dns from "dns/promises";

import { join } from "path";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { existsSync, readFileSync, writeFileSync } from "fs";

// Resend is instantiated lazily so the route module doesn't crash on
// load when RESEND_API_KEY is missing (e.g. CI builds without secrets,
// or local dev without the key). The handler returns 503 if the client
// can't be constructed.
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

// Rate limit: 1 email per email address per 24 hours
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

function isRateLimited(email: string): boolean {
  const data = getRateLimitData();
  const lastSent = data[email.toLowerCase()];
  if (!lastSent) return false;
  const hoursSince = (Date.now() - lastSent) / (1000 * 60 * 60);
  return hoursSince < RATE_LIMIT_HOURS;
}

function recordEmail(email: string) {
  const data = getRateLimitData();
  // Clean old entries (older than 24h)
  const now = Date.now();
  for (const key of Object.keys(data)) {
    if (now - data[key] > RATE_LIMIT_HOURS * 60 * 60 * 1000) {
      delete data[key];
    }
  }
  data[email.toLowerCase()] = now;
  saveRateLimitData(data);
}

// Validate email domain has real MX records
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { from_name, from_email, phone, subject, message } = body;

    // Validation
    if (!from_name || !from_email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Verify email domain has real mail servers
    const validDomain = await isValidEmailDomain(from_email);
    if (!validDomain) {
      return NextResponse.json(
        { error: "This email address does not appear to be valid. Please use a real email." },
        { status: 400 },
      );
    }

    // Rate limit check
    if (isRateLimited(from_email)) {
      return NextResponse.json(
        {
          error:
            "You have already sent a message in the last 24 hours. Please try again later.",
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
            "Email service is not configured. Please email kekuleoninfo@gmail.com directly.",
        },
        { status: 503 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "KRTC Contact Form <noreply@kekuleon.com>",
      to: ["kekuleoninfo@gmail.com"],
      replyTo: from_email,
      subject: `[KRTC] ${subject} — from ${from_name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color: #E31837; padding: 28px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.3px;">
                New Contact Form Submission
              </h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #ffffff; opacity: 0.9;">
                KRTC Website — <a href="https://www.kekuleon.com" style="color: #ffffff; text-decoration: none;">kekuleon.com</a>
              </p>
            </td>
          </tr>

          <!-- Subject -->
          <tr>
            <td style="padding: 28px 32px 0;">
              <p style="margin: 0 0 4px; font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                Subject
              </p>
              <p style="margin: 0; font-size: 18px; color: #111827; font-weight: 600;">
                ${subject}
              </p>
            </td>
          </tr>

          <!-- Sender Info -->
          <tr>
            <td style="padding: 24px 32px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 10px;">
                          <span style="font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">From</span><br>
                          <span style="font-size: 15px; color: #111827; font-weight: 600;">${from_name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: ${phone ? "10px" : "0"};">
                          <span style="font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</span><br>
                          <a href="mailto:${from_email}" style="font-size: 14px; color: #E31837; text-decoration: none;">${from_email}</a>
                        </td>
                      </tr>
                      ${
                        phone
                          ? `<tr>
                        <td>
                          <span style="font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Phone</span><br>
                          <span style="font-size: 14px; color: #374151;">${phone}</span>
                        </td>
                      </tr>`
                          : ""
                      }
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 24px 32px;">
              <p style="margin: 0 0 8px; font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
                Message
              </p>
              <div style="font-size: 14px; color: #374151; line-height: 1.7; white-space: pre-wrap;">
${message}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; border-top: 1px solid #e5e7eb; background-color: #f9fafb;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                Sent on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
              </p>
              <p style="margin: 4px 0 0; font-size: 12px; color: #9ca3af;">
                You can reply directly to this email to respond to ${from_name}.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 },
      );
    }

    // Record this email for rate limiting
    recordEmail(from_email);

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
