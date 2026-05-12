import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact KRTC",
  description:
    "Get in touch with Kekuleon Research and Training Center. Reach out for admissions, programs, partnerships, or general questions — we usually respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact KRTC | Kekuleon Research and Training Center",
    description:
      "Email, phone, and office address for KRTC. Send us a message and we'll get back within one business day.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
