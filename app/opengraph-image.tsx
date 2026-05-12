// Site-wide Open Graph image generator.
//
// Generated at build time by Next.js's `ImageResponse` (Satori under the
// hood). The output is the default 1200×630 social-share card used when
// any KRTC page is linked on Facebook, LinkedIn, WhatsApp, Twitter, etc.
//
// Because this file lives at the root of `app/`, the generated image
// applies to every route by default — individual pages can still override
// by exporting their own `opengraph-image.tsx` in their segment.

import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Image metadata — Next.js reads these and wires up the meta tags.
export const alt =
  "Kekuleon Research and Training Center — bridging the theory-practice gap in science education in Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  // Embed the wordmark as base64 so Satori doesn't have to fetch over
  // the network during build.
  const logoBuffer = readFileSync(
    join(process.cwd(), "public/images/logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // Dark navy → slightly lighter navy gradient. Brand red accent
          // is reserved for the tagline + footer rule so the image has
          // one clear focal color rather than competing reds.
          backgroundImage:
            "linear-gradient(135deg, #14142b 0%, #1a1a2e 55%, #232347 100%)",
          padding: "72px 80px",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          position: "relative",
        }}
      >
        {/* Left-edge red accent strip — subtle brand mark */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 12,
            backgroundImage:
              "linear-gradient(180deg, #E31837 0%, #b81229 100%)",
            display: "flex",
          }}
        />

        {/* Top row: logo on a white card so the wordmark colors read
            cleanly against the dark background. */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderRadius: 16,
              padding: "16px 24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              width={240}
              height={120}
              alt=""
              style={{ display: "block" }}
            />
          </div>
        </div>

        {/* Middle: headline + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            marginTop: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 24,
              maxWidth: 1000,
            }}
          >
            Kekuleon Research and Training Center
          </div>

          <div
            style={{
              display: "flex",
              color: "#ff5a73",
              fontSize: 32,
              fontWeight: 500,
              lineHeight: 1.35,
              maxWidth: 980,
            }}
          >
            Bridging the Theory–Practice Gap in Science Education in
            Bangladesh
          </div>
        </div>

        {/* Bottom: domain + KRTC mark */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9ca3af",
            fontSize: 22,
            fontWeight: 500,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "flex" }}>kekuleon.com</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 32,
                height: 2,
                backgroundColor: "#E31837",
              }}
            />
            <div
              style={{
                display: "flex",
                color: "#ffffff",
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              KRTC
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
