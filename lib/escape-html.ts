// Escape a user-supplied value for safe interpolation into an HTML email
// body. Without this, form fields (name, subject, message, …) are rendered
// as live HTML in the recipient's inbox — letting an attacker inject fake
// links / phishing markup that appears to come from KRTC. String() guards
// against non-string inputs (numbers, null) that would otherwise throw.
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
