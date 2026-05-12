import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog & Stories",
  description:
    "Stories, campaign recaps, and reflections from KRTC's classrooms, laboratories, and community outreach — covering science education, research, and community impact in Bangladesh.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Stories | KRTC",
    description:
      "Field stories, classroom moments, and community outreach recaps from KRTC.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
