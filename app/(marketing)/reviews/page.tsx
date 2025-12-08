import type { Metadata } from "next"
import Link from "next/link"
import { Star, Shield, Award, MapPin, Phone, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema, FAQSchema } from "@/components/json-ld-schema"
import { BUSINESS_INFO, RATING_DATA, SERVICE_AREAS, SERVICES } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Reviews | ${RATING_DATA.reviewCount}+ Five-Star Reviews | ${BUSINESS_INFO.name}`,
  description: `Read ${RATING_DATA.reviewCount}+ five-star reviews from San Antonio customers. IDA Certified auto detailing with ${RATING_DATA.averageRating} average rating. See why San Antonio trusts One Detail At A Time.`,
  alternates: {
    canonical: `${BUSINESS_INFO.website}/reviews`,
  },
}

// Sample reviews - in production these would come from a database or API
const reviews = [
  {
    id: 1,
    name: "Michael R.",
    location: "Stone Oak",
    rating: 5,
    date: "2024-11-15",
    service: "Ceramic Coating",
    text: "Absolutely incredible work! My Tesla Model Y looks better than when I bought it. The ceramic coating is flawless and the water beading is amazing. The valet service was so convenient - they came to my office and had it ready by end of day. Will definitely use them again!",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah T.",
    location: "Alamo Heights",
    rating: 5,
    date: "2024-11-10",
    service: "Auto Detailing",
    text: "The convenience of the valet service is unmatched. They came to my home, and my car has never looked better. Every surface was spotless. Professional, punctual, and thorough. I've already recommended them to all my neighbors.",
    verified: true,
  },
  {
    id: 3,
    name: "James L.",
    location: "Medical Center",
    rating: 5,
    date: "2024-11-05",
    service: "Paint Correction",
    text: "Had terrible swirl marks from automated car washes. After their 2-stage paint correction, my black Mercedes looks like a mirror. The before and after photos they showed me were unbelievable. True professionals.",
    verified: true,
  },
  {
    id: 4,
    name: "Jennifer M.",
    location: "Downtown San Antonio",
    rating: 5,
    date: "2024-10-28",
    service: "Interior Detailing",
    text: "My kids had destroyed the interior of our SUV. Crumbs, stains, pet hair - you name it. After the deep cleaning, it smells and looks brand new. They even got a stain out that I thought was permanent!",
    verified: true,
  },
  {
    id: 5,
    name: "David K.",
    location: "Northwest Side",
    rating: 5,
    date: "2024-10-20",
    service: "Ceramic Coating",
    text: "2 years later and the ceramic coating still beads water beautifully. Best investment I've made for my car. The process took a day but the results speak for themselves. Highly recommend!",
    verified: true,
  },
  {
    id: 6,
    name: "Lisa P.",
    location: "Terrell Hills",
    rating: 5,
    date: "2024-10-15",
    service: "Paint Correction",
    text: "They completely transformed my 10-year-old BMW. The paint correction removed years of neglect and the ceramic coating sealed it all in. Looks showroom fresh. Amazing work!",
    verified: true,
  },
  {
    id: 7,
    name: "Robert H.",
    location: "Stone Oak",
    rating: 5,
    date: "2024-10-08",
    service: "Full Detail",
    text: "First time using a mobile detailing service and I'm converted. The attention to detail was impressive - they even cleaned areas I didn't know existed in my car. Great value for money.",
    verified: true,
  },
  {
    id: 8,
    name: "Amanda C.",
    location: "Castle Hills",
    rating: 5,
    date: "2024-09-25",
    service: "Headlight Restoration",
    text: "My headlights were so cloudy I was worried about safety. They restored them to crystal clear. Night driving is so much better now. Quick service and great results!",
    verified: true,
  },
  {
    id: 9,
    name: "Chris W.",
    location: "North Central",
    rating: 5,
    date: "2024-09-18",
    service: "Auto Detailing",
    text: "Professional from start to finish. Communication was excellent, showed up on time, and the results exceeded expectations. My Lexus hasn't looked this good in years.",
    verified: true,
  },
  {
    id: 10,
    name: "Maria G.",
    location: "Shavano Park",
    rating: 4,
    date: "2024-09-10",
    service: "Interior Deep Clean",
    text: "Great job on the interior! Only minor issue was they ran a bit late, but they communicated proactively. The quality of work was excellent and my car smells amazing.",
    verified: true,
  },
]

const reviewStats = {
  total: RATING_DATA.reviewCount,
  average: RATING_DATA.averageRating,
  fiveStars: RATING_DATA.fiveStarCount,
  fourStars: 2,
  distribution: [
    { stars: 5, percentage: 96 },
    { stars: 4, percentage: 4 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ],
}

const faqs = [
  {
    question: "Are these reviews verified?",
    answer:
      "Yes, all reviews come from verified customers who have used our services. We encourage all customers to leave honest feedback.",
  },
  {
    question: "How do I leave a review?",
    answer:
      "After your service, we'll send you an email with a link to leave a review on Google. You can also review us directly on our Google Business Profile.",
  },
]

export default function ReviewsPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Reviews", href: "/reviews" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

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

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Customer Reviews <span className="text-primary">San Antonio</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                See why San Antonio trusts {BUSINESS_INFO.name} for all their auto detailing needs. Real reviews from
                real customers across the city.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/booking">Book Your Detail</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                  <a href={BUSINESS_INFO.social.google} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View on Google
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-6 text-center">
                  <div className="mb-2 text-5xl font-bold text-primary">{reviewStats.average}</div>
                  <div className="mb-2 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${i < Math.floor(reviewStats.average) ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">Based on {reviewStats.total} reviews</p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2">
                  {reviewStats.distribution.map((item) => (
                    <div key={item.stars} className="flex items-center gap-3">
                      <span className="w-8 text-sm text-muted-foreground">{item.stars}★</span>
                      <div className="h-3 flex-1 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="w-12 text-right text-sm text-muted-foreground">{item.percentage}%</span>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 border-t border-border pt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    IDA Certified
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    10+ Years
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Verified Reviews
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <Card key={review.id} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{review.name}</span>
                        {review.verified && (
                          <CheckCircle className="h-4 w-4 text-primary" aria-label="Verified customer" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {review.location}
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {review.service}
                    </span>
                  </div>

                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                      />
                    ))}
                  </div>

                  <p className="mb-4 text-muted-foreground">"{review.text}"</p>

                  <time className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-muted-foreground">
              Want to see more? Check out all our reviews on Google Business Profile.
            </p>
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <a href={BUSINESS_INFO.social.google} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View All Reviews on Google
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Reviewed */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Services Our Customers Love</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICES.slice(0, 10).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Reviews from Across San Antonio</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area.slug}
                className="flex items-center gap-1 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted-foreground"
              >
                <MapPin className="h-3 w-3 text-primary" />
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Experience the Difference?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join {reviewStats.total}+ satisfied customers across San Antonio. Book your detail today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8">
              <Link href="/booking">Book Online</Link>
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
