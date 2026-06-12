// Canonical production origin — single source of truth for every absolute
// URL the site emits (metadataBase, OpenGraph, JSON-LD, robots, sitemap).
//
// The site is served at https://www.kekuleon.com; the apex (kekuleon.com)
// permanently redirects to www. All SEO URLs MUST use the www host so that
// canonical links, sitemap entries and OG image URLs point at the address
// that actually returns 200 (not the redirecting apex).
export const SITE_URL = "https://www.kekuleon.com";
