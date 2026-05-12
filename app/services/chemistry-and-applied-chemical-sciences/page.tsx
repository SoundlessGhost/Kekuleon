import type { Metadata } from "next";
import ChemistryPageClient from "./ChemistryPageClient";

export const metadata: Metadata = {
  title: "Chemistry & Applied Chemical Sciences",
  description:
    "Hands-on training in analytical, organic, and inorganic chemistry with applied research in pharmaceutical, materials, and environmental contexts. Laboratory-first curriculum at KRTC.",
  alternates: {
    canonical: "/services/chemistry-and-applied-chemical-sciences",
  },
  openGraph: {
    title: "Chemistry & Applied Chemical Sciences | KRTC",
    description:
      "Applied chemistry training and research at KRTC — laboratory skills, instrumentation, and industry-aligned methodology.",
    url: "/services/chemistry-and-applied-chemical-sciences",
    type: "website",
  },
};

export default function ChemistryPage() {
  return <ChemistryPageClient />;
}
