import type { MetadataRoute } from "next"
import { BUSINESS_INFO } from "@/lib/constants"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${BUSINESS_INFO.website}/sitemap.xml`,
  }
}
