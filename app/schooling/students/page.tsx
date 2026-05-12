import type { Metadata } from "next";
import StudentsPageClient from "./StudentsPageClient";

export const metadata: Metadata = {
  title: "KRTC Schooling Students",
  description:
    "Meet the students currently enrolled in KRTC's foundation program — their backgrounds, target disciplines, and learning journeys.",
  alternates: { canonical: "/schooling/students" },
  openGraph: {
    title: "KRTC Schooling Students",
    description:
      "Foundation-program students at KRTC, their backgrounds, and learning journeys.",
    url: "/schooling/students",
    type: "website",
  },
};

export default function StudentsPage() {
  return <StudentsPageClient />;
}
