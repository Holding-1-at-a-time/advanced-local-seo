import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Award, Shield, Heart, Users, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrustBadges } from "@/components/trust-badges"
import { BreadcrumbSchema } from "@/components/json-ld-schema"
import { BUSINESS_INFO, RATING_DATA, CREDENTIALS, SERVICE_AREAS } from "@/lib/constants"

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS_INFO.name} | San Antonio Auto Detailing`,
  description: `Learn about ${BUSINESS_INFO.name} - IDA Certified auto detailing in San Antonio since ${BUSINESS_INFO.established}. ${CREDENTIALS.yearsExperience}+ years experience, ${RATING_DATA.reviewCount}+ five-star reviews, 10% to Junior Achievement.`,
  alternates: {
    canonical: `${BUSINESS_INFO.website}/about`,
  },
}

const milestones = [
  { year: "2019", title: "Founded", description: "Started with a passion for automotive excellence" },
  { year: "2020", title: "IDA Certified", description: "Achieved International Detailing Association certification" },
  { year: "2021", title: "Mobile Expansion", description: "Launched valet service throughout San Antonio" },
  { year: "2023", title: "Charity Partnership", description: "Began donating 10% to Junior Achievement" },
  { year: "2024", title: "47+ Reviews", description: "Built a reputation with 4.9-star average" },
]

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never cut corners. Every detail matters, from the products we use to the techniques we employ.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your convenience is our priority. That's why we bring the shop to you with our valet service.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "10% of our profits support Junior Achievement, teaching San Antonio youth essential business skills.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "IDA certified with continuous training to stay current with the latest techniques and products.",
  },
]

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-16">
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

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                About <span className="text-primary">{BUSINESS_INFO.name}</span>
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Since {BUSINESS_INFO.established}, we've been San Antonio's trusted choice for professional auto
                detailing. As an IDA Certified detailing business, we bring showroom-quality results directly to your
                doorstep.
              </p>
              <p className="mb-8 text-muted-foreground">
                What sets us apart isn't just our {CREDENTIALS.yearsExperience}+ years of experience or our premium
                products - it's our commitment to making your life easier. Our valet service means you never have to
                drive to a shop again. Plus, 10% of our profits go directly to Junior Achievement of South Texas,
                supporting local youth education.
              </p>

              <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-bold text-foreground">{RATING_DATA.averageRating}</span>
                </div>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">{RATING_DATA.reviewCount}+ Five-Star Reviews</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">Est. {BUSINESS_INFO.established}</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
              <Image
                src="/ida-certified-detailing-professional-san-antonio.jpg"
                alt="IDA Certified detailing professional at One Detail At A Time LLC"
                fill
                className="object-cover"
                priority
              />
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

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Our Journey</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From a passion project to San Antonio's trusted detailing service
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />

            <div className="space-y-8 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col items-center lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="mb-2 text-2xl font-bold text-primary">{milestone.year}</div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="my-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground lg:absolute lg:left-1/2 lg:my-0 lg:-translate-x-1/2">
                    <CheckCircle className="h-5 w-5" />
                  </div>

                  <div className="hidden w-1/2 lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-y border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                  <Heart className="h-4 w-4" />
                  Giving Back
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">Supporting San Antonio's Future</h2>
                <p className="mb-6 text-muted-foreground">
                  We believe in investing in our community. That's why 10% of all profits go to Junior Achievement of
                  South Texas, helping young people learn essential business and financial skills.
                </p>
                <ul className="space-y-3">
                  {[
                    "Teaching entrepreneurship to students",
                    "Building financial literacy",
                    "Preparing youth for the workforce",
                    "Creating future San Antonio leaders",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
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

      {/* Service Area */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Proudly Serving San Antonio</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Mobile detailing service throughout the greater San Antonio area
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area.slug}
                  className="flex items-center gap-1 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  <MapPin className="h-3 w-3 text-primary" />
                  {area.name}
                </span>
              ))}
            </div>

            <Card className="border-border bg-background">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Visit or Contact Us</h3>
                <address className="not-italic">
                  <p className="mb-2 flex items-start gap-2 text-muted-foreground">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {BUSINESS_INFO.address.full}
                  </p>
                  <p className="mb-2 flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-primary">
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                </address>
                <p className="mt-4 text-sm text-muted-foreground">
                  Service radius: {BUSINESS_INFO.serviceRadius} from San Antonio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Experience the Difference?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Book your detail today and see why San Antonio trusts {BUSINESS_INFO.name} for all their auto detailing
            needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8">
              <Link href="/booking">Book Your Detail</Link>
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
