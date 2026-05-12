import type { Metadata } from "next";
import TextilePageClient from "./TextilePageClient";

export const metadata: Metadata = {
  title: "Textile Testing & Quality Assurance",
  description:
    "Applied training in fabric testing, fiber analysis, colourfastness, and textile quality assurance — preparing students for Bangladesh's RMG and textile industries.",
  alternates: {
    canonical: "/services/textile-testing-and-quality-assurance",
  },
  openGraph: {
    title: "Textile Testing & Quality Assurance | KRTC",
    description:
      "Textile testing and QA training at KRTC — laboratory skills for the RMG and textile industries.",
    url: "/services/textile-testing-and-quality-assurance",
    type: "website",
  },
};

export default function TextilePage() {
  return <TextilePageClient />;
}
