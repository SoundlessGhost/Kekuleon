// Dynamic sitemap for kekuleon.com.
//
// Combines static routes with dynamic seminar, recap, and team-member
// slugs so search engines can discover every public page. Generated at
// build time and served at /sitemap.xml.

import type { MetadataRoute } from "next";
import { seminars, hasPublishedRecap } from "@/lib/seminars-data";
import { allTeamMembers } from "@/lib/team-data";

const SITE_URL = "https://kekuleon.com";

// Routes that don't depend on dynamic data. Ordered roughly by importance
// (homepage first, marketing/conversion pages next, deeper pages last) so
// `priority` values can be assigned consistently below.
const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/seminar", priority: 0.9, changeFrequency: "weekly" },
  { path: "/team", priority: 0.8, changeFrequency: "weekly" },
  { path: "/schooling", priority: 0.8, changeFrequency: "monthly" },
  { path: "/schooling/students", priority: 0.6, changeFrequency: "monthly" },
  { path: "/phd-programs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/scholarships", priority: 0.7, changeFrequency: "monthly" },
  { path: "/healthcare", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  {
    path: "/careers/university-coordinator",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  // Six service subpages — one per department.
  {
    path: "/services/chemistry-and-applied-chemical-sciences",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/pharmaceutical-sciences-and-drug-development",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/polymer-and-plastic-processing-technologies",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/materials-science-and-engineering-applications",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/textile-testing-and-quality-assurance",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/nursing-and-community-healthcare",
    priority: 0.7,
    changeFrequency: "monthly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Every seminar gets its own landing page at /seminar/<slug>.
  const seminarEntries: MetadataRoute.Sitemap = seminars.map((seminar) => ({
    url: `${SITE_URL}/seminar/${seminar.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Only include recap URLs for seminars whose recap is marked published.
  const recapEntries: MetadataRoute.Sitemap = seminars
    .filter((seminar) => hasPublishedRecap(seminar))
    .map((seminar) => ({
      url: `${SITE_URL}/seminar/recap/${seminar.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  // Every team-member profile is reachable at /team/<slug>.
  const teamEntries: MetadataRoute.Sitemap = Object.keys(allTeamMembers).map(
    (slug) => ({
      url: `${SITE_URL}/team/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }),
  );

  return [
    ...staticEntries,
    ...seminarEntries,
    ...recapEntries,
    ...teamEntries,
  ];
}
