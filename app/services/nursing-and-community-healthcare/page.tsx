import type { Metadata } from "next";
import NursingPageClient from "./NursingPageClient";

export const metadata: Metadata = {
  title: "Nursing & Community Healthcare",
  description:
    "Practical nursing skills and community healthcare training — clinical procedures, patient care, and health-system awareness for the next generation of Bangladeshi nurses at KRTC.",
  alternates: { canonical: "/services/nursing-and-community-healthcare" },
  openGraph: {
    title: "Nursing & Community Healthcare | KRTC",
    description:
      "Practical nursing and community healthcare training at KRTC.",
    url: "/services/nursing-and-community-healthcare",
    type: "website",
  },
};

export default function NursingPage() {
  return <NursingPageClient />;
}
