// Per-team-member profile page.
//
// Server component so we can emit per-member metadata for OpenGraph /
// Twitter share previews and statically generate every member route at
// build time (better SEO and faster first paint). The actual UI is in
// the client component below, which keeps its existing `useParams()` +
// `getMemberBySlug` lookup — the server here only adds metadata and
// build-time route enumeration.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allTeamMembers,
  getMemberBySlug,
} from "@/lib/team-data";
import TeamMemberPageClient from "./TeamMemberPageClient";

interface PageProps {
  // Next.js 15+ — `params` is a Promise, must be awaited.
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(allTeamMembers).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    return {
      title: "Member Not Found",
      description: "The requested team-member profile could not be found.",
    };
  }

  const title = `${member.name} — ${member.title}`;
  const description = `${member.name}, ${member.title}${
    member.department ? ` at ${member.department}` : ""
  }. Part of the Kekuleon Research and Training Center team.`;

  const ogImages = member.image
    ? [{ url: member.image, alt: member.name }]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/team/${slug}` },
    openGraph: {
      title: `${member.name} | KRTC`,
      description,
      url: `/team/${slug}`,
      type: "profile",
      images: ogImages,
    },
    twitter: {
      card: ogImages ? "summary_large_image" : "summary",
      title: `${member.name} | KRTC`,
      description,
      images: ogImages?.map((img) => img.url),
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  // Surface a real 404 (sets HTTP 404 status, triggers the app's
  // not-found UI) instead of leaving the client to render an inline
  // "Member Not Found" panel with a 200 status.
  if (!member) notFound();

  return <TeamMemberPageClient member={member} />;
}
