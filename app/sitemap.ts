import type { MetadataRoute } from "next"
import { SERVICES, SERVICE_AREAS, BUSINESS_INFO } from "@/lib/constants"

const CLUSTER_TOPICS: Record<string, string[]> = {
  "auto-detailing": [
    "paint-protection",
    "interior-vs-exterior",
    "benefits",
    "pricing-guide",
    "diy-vs-professional",
    "seasonal-care",
  ],
  "ceramic-coating": [
    "what-is-ceramic-coating",
    "ceramic-vs-wax",
    "longevity",
    "preparation",
    "maintenance",
    "cost-breakdown",
  ],
  "paint-correction": [
    "swirl-marks",
    "scratch-types",
    "single-vs-multi-stage",
    "oxidation-removal",
    "before-ceramic-coating",
    "machine-polishing",
  ],
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_INFO.website

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/booking`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
  ]

  // Service pillar pages
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  const clusterPages = Object.entries(CLUSTER_TOPICS).flatMap(([serviceSlug, clusters]) =>
    clusters.map((clusterSlug) => ({
      url: `${baseUrl}/services/${serviceSlug}/${clusterSlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  )

  // Landing pages for main services
  const landingPages = SERVICES.filter((s) => s.featured).map((service) => ({
    url: `${baseUrl}/landing/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Neighborhood-specific landing pages for featured services
  const neighborhoodPages = SERVICES.filter((s) => s.featured).flatMap((service) =>
    SERVICE_AREAS.slice(0, 4).map((area) => ({
      url: `${baseUrl}/landing/${service.slug}-${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  )

  return [...staticPages, ...servicePages, ...clusterPages, ...landingPages, ...neighborhoodPages]
}
