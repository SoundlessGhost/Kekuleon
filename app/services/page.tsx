import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services & Departments",
  description:
    "KRTC offers applied training and research across six departments: Chemistry, Pharmaceutical Sciences, Polymer Processing, Materials Science, Textile Testing, and Nursing & Community Healthcare.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Departments | KRTC",
    description:
      "Six departments offering hands-on laboratory training, applied research, and industry-aligned curricula.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
