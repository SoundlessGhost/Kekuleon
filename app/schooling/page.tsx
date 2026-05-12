import type { Metadata } from "next";
import SchoolingPageClient from "./SchoolingPageClient";

export const metadata: Metadata = {
  title: "KRTC Schooling",
  description:
    "KRTC's foundation-level academic program — bridging high-school science into university-readiness with rigorous fundamentals, practical labs, and personalised mentorship.",
  alternates: { canonical: "/schooling" },
  openGraph: {
    title: "KRTC Schooling | Foundation Program",
    description:
      "Foundation-level academic preparation that bridges high-school into university science readiness.",
    url: "/schooling",
    type: "website",
  },
};

export default function SchoolingPage() {
  return <SchoolingPageClient />;
}
