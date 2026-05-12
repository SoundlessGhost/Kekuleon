import type { Metadata } from "next";
import PhdProgramsPageClient from "./PhdProgramsPageClient";

export const metadata: Metadata = {
  title: "PhD Programs",
  description:
    "Pathways to doctoral research in chemistry, pharmaceutical sciences, materials, polymer, textile, and healthcare — supported by KRTC's research mentorship and international collaborations.",
  alternates: { canonical: "/phd-programs" },
  openGraph: {
    title: "PhD Programs | KRTC",
    description:
      "Pathways to doctoral research across KRTC's six departments, with mentorship and international collaboration.",
    url: "/phd-programs",
    type: "website",
  },
};

export default function PhdProgramsPage() {
  return <PhdProgramsPageClient />;
}
