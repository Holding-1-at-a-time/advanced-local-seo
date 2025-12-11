import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Star, Shield, Clock, MapPin, CheckCircle, Sparkles, Heart, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { TrustBadges } from "@/components/trust-badges"
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS, RATING_DATA, CREDENTIALS } from "@/lib/constants"
import { getServiceImage } from "@/lib/images"

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
    icon: "📅",
  },
  {
    step: 2,
    title: "We Come to You",
    description: "Our mobile team arrives at your location with all equipment needed.",
    icon: "🚗",
  },
  {
    step: 3,
    title: "Expert Service",
    description: "IDA certified detailers work their magic on your vehicle.",
    icon: "✨",
  },
  {
    step: 4,
    title: "Love Your Car",
    description: "Enjoy your freshly detailed vehicle. We guarantee your satisfaction.",
    icon: "❤️",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary backdrop-blur-sm">
                <Shield className="h-4 w-4" />
                <span className="font-medium">IDA Certified</span>
                <span className="h-1 w-1 rounded-full bg-primary/50" />
                <span>{CREDENTIALS.yearsExperience}+ Years Experience</span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                  Auto Detailing
                  <span className="block gradient-text">San Antonio</span>
                </h1>
                <p className="animate-fade-in-up stagger-1 text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Professional auto detailing that comes to you. Experience the difference with premium ceramic coating,
                  paint correction & more.
                </p>
              </div>

              {/* Stats */}
              <div className="animate-fade-in-up stagger-2 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{RATING_DATA.averageRating}</span>
                  <span className="text-muted-foreground">({RATING_DATA.reviewCount}+ reviews)</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="animate-fade-in-up stagger-3 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <Link href="/booking">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Book Your Detail
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-base bg-background/50 backdrop-blur-sm hover:bg-secondary transition-all"
                >
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="animate-fade-in-up stagger-4 flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-primary" />
                  <span>Valet Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>10% to Charity</span>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="animate-fade-in-scale relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-8 shadow-floating">
                <div className="mb-6 text-center space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">Get a Free Quote</h2>
                  <p className="text-muted-foreground">Response within 2 hours</p>
                </div>
                <LeadForm source="homepage_hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Minimal */}
      <section className="py-16 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Premium Services</h2>
            <p className="text-lg text-muted-foreground">
              From ceramic coating to full auto detailing, we offer comprehensive services to keep your vehicle looking
              its best.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => {
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
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span className="rounded-full bg-primary/90 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-md">
                        {service.priceRange}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">{service.shortDescription}</p>
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

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
              <Link href="/services" className="gap-2">
                View All 15 Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Getting your car detailed has never been easier. We bring the shop to you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative group">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-border via-primary/30 to-border" />
                )}

                <div className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-transparent transition-all duration-300 hover:border-primary/20 hover:shadow-soft">
                  {/* Step number */}
                  <div className="relative mb-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-4xl transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">What San Antonio Says</h2>
            <p className="text-lg text-muted-foreground">
              {RATING_DATA.reviewCount}+ five-star reviews from happy customers across San Antonio
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
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

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
              <Link href="/reviews" className="gap-2">
                Read All Reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Serving All of San Antonio</h2>
            <p className="text-lg text-muted-foreground">
              We provide mobile detailing services throughout San Antonio and surrounding areas within a{" "}
              {BUSINESS_INFO.serviceRadius} radius.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.slug}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 transition-all hover:border-primary/30 hover:shadow-soft"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
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
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12 xl:p-16 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                  <Heart className="h-4 w-4" />
                  <span className="font-medium">Giving Back</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">10% of Profits Support Local Youth</h2>

                <p className="text-lg text-muted-foreground">
                  Every detail supports Junior Achievement of South Texas, helping young people learn business skills
                  and prepare for their futures.
                </p>

                <ul className="space-y-3">
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

                <Button asChild size="lg" className="rounded-full px-8">
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
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent lg:from-card" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Ready for a Showroom Shine?</h2>
          <p className="text-xl text-muted-foreground">
            Book your detail today and experience why San Antonio trusts us for all their auto detailing needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-base shadow-lg shadow-primary/25 hover:shadow-xl transition-all animate-pulse-glow"
            >
              <Link href="/booking">
                <Sparkles className="mr-2 h-5 w-5" />
                Book Online Now
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-10 h-14 text-base bg-background/50 backdrop-blur-sm"
            >
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                <Phone className="mr-2 h-5 w-5" />
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
