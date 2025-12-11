import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Star, Shield, Clock, MapPin, CheckCircle, Sparkles, Heart, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { TrustBadges } from "@/components/trust-badges"
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS, RATING_DATA, CREDENTIALS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Professional Auto Detailing San Antonio | One Detail At A Time",
  description: `Premium auto detailing in San Antonio, TX. IDA Certified with ${CREDENTIALS.yearsExperience}+ years experience. Ceramic coating, paint correction, interior detailing & more. ${RATING_DATA.reviewCount}+ five-star reviews. Valet service - we come to you!`,
  alternates: {
    canonical: BUSINESS_INFO.website,
  },
}

const featuredServices = SERVICES.filter((s) => s.featured)

const testimonials = [
  {
    name: "Michael R.",
    location: "Stone Oak",
    rating: 5,
    text: "Absolutely incredible work! My car looks better than when I bought it. The ceramic coating is flawless.",
    service: "Ceramic Coating",
  },
  {
    name: "Sarah T.",
    location: "Alamo Heights",
    rating: 5,
    text: "The convenience of the valet service is unmatched. Professional, thorough, and my car has never looked better.",
    service: "Auto Detailing",
  },
  {
    name: "James L.",
    location: "Medical Center",
    rating: 5,
    text: "Had swirl marks removed with paint correction. The results exceeded my expectations. Highly recommend!",
    service: "Paint Correction",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Book Online",
    description: "Schedule your service online or call us. We'll confirm within 2 hours.",
  },
  {
    step: 2,
    title: "We Come to You",
    description: "Our mobile team arrives at your location with all equipment needed.",
  },
  {
    step: 3,
    title: "Expert Service",
    description: "IDA certified detailers work their magic on your vehicle.",
  },
  {
    step: 4,
    title: "Love Your Car",
    description: "Enjoy your freshly detailed vehicle. We guarantee your satisfaction.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <Shield className="h-4 w-4" />
                IDA Certified • {CREDENTIALS.yearsExperience}+ Years Experience
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Auto Detailing <span className="text-primary">San Antonio</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
                Professional auto detailing that comes to you. Ceramic coating, paint correction, interior detailing &
                more. Experience the difference with {BUSINESS_INFO.name}.
              </p>

              {/* Quick Stats */}
              <div className="mb-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold text-foreground">{RATING_DATA.averageRating}</span>
                  <span className="text-muted-foreground">({RATING_DATA.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Valet Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">10% to Charity</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2 px-8">
                  <Link href="/booking">
                    <Sparkles className="h-5 w-5" />
                    Book Your Detail
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                    <Phone className="h-5 w-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>
            </div>

            {/* Lead Form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-foreground">Get a Free Quote</h2>
                <p className="text-muted-foreground">Response within 2 hours during business hours</p>
              </div>
              <LeadForm source="homepage_hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4">
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Our Premium Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From ceramic coating to full auto detailing, we offer comprehensive services to keep your vehicle looking
              its best in San Antonio, TX.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card
                key={service.slug}
                className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={`/.jpg?height=300&width=480&query=${encodeURIComponent(service.name + " car detailing san antonio")}`}
                    alt={`${service.name} service in San Antonio, TX`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                      {service.priceRange}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{service.name} San Antonio</h3>
                  <p className="mb-4 text-muted-foreground">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services" className="gap-2">
                View All 15 Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-border bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Getting your car detailed has never been easier. We bring the shop to you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border lg:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">What San Antonio Says</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {RATING_DATA.reviewCount}+ five-star reviews from happy customers across San Antonio
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="mb-4 text-foreground">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {testimonial.service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/reviews" className="gap-2">
                Read All Reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="border-y border-border bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Serving All of San Antonio</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We provide mobile detailing services throughout San Antonio and surrounding areas within a{" "}
              {BUSINESS_INFO.serviceRadius} radius.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.slug}
                className="flex items-center gap-2 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/50"
              >
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-medium text-foreground">{area.name}</div>
                  <div className="text-xs text-muted-foreground">{area.travelTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                  <Heart className="h-4 w-4" />
                  Giving Back
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                  10% of Profits Support Local Youth
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Every detail supports Junior Achievement of South Texas, helping young people learn business skills
                  and prepare for their futures. When you choose us, you're investing in San Antonio's next generation.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Supporting local education programs",
                    "Teaching entrepreneurship to students",
                    "Building financial literacy in youth",
                    "Creating future business leaders",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
                  <Link href="/about">Learn More About Our Mission</Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src="/children-learning-business-skills-junior-achieveme.jpg"
                  alt="Junior Achievement of South Texas - Children learning business skills"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-gradient-to-b from-secondary/50 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Ready for a Showroom Shine?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Book your detail today and experience why San Antonio trusts {BUSINESS_INFO.name} for all their auto
            detailing needs.
          </p>
          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 px-8">
              <Link href="/booking">
                <Sparkles className="h-5 w-5" />
                Book Online Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                <Phone className="h-5 w-5" />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            20% deposit required to secure your appointment. Open Tuesday-Sunday, 7AM-10PM.
          </p>
        </div>
      </section>
    </>
  )
}
