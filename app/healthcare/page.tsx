import type { Metadata } from "next";
import HealthcarePageClient from "./HealthcarePageClient";

export const metadata: Metadata = {
  title: "Healthcare Programs",
  description:
    "KRTC's healthcare training programs — practical nursing skills, community health awareness, and clinical procedures developed for Bangladesh's healthcare workforce.",
  alternates: { canonical: "/healthcare" },
  openGraph: {
    title: "Healthcare Programs | KRTC",
    description:
      "Practical nursing and community healthcare training for Bangladesh's health workforce.",
    url: "/healthcare",
    type: "website",
  },
};

export default function HealthcarePage() {
  return <HealthcarePageClient />;
}
