import { BUSINESS_INFO, RATING_DATA, type SERVICES, SERVICE_AREAS, CREDENTIALS } from "@/lib/constants"

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "@id": `${BUSINESS_INFO.website}/#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    foundingDate: BUSINESS_INFO.established.toString(),
    description: `Professional auto detailing services in San Antonio, TX. IDA Certified with ${CREDENTIALS.yearsExperience}+ years experience. We bring the detail shop to you with our premium valet service.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: `${area.name}, San Antonio, TX`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_DATA.averageRating.toString(),
      reviewCount: RATING_DATA.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    priceRange: "$50 - $1500",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "IDA Certified Detailer",
    },
    sameAs: [BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram, BUSINESS_INFO.social.google],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_INFO.website}/#localbusiness`,
    name: BUSINESS_INFO.name,
    image: `${BUSINESS_INFO.website}/og-image.jpg`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: BUSINESS_INFO.website,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_DATA.averageRating.toString(),
      reviewCount: RATING_DATA.reviewCount.toString(),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

interface ServiceSchemaProps {
  service: (typeof SERVICES)[number]
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS_INFO.website}/services/${service.slug}`,
    name: `${service.name} San Antonio`,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
      },
    },
    areaServed: {
      "@type": "City",
      name: "San Antonio, TX",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: service.priceRange,
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; href: string }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS_INFO.website}${item.href}`,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
