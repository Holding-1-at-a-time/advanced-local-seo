import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Clock, MapPin, CreditCard, CheckCircle, Shield, Star, Calendar } from "lucide-react"
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <Calendar className="h-4 w-4" />
                Schedule Your Detail
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Book Auto Detailing <span className="text-primary">San Antonio</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Easy online booking with our valet service. We come to you anywhere in San Antonio. 20% deposit secures
                your appointment.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  IDA Certified
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  {RATING_DATA.averageRating} ({RATING_DATA.reviewCount} reviews)
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  {CREDENTIALS.yearsExperience}+ Years
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <Card className="border-border bg-card">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="mb-6 text-2xl font-bold text-foreground">Schedule Your Appointment</h2>
                    <BookingForm />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Business Hours */}
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                      <Clock className="h-5 w-5 text-primary" />
                      Business Hours
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between text-muted-foreground">
                        <span>Monday</span>
                        <span className="text-destructive">Closed</span>
                      </li>
                      <li className="flex justify-between text-muted-foreground">
                        <span>Tuesday - Sunday</span>
                        <span>7:00 AM - 10:00 PM</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="border-primary/30 bg-primary/10">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-foreground">Prefer to Call?</h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="mb-4 flex items-center gap-2 text-xl font-bold text-primary"
                    >
                      <Phone className="h-5 w-5" />
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Our team is available during business hours to answer questions and schedule your appointment.
                    </p>
                  </CardContent>
                </Card>

                {/* Deposit Info */}
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Payment Info
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        20% deposit required at booking
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        Balance due upon completion
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        Cash, credit, and debit accepted
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        Free cancellation 24+ hours ahead
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Service Areas */}
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      Service Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_AREAS.slice(0, 6).map((area) => (
                        <span
                          key={area.slug}
                          className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                        >
                          {area.name}
                        </span>
                      ))}
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                        + more areas
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="border-y border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">What to Expect</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Book Online",
                  description: "Fill out the form with your details and preferred date/time.",
                },
                {
                  step: "2",
                  title: "Confirmation",
                  description: "We'll confirm your appointment and collect the 20% deposit.",
                },
                {
                  step: "3",
                  title: "Service Day",
                  description: "Our team arrives at your location fully equipped.",
                },
                {
                  step: "4",
                  title: "Enjoy Results",
                  description: "Love your freshly detailed car. Pay remaining balance.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
