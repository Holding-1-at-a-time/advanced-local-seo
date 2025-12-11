import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrustBadges } from "@/components/trust-badges"
import { BreadcrumbSchema } from "@/components/json-ld-schema"
import { SERVICES, BUSINESS_INFO, SERVICE_AREAS } from "@/lib/constants"
import { getServiceImage } from "@/lib/images"

export const metadata: Metadata = {
  title: "Auto Detailing Services San Antonio | One Detail At A Time",
  description:
    "Complete auto detailing services in San Antonio, TX. Ceramic coating, paint correction, interior detailing, headlight restoration & more. IDA Certified. We come to you!",
  alternates: {
    canonical: `${BUSINESS_INFO.website}/services`,
  },
}

const serviceCategories = [
  {
    title: "Paint Services",
    services: ["ceramic-coating", "paint-correction", "scratch-removal", "water-spot-removal"],
  },
  {
    title: "Interior Services",
    services: ["interior-deep-cleansing", "leather-conditioning", "odor-elimination", "pet-hair-removal"],
  },
  {
    title: "Exterior Services",
    services: ["auto-detailing", "exterior-hand-wash", "wheel-tire-detailing", "chrome-polishing"],
  },
  {
    title: "Specialty Services",
    services: ["headlight-restoration", "engine-detailing", "glass-treatment"],
  },
]

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-foreground">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Auto Detailing Services <span className="text-primary">San Antonio</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Professional detailing services for every need. From ceramic coating and paint correction to interior deep
              cleaning and specialty services. IDA Certified technicians, premium products, and valet convenience.
            </p>
            <TrustBadges variant="compact" />
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const serviceImage = getServiceImage(service.slug)
              return (
                <Card
                  key={service.slug}
                  className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <Image
                      src={serviceImage.src || "/placeholder.svg"}
                      alt={serviceImage.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                        {service.priceRange}
                      </span>
                      {service.featured && (
                        <span className="rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="mb-2 text-xl font-semibold text-foreground">{service.name}</h2>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                    <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </span>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Services by Category</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <div key={category.title} className="rounded-xl border border-border bg-background p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((slug) => {
                    const service = SERVICES.find((s) => s.slug === slug)
                    if (!service) return null
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {service.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">We Serve All San Antonio Areas</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our mobile detailing services cover the entire San Antonio metro area. We come to your home, office, or
              wherever is convenient for you.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area.slug}
                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground"
              >
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Book your detail today or call us for a custom quote. 20% deposit secures your appointment.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8">
              <Link href="/booking">Book Online</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                <Phone className="h-5 w-5" />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
