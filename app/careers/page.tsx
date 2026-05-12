import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team building KRTC. Open roles for instructors, researchers, university coordinators, and operations staff across Bangladesh.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | KRTC",
    description:
      "Open roles at Kekuleon Research and Training Center — instructors, researchers, coordinators.",
    url: "/careers",
    type: "website",
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
