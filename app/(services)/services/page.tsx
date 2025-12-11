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

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <span className="text-border">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-foreground font-medium">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Auto Detailing Services
              <span className="block gradient-text">San Antonio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional detailing services for every need. From ceramic coating and paint correction to interior deep
              cleaning. IDA Certified technicians, premium products, and valet convenience.
            </p>
            <TrustBadges variant="compact" />
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const serviceImage = getServiceImage(service.slug)
              return (
                <Card
                  key={service.slug}
                  className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-elevated hover-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={serviceImage.src || "/placeholder.svg"}
                      alt={serviceImage.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-full bg-primary/90 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-md">
                        {service.priceRange}
                      </span>
                      {service.featured && (
                        <span className="rounded-full border border-primary/50 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl lg:text-4xl font-bold text-foreground">Services by Category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-soft"
              >
                <h3 className="mb-4 text-lg font-semibold text-foreground">{category.title}</h3>
                <ul className="space-y-3">
                  {category.services.map((slug) => {
                    const service = SERVICES.find((s) => s.slug === slug)
                    if (!service) return null
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}`}
                          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary group"
                        >
                          <CheckCircle className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">We Serve All San Antonio Areas</h2>
            <p className="text-lg text-muted-foreground">
              Our mobile detailing services cover the entire San Antonio metro area. We come to your home, office, or
              wherever is convenient.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area.slug}
                className="rounded-full border border-border/50 bg-secondary/50 px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Book your detail today or call us for a custom quote. 20% deposit secures your appointment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Button asChild size="lg" className="rounded-full px-10 h-14 shadow-md hover:shadow-lg transition-all">
              <Link href="/booking">Book Online</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-10 h-14 bg-transparent hover:bg-secondary transition-all"
            >
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                <Phone className="mr-2 h-5 w-5" />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
