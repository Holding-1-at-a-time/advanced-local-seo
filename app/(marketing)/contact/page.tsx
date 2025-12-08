import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/lead-form"
import { BreadcrumbSchema } from "@/components/json-ld-schema"
import { BUSINESS_INFO, SERVICE_AREAS } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Contact Us | ${BUSINESS_INFO.name} | San Antonio Auto Detailing`,
  description: `Contact ${BUSINESS_INFO.name} for professional auto detailing in San Antonio. Call ${BUSINESS_INFO.phone} or fill out our form. Valet service - we come to you!`,
  alternates: {
    canonical: `${BUSINESS_INFO.website}/contact`,
  },
}

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
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

          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Questions? Ready to book? We're here to help. Reach out and we'll respond within 2 hours during business
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Call Us</h3>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-lg font-bold text-primary hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
                <p className="mt-1 text-sm text-muted-foreground">Tue-Sun 7AM-10PM</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Email Us</h3>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary hover:underline break-all">
                  {BUSINESS_INFO.email}
                </a>
                <p className="mt-1 text-sm text-muted-foreground">Response within 24 hours</p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Service Area</h3>
                <p className="text-muted-foreground">San Antonio, TX</p>
                <p className="text-sm text-muted-foreground">{BUSINESS_INFO.serviceRadius} radius</p>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Hours</h3>
                <p className="text-muted-foreground">Tue-Sun: 7AM - 10PM</p>
                <p className="text-sm text-destructive">Monday: Closed</p>
              </CardContent>
            </Card>
          </div>

          {/* Form and Info Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                  </div>
                  <LeadForm source="contact_page" />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card className="border-primary/30 bg-primary/10">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Need Quick Help?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Call us now for immediate assistance</p>
                  <Button asChild size="lg" className="w-full gap-2">
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                      <Phone className="h-5 w-5" />
                      {BUSINESS_INFO.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Business Address */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Business Address</h3>
                  <address className="not-italic text-sm text-muted-foreground">
                    <strong className="text-foreground">{BUSINESS_INFO.name}</strong>
                    <br />
                    {BUSINESS_INFO.address.street}
                    <br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                  </address>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Areas We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_AREAS.slice(0, 6).map((area) => (
                      <span
                        key={area.slug}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                      >
                        {area.name}
                      </span>
                    ))}
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">+ more</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Find Us</h2>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-secondary">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(BUSINESS_INFO.address.full)}&zoom=14`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${BUSINESS_INFO.name} location map`}
            />
          </div>
        </div>
      </section>
    </>
  )
}
