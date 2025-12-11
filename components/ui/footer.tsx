import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink, ArrowUpRight } from "lucide-react"
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS, RATING_DATA } from "@/lib/constants"

export function Footer() {
  const featuredServices = SERVICES.filter((s) => s.featured)
  const otherServices = SERVICES.filter((s) => !s.featured).slice(0, 4)

  return (
    <footer className="relative border-t border-border bg-secondary/30">
      {/* Gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-md">
                OD
              </div>
              <div>
                <div className="font-semibold text-foreground tracking-tight">One Detail At A Time</div>
                <div className="text-sm text-muted-foreground">IDA Certified Detailing</div>
              </div>
            </Link>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Professional auto detailing in San Antonio, TX. We bring the detail shop to you with our premium valet
              service.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">{RATING_DATA.averageRating}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-primary text-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({RATING_DATA.reviewCount} reviews)</span>
            </div>

            <div className="flex gap-3">
              {[
                { href: BUSINESS_INFO.social.facebook, icon: Facebook, label: "Facebook" },
                { href: BUSINESS_INFO.social.instagram, icon: Instagram, label: "Instagram" },
                { href: BUSINESS_INFO.social.google, icon: ExternalLink, label: "Google" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {[...featuredServices, ...otherServices].map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {service.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary hover:underline font-medium">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.slug} className="text-muted-foreground">
                  {area.name}
                </li>
              ))}
              <li className="text-muted-foreground">& surrounding areas</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4" itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h3>
            <meta itemProp="name" content={BUSINESS_INFO.name} />
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  itemProp="telephone"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  itemProp="email"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li
                className="flex items-center gap-3 text-muted-foreground"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>
                  <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>,{" "}
                  <span itemProp="addressRegion">{BUSINESS_INFO.address.state}</span>{" "}
                  <span itemProp="postalCode">{BUSINESS_INFO.address.zip}</span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <span>Tue-Sun: 7AM - 10PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
