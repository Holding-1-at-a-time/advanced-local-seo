import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink } from "lucide-react"
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS, RATING_DATA } from "@/lib/constants"

export function Footer() {
  const featuredServices = SERVICES.filter((s) => s.featured)
  const otherServices = SERVICES.filter((s) => !s.featured).slice(0, 6)

  return (
    <footer className="border-t border-border bg-card">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                OD
              </div>
              <div>
                <div className="font-bold text-foreground">One Detail At A Time</div>
                <div className="text-xs text-muted-foreground">IDA Certified Detailing</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional auto detailing in San Antonio, TX. We bring the detail shop to you with our premium valet
              service.
            </p>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-primary font-semibold">{RATING_DATA.averageRating}</span>
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-muted-foreground">({RATING_DATA.reviewCount} reviews)</span>
            </div>
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Google Business"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[...featuredServices, ...otherServices].map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <span className="text-muted-foreground">{area.name}</span>
                </li>
              ))}
              <li className="text-muted-foreground">& surrounding areas</li>
            </ul>
          </div>

          {/* Contact Info with Schema */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="mb-4 font-semibold text-foreground">Contact Us</h3>
            <meta itemProp="name" content={BUSINESS_INFO.name} />
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary"
                  itemProp="telephone"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary"
                  itemProp="email"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li
                className="flex items-start gap-3 text-muted-foreground"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span>
                  <br />
                  <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>,{" "}
                  <span itemProp="addressRegion">{BUSINESS_INFO.address.state}</span>{" "}
                  <span itemProp="postalCode">{BUSINESS_INFO.address.zip}</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Tue-Sun: 7AM - 10PM
                  <br />
                  Monday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
