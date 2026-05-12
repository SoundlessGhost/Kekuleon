import type { Metadata } from "next";
import ScholarshipsPageClient from "./ScholarshipsPageClient";

export const metadata: Metadata = {
  title: "Scholarships",
  description:
    "Need-based and merit scholarships at KRTC — making practical, research-aligned science education accessible to talented students across Bangladesh.",
  alternates: { canonical: "/scholarships" },
  openGraph: {
    title: "Scholarships | KRTC",
    description:
      "Need-based and merit scholarships for KRTC programs — apply online.",
    url: "/scholarships",
    type: "website",
  },
};

export default function ScholarshipsPage() {
  return <ScholarshipsPageClient />;
}
