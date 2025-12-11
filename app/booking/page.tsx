import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, MapPin, CreditCard, CheckCircle, Shield, Star, Calendar, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/json-ld-schema"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { BookingForm } from "@/components/booking-form"
import { BUSINESS_INFO, RATING_DATA, SERVICE_AREAS, CREDENTIALS } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Book Auto Detailing San Antonio | ${BUSINESS_INFO.name}`,
  description: `Schedule your auto detailing appointment in San Antonio. Easy online booking, valet service, and professional results. ${RATING_DATA.reviewCount}+ five-star reviews. 20% deposit secures your slot.`,
  alternates: {
    canonical: `${BUSINESS_INFO.website}/booking`,
  },
}

export default function BookingPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Book Now", href: "/booking" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />

      <main className="min-h-screen">
        <section className="relative overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

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

            <div className="text-center max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary backdrop-blur-sm">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">Schedule Your Detail</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Book Auto Detailing
                <span className="block gradient-text">San Antonio</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Easy online booking with our valet service. We come to you anywhere in San Antonio.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>IDA Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>
                    {RATING_DATA.averageRating} ({RATING_DATA.reviewCount}+ reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{CREDENTIALS.yearsExperience}+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl opacity-50" />
                  <Card className="relative border-border/50 bg-card/80 backdrop-blur-xl shadow-elevated">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">Schedule Your Appointment</h2>
                          <p className="text-muted-foreground">Fill out the form below to get started</p>
                        </div>
                      </div>
                      <BookingForm />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Business Hours */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      Business Hours
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between text-muted-foreground">
                        <span>Monday</span>
                        <span className="text-destructive font-medium">Closed</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground">
                        <span>Tuesday - Sunday</span>
                        <span className="text-foreground font-medium">7:00 AM - 10:00 PM</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-foreground">Prefer to Call?</h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="mb-4 flex items-center gap-3 text-xl font-bold text-primary hover:underline"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5" />
                      </div>
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Our team is available during business hours to answer questions and schedule your appointment.
                    </p>
                  </CardContent>
                </Card>

                {/* Deposit Info */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      Payment Info
                    </h3>
                    <ul className="space-y-3 text-sm">
                      {[
                        "20% deposit required at booking",
                        "Balance due upon completion",
                        "Cash, credit, and debit accepted",
                        "Free cancellation 24+ hours ahead",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Service Areas */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      Service Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_AREAS.slice(0, 6).map((area) => (
                        <span
                          key={area.slug}
                          className="rounded-full bg-secondary/50 border border-border/50 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {area.name}
                        </span>
                      ))}
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs text-primary font-medium">
                        + more areas
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl lg:text-4xl font-bold text-foreground">What to Expect</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Book Online",
                  description: "Fill out the form with your details and preferred date/time.",
                  icon: "📅",
                },
                {
                  step: "2",
                  title: "Confirmation",
                  description: "We'll confirm your appointment and collect the 20% deposit.",
                  icon: "✅",
                },
                {
                  step: "3",
                  title: "Service Day",
                  description: "Our team arrives at your location fully equipped.",
                  icon: "🚗",
                },
                {
                  step: "4",
                  title: "Enjoy Results",
                  description: "Love your freshly detailed car. Pay remaining balance.",
                  icon: "✨",
                },
              ].map((item, index) => (
                <div key={item.step} className="relative group">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-border via-primary/30 to-border" />
                  )}
                  <div className="relative text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-transparent transition-all hover:border-primary/20 hover:shadow-soft">
                    <div className="relative mb-6">
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-4xl transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
