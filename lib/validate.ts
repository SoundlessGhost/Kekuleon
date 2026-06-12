// Reject absurdly long field values before they reach the email body, the
// Google Sheet (cells cap ~50k chars) or the admin inbox. The caps are far
// larger than any real submission, so legitimate users never hit them — this
// only blocks multi-megabyte spam/abuse payloads.
//
// Usage:
//   const long = tooLong({ fullName: [fullName, 100], email: [email, 254] });
//   if (long) return 400 "… too long";
export function tooLong(
  checks: Record<string, readonly [value: unknown, max: number]>,
): string | null {
  for (const field of Object.keys(checks)) {
    const [value, max] = checks[field];
    if (typeof value === "string" && value.length > max) {
      return field;
    }
  }
  return null;
}
