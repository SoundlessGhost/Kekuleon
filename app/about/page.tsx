import type { Metadata } from "next";
import { getLeadership } from "@/lib/team-data";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Kekuleon Research and Training Center bridges the theory-practice gap in science education in Bangladesh through integrated research, laboratory training, and community engagement.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About KRTC | Kekuleon Research and Training Center",
    description:
      "An emerging initiative in Bangladesh strengthening science education through laboratory training, research exposure, and industry collaboration.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  const leaders = getLeadership();
  return <AboutPageClient leaders={leaders} />;
}
