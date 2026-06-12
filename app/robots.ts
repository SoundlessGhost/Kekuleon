// robots.txt for kekuleon.com.
//
// Allow all crawlers to access every public page and point them to the
// sitemap. API routes are blocked because they return JSON, not content
// meant for indexing.

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
