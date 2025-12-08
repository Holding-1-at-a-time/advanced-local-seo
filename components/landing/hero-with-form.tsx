import Image from "next/image"
import { Phone, Star, Shield, Award, Clock } from "lucide-react"
import { LeadForm } from "@/components/lead-form"
import { BUSINESS_INFO, RATING_DATA, CREDENTIALS } from "@/lib/constants"

interface HeroWithFormProps {
  serviceName: string
  serviceSlug: string
  headline: string
  subheadline: string
  heroImage?: string
  neighborhood?: string
}

export function HeroWithForm({
  serviceName,
  serviceSlug,
  headline,
  subheadline,
  heroImage,
  neighborhood,
}: HeroWithFormProps) {
  const source = neighborhood ? `landing_${serviceSlug}_${neighborhood}` : `landing_${serviceSlug}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-12 sm:py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Background Image (optional) */}
      {heroImage && (
        <div className="absolute inset-0 -z-10">
          <Image src={heroImage || "/placeholder.svg"} alt="" fill className="object-cover opacity-10" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="flex flex-col justify-center">
            {/* Trust badges row */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                <Shield className="h-4 w-4" />
                IDA Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-primary" />
                {CREDENTIALS.yearsExperience}+ Years
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="text-muted-foreground">
                  {RATING_DATA.averageRating} ({RATING_DATA.reviewCount} reviews)
                </span>
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              {headline}
            </h1>
            <p className="mb-6 text-lg text-muted-foreground lg:text-xl">{subheadline}</p>

            {/* Quick benefits */}
            <ul className="mb-8 space-y-3">
              {[
                "Valet Service - We Come to You",
                "IDA Certified Professional Technicians",
                "10% of Profits Support Local Youth",
                "Premium Products & Equipment",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Phone CTA for mobile */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-4 text-lg font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:hidden"
            >
              <Phone className="h-5 w-5" />
              Call Now: {BUSINESS_INFO.phone}
            </a>

            {/* Desktop phone */}
            <div className="hidden items-center gap-2 text-muted-foreground lg:flex">
              <Phone className="h-5 w-5 text-primary" />
              <span>Or call us:</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-lg font-semibold text-primary hover:underline">
                {BUSINESS_INFO.phone}
              </a>
              <span className="text-sm">
                <Clock className="mr-1 inline h-4 w-4" />
                Tue-Sun 7AM-10PM
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-foreground">Get Your Free Quote</h2>
              <p className="text-muted-foreground">Response within 2 hours during business hours</p>
            </div>
            <LeadForm serviceName={serviceName} serviceSlug={serviceSlug} neighborhood={neighborhood} source={source} />
          </div>
        </div>
      </div>
    </section>
  )
}
