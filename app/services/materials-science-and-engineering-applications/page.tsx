import type { Metadata } from "next";
import MaterialsPageClient from "./MaterialsPageClient";

export const metadata: Metadata = {
  title: "Materials Science & Engineering Applications",
  description:
    "Training in materials characterization, mechanical testing, and engineering applications across metals, ceramics, composites, and nanomaterials at KRTC.",
  alternates: {
    canonical: "/services/materials-science-and-engineering-applications",
  },
  openGraph: {
    title: "Materials Science & Engineering Applications | KRTC",
    description:
      "Materials science training at KRTC — characterization, testing, and engineering applications.",
    url: "/services/materials-science-and-engineering-applications",
    type: "website",
  },
};

export default function MaterialsPage() {
  return <MaterialsPageClient />;
}
