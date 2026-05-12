import type { Metadata } from "next";
import PolymerPageClient from "./PolymerPageClient";

export const metadata: Metadata = {
  title: "Polymer & Plastic Processing Technologies",
  description:
    "Applied training in polymer chemistry, plastic processing, characterization, and quality testing — preparing students for Bangladesh's plastics and packaging industries.",
  alternates: {
    canonical: "/services/polymer-and-plastic-processing-technologies",
  },
  openGraph: {
    title: "Polymer & Plastic Processing Technologies | KRTC",
    description:
      "Polymer chemistry and plastic processing training with applied industry methodology at KRTC.",
    url: "/services/polymer-and-plastic-processing-technologies",
    type: "website",
  },
};

export default function PolymerPage() {
  return <PolymerPageClient />;
}
