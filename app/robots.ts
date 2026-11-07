import type { MetadataRoute } from "next";

// No blanket Disallow: link-preview crawlers obey robots.txt. Indexing is blocked by the noindex meta + X-Robots-Tag header.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }] };
}
