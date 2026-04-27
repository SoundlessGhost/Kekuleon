# Seminar Registration — Admin Setup Guide

This document explains how to wire up the **Google Sheets webhook** that receives
seminar registrations from the website (`/api/seminar-register`).

The website itself does not store registrations — it forwards each submission to
a Google Apps Script Web App, which appends a row to a Google Sheet. This keeps
the architecture serverless and gives the admin team a familiar interface
(Sheets) for tracking attendance and certificates.

---

## 1. Create the Google Sheet

1. Sign in to a Google account that the KRTC admin team controls (recommended:
   `kekuleoninfo@gmail.com`).
2. Go to <https://sheets.new> and rename the file to:
   **KRTC Seminar Registrations**
3. In the first row, add these column headers (exact order matters — the Apps
   Script writes by index):

   | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O |
   |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
   | Timestamp | Seminar Slug | Name | Email | Phone | University | Department | Year | Student ID | Why Interested | Consent | IP | Status | Attended | Cert Sent |

4. Format columns:
   - **Timestamp (A):** Format → Number → Date time
   - **Attended (N) & Cert Sent (O):** Insert → Checkbox
   - **Status (M):** leave blank; admins fill in manually (e.g.
     `confirmed` / `cancelled` / `waitlist`)

---

## 2. Create the Apps Script Web App

1. With the sheet open: **Extensions → Apps Script**.
2. Replace `Code.gs` contents with the script in **§ 3** below.
3. Click **Project Settings** (gear icon) → **Script properties** → **Add
   property**:
   - Property: `WEBHOOK_SECRET`
   - Value: a random string of 32+ chars (e.g. generate one with
     `openssl rand -hex 24`). Save this value — you will paste the same string
     into Vercel.
4. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Description: `KRTC Seminar Registration Receiver`
   - Execute as: **Me** (the admin Google account)
   - Who has access: **Anyone**
5. Authorize the script (it will ask once). Copy the **Web app URL** that ends
   in `/exec` — this is your `SEMINAR_SHEETS_WEBHOOK_URL`.

> ⚠️ **Important:** Every time you change the script, click
> **Deploy → Manage deployments → Edit (pencil) → New version → Deploy**.
> Just saving the file does NOT update the live endpoint.

---

## 3. Apps Script — `Code.gs`

```javascript
/**
 * KRTC Seminar Registration Receiver
 * Receives a JSON POST from /api/seminar-register and appends a row.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOut({ ok: false, error: "no_payload" }, 400);
    }

    const payload = JSON.parse(e.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties().getProperty(
      "WEBHOOK_SECRET"
    );
    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonOut({ ok: false, error: "unauthorized" }, 401);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(payload.registeredAt || Date.now()),     // A: Timestamp
      payload.seminarSlug || "",                          // B
      payload.fullName || "",                             // C
      payload.email || "",                                // D
      payload.phone || "",                                // E
      payload.universityCode || "",                       // F
      payload.department || "",                           // G
      payload.yearOfStudy || "",                          // H
      payload.studentId || "",                            // I
      payload.whyInterested || "",                        // J
      payload.consent ? "yes" : "no",                    // K
      payload.ip || "",                                   // L
      "",                                                  // M: Status
      false,                                               // N: Attended
      false                                                // O: Cert Sent
    ]);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) }, 500);
  }
}

function jsonOut(obj, _statusCode) {
  // Apps Script Web Apps cannot set HTTP status codes — caller must inspect
  // the JSON `ok` field. The status arg is kept for readability only.
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/** Optional: GET handler so you can sanity-check the URL in a browser. */
function doGet() {
  return jsonOut({ ok: true, service: "krtc-seminar-receiver" });
}
```

---

## 4. Wire it into the website

Add these two values to your `.env.local` (development) **and** to Vercel
project → Settings → Environment Variables (production + preview):

```
SEMINAR_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfyc.../exec
SEMINAR_SHEETS_WEBHOOK_SECRET=<the same string you saved in Script properties>
```

Redeploy the website after adding env vars on Vercel.

---

## 5. Smoke test

1. Visit `https://<your-domain>/seminar`.
2. Fill the form with a real email you control. Submit.
3. You should see:
   - Green "You're registered!" card.
   - A new row in the Google Sheet (within 1–2 s).
   - Confirmation email in the registrant's inbox.
   - Notification email in `kekuleoninfo@gmail.com`.
4. Submit again with the **same email** — the API should respond
   `429 Already Registered`.

If a row does not appear:
- Open Apps Script → **Executions** to see the error log.
- Most common cause: the Web App was edited but not redeployed as a new version.

---

## 6. After the seminar — certificate workflow

This is intentionally manual for v1 (one or two seminars per year).

1. In the Sheet, tick **Attended (N)** for everyone who showed up. Cross-check
   against the on-site sign-in sheet.
2. Open the KRTC Canva certificate template (one-time design — KRTC red
   `#E31837`, signature of Md Zakaria Hossain as Founder & Chairman, North Zone
   Advisor co-signature optional).
3. Use Canva's **Bulk Create** feature: upload a CSV with `Name` and `Email`
   columns filtered to attended rows. Export as PDFs.
4. Email the PDFs as attachments. For ≤ 30 attendees, do this manually with
   Gmail. For larger volumes, use the free **Yet Another Mail Merge** Sheets
   add-on or the Gmail mail-merge script.
5. Tick **Cert Sent (O)** for everyone who has been emailed.

If seminars become frequent (monthly+), consider building an admin-only
`/api/seminar-cert` endpoint that auto-fills the certificate and emails it via
Resend. Out of scope for v1.

---

## 7. Privacy note

The Sheet contains personally identifiable information (name, email, phone,
university, student ID). Treat it accordingly:

- Only KRTC core admins should have edit access to the Sheet.
- Do not share the Apps Script URL publicly — the `WEBHOOK_SECRET` is the only
  thing protecting the endpoint from spam, and rotating it requires updating
  Vercel + redeploying the Web App.
- After the certificate is sent, the admin team may archive registration rows
  to a separate "Past Seminars" sheet to keep the working sheet small.
