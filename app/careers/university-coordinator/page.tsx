import type { Metadata } from "next";
import UniversityCoordinatorPageClient from "./UniversityCoordinatorPageClient";

export const metadata: Metadata = {
  title: "University Coordinator (Volunteer)",
  description:
    "Become a KRTC University Coordinator at your campus — represent KRTC, host seminars, and connect peers to applied science and research opportunities. Apply online.",
  alternates: { canonical: "/careers/university-coordinator" },
  openGraph: {
    title: "University Coordinator (Volunteer) | KRTC",
    description:
      "Volunteer role for university students to represent KRTC on campus and host seminars.",
    url: "/careers/university-coordinator",
    type: "website",
  },
};

export default function UniversityCoordinatorPage() {
  return <UniversityCoordinatorPageClient />;
}
