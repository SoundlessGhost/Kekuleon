import type { Metadata } from "next";
import PharmaceuticalPageClient from "./PharmaceuticalPageClient";

export const metadata: Metadata = {
  title: "Pharmaceutical Sciences & Drug Development",
  description:
    "Training in pharmaceutical analysis, formulation, quality control, and drug development methodology. Laboratory-first curriculum aligned with industry standards at KRTC.",
  alternates: {
    canonical: "/services/pharmaceutical-sciences-and-drug-development",
  },
  openGraph: {
    title: "Pharmaceutical Sciences & Drug Development | KRTC",
    description:
      "Pharmaceutical sciences training at KRTC — formulation, QC, analysis, and applied drug development.",
    url: "/services/pharmaceutical-sciences-and-drug-development",
    type: "website",
  },
};

export default function PharmaceuticalPage() {
  return <PharmaceuticalPageClient />;
}
