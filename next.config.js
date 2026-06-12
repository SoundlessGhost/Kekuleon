/** @type {import('next').NextConfig} */

// Content-Security-Policy — shipped in REPORT-ONLY mode first. In this mode
// the browser does NOT block anything; it only reports (to the console) what
// *would* have been blocked. This lets us confirm Google Analytics, next/font,
// Cloudinary/Unsplash images and framer-motion inline styles all pass before
// switching to an enforcing `Content-Security-Policy` header. 'unsafe-inline'
// is required for the GA snippet + Next.js bootstrap scripts and for Tailwind/
// framer-motion inline styles.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://res.cloudinary.com https://images.unsplash.com https://via.placeholder.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Enforced security headers. These are safe to enforce immediately (unlike
// the CSP above) — they don't change what resources load, they just harden
// framing, MIME-sniffing, referrer leakage and feature access.
const securityHeaders = [
  // Clickjacking: refuse to be embedded in any iframe.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Report-only for now — see comment above. Switch the key to
  // "Content-Security-Policy" (without -Report-Only) to enforce.
  {
    key: "Content-Security-Policy-Report-Only",
    value: contentSecurityPolicy,
  },
];

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        // Cloudinary CDN — used for seminar recap photos (and any other
        // images we host there). Cloud name is `dohbigfue`; the path
        // restriction means only our account's URLs are allowed.
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dohbigfue/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
