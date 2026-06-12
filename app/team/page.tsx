import type { Metadata } from "next";
import { getTeamPageData } from "@/lib/team-data";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the researchers, instructors, advisors, and coordinators behind Kekuleon Research and Training Center — a multi-disciplinary team driving science education across Bangladesh.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | KRTC",
    description:
      "Researchers, instructors, advisors, and zone coordinators driving KRTC's mission across Bangladesh.",
    url: "/team",
    type: "website",
  },
};

export default function TeamPage() {
  const data = getTeamPageData();
  return <TeamPageClient data={data} />;
}
