import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Phone,
  CheckCircle,
  Star,
  Shield,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LeadForm } from "@/components/lead-form"
import { TrustBadges } from "@/components/trust-badges"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/json-ld-schema"
import { SERVICES, BUSINESS_INFO, SERVICE_AREAS, RATING_DATA } from "@/lib/constants"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    return { title: "Service Not Found" }
  }

  return {
    title: `${service.name} San Antonio | ${BUSINESS_INFO.name}`,
    description: `Professional ${service.name.toLowerCase()} in San Antonio, TX. ${service.description} IDA Certified. ${RATING_DATA.reviewCount}+ five-star reviews. We come to you!`,
    alternates: {
      canonical: `${BUSINESS_INFO.website}/services/${slug}`,
    },
    openGraph: {
      title: `${service.name} San Antonio | ${BUSINESS_INFO.name}`,
      description: `Professional ${service.name.toLowerCase()} in San Antonio, TX. ${service.description}`,
      type: "website",
    },
  }
}

// Service-specific content
const serviceContent: Record<
  string,
  {
    benefits: string[]
    process: { title: string; description: string }[]
    faqs: { question: string; answer: string }[]
    relatedServices: string[]
    clusterPages: { title: string; slug: string; description: string }[]
  }
> = {
  "auto-detailing": {
    benefits: [
      "Complete interior and exterior restoration",
      "Premium products that protect your investment",
      "Valet service - we come to your location",
      "IDA certified technicians",
      "Attention to every detail",
      "Protects and maintains vehicle value",
    ],
    process: [
      { title: "Assessment", description: "Thorough inspection of your vehicle's condition" },
      { title: "Exterior Wash", description: "Hand wash with pH-balanced soap and clay bar treatment" },
      { title: "Interior Cleaning", description: "Deep vacuum, surface cleaning, and sanitization" },
      { title: "Paint Enhancement", description: "Polish and sealant application for protection" },
      { title: "Final Inspection", description: "Quality check to ensure perfection" },
    ],
    faqs: [
      {
        question: "How long does auto detailing take in San Antonio?",
        answer:
          "A complete auto detail typically takes 3-6 hours depending on vehicle size and condition. Our valet service means you can go about your day while we work.",
      },
      {
        question: "Do you offer mobile auto detailing in Stone Oak?",
        answer:
          "Yes! We provide mobile detailing throughout San Antonio including Stone Oak, Alamo Heights, Medical Center, and all surrounding areas within 25 miles.",
      },
      {
        question: "What's included in your full detail package?",
        answer:
          "Our full detail includes exterior hand wash, clay bar, polish, sealant, interior vacuum, surface cleaning, leather/vinyl conditioning, glass cleaning, and tire dressing.",
      },
      {
        question: "How often should I get my car detailed?",
        answer:
          "We recommend a full detail every 3-4 months for optimal protection. Regular maintenance washes between details help preserve the finish.",
      },
    ],
    relatedServices: ["ceramic-coating", "paint-correction", "interior-deep-cleansing"],
    clusterPages: [
      { title: "Paint Protection Methods", slug: "paint-protection", description: "Learn about paint protection" },
      {
        title: "Benefits of Professional Detailing",
        slug: "benefits",
        description: "Why professional detailing matters",
      },
      { title: "DIY vs Professional Detailing", slug: "diy-vs-professional", description: "Make the right choice" },
      { title: "Seasonal Car Care Guide", slug: "seasonal-care", description: "Year-round protection tips" },
    ],
  },
  "ceramic-coating": {
    benefits: [
      "9H hardness rating for maximum protection",
      "Hydrophobic water-beading properties",
      "UV protection prevents paint oxidation",
      "5+ year durability with proper care",
      "Enhanced gloss and depth of color",
      "Easier maintenance and cleaning",
    ],
    process: [
      { title: "Paint Correction", description: "Remove all imperfections before coating" },
      { title: "Surface Prep", description: "IPA wipe and panel prep for bonding" },
      { title: "Coating Application", description: "Multiple layers of ceramic coating" },
      { title: "Curing Time", description: "24-48 hour cure period" },
      { title: "Final Inspection", description: "Quality assurance and care instructions" },
    ],
    faqs: [
      {
        question: "How long does ceramic coating last in San Antonio?",
        answer:
          "Professional ceramic coatings last 5+ years with proper maintenance. San Antonio's sun and heat make ceramic protection especially valuable for paint preservation.",
      },
      {
        question: "Is ceramic coating worth it?",
        answer:
          "Absolutely. Ceramic coating provides superior protection against UV damage, chemical stains, and environmental contaminants while making your car easier to clean and maintain.",
      },
      {
        question: "Can I wash my car after ceramic coating?",
        answer:
          "Wait 7 days before the first wash. After that, use pH-neutral soap and avoid automatic car washes. Hand washing preserves the coating best.",
      },
      {
        question: "Do you offer ceramic coating in Alamo Heights?",
        answer:
          "Yes, we provide ceramic coating services throughout Alamo Heights and all San Antonio neighborhoods. Our mobile service brings professional coating to your location.",
      },
    ],
    relatedServices: ["paint-correction", "auto-detailing", "glass-treatment"],
    clusterPages: [
      { title: "What is Ceramic Coating?", slug: "what-is-ceramic-coating", description: "Complete guide" },
      {
        title: "Ceramic Coating vs Wax",
        slug: "ceramic-coating-vs-wax",
        description: "Understanding the difference",
      },
      { title: "Ceramic Coating Cost Guide", slug: "ceramic-coating-cost", description: "Investment breakdown" },
      { title: "Ceramic Coating Process", slug: "ceramic-coating-process", description: "Step-by-step guide" },
    ],
  },
  "paint-correction": {
    benefits: [
      "Removes swirl marks and scratches",
      "Restores paint clarity and depth",
      "Multi-stage correction process",
      "Machine polishing expertise",
      "Prepares paint for ceramic coating",
      "Increases vehicle resale value",
    ],
    process: [
      { title: "Paint Assessment", description: "Detailed inspection under LED lighting" },
      { title: "Decontamination", description: "Clay bar and iron remover treatment" },
      { title: "Test Spot", description: "Determine proper polish and pad combination" },
      { title: "Correction Passes", description: "Multi-stage polishing to remove defects" },
      { title: "Refinement", description: "Final polish for maximum gloss" },
    ],
    faqs: [
      {
        question: "What is paint correction?",
        answer:
          "Paint correction is the process of permanently removing paint defects like swirl marks, scratches, water spots, and oxidation through machine polishing.",
      },
      {
        question: "How many stages of paint correction do I need?",
        answer:
          "Most vehicles benefit from 2-stage correction. Heavily neglected paint may require 3-stage correction. We assess your paint and recommend the appropriate level.",
      },
      {
        question: "Will paint correction damage my clear coat?",
        answer:
          "No. Professional paint correction removes only a minimal amount of clear coat. We use proper techniques and products to safely enhance your paint.",
      },
      {
        question: "Should I get ceramic coating after paint correction?",
        answer:
          "Yes! Paint correction creates the perfect surface for ceramic coating. The coating then protects your corrected paint for years to come.",
      },
    ],
    relatedServices: ["ceramic-coating", "scratch-removal", "auto-detailing"],
    clusterPages: [
      { title: "Swirl Mark Removal Guide", slug: "swirl-removal", description: "Eliminate swirl marks" },
      { title: "Paint Correction Benefits", slug: "paint-correction-benefits", description: "Why it matters" },
      {
        title: "Paint Correction vs Wax",
        slug: "paint-correction-vs-wax",
        description: "Understanding the difference",
      },
      { title: "Before & After Gallery", slug: "paint-correction-gallery", description: "See our results" },
    ],
  },
}

// Default content for services without specific content
const defaultContent = {
  benefits: [
    "Professional-grade products and equipment",
    "IDA certified technicians",
    "Valet service - we come to you",
    "Attention to detail",
    "Satisfaction guaranteed",
    "Competitive pricing",
  ],
  process: [
    { title: "Consultation", description: "Discuss your needs and assess your vehicle" },
    { title: "Preparation", description: "Prepare the work area and vehicle" },
    { title: "Service", description: "Complete the service with precision" },
    { title: "Quality Check", description: "Ensure everything meets our standards" },
    { title: "Delivery", description: "Review results and care instructions" },
  ],
  faqs: [
    {
      question: "Do you serve all of San Antonio?",
      answer:
        "Yes! We provide mobile services throughout San Antonio and surrounding areas within a 25-mile radius, including Stone Oak, Alamo Heights, Medical Center, and more.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards, and debit cards. A 20% deposit is required to secure your appointment.",
    },
    {
      question: "How do I prepare for my appointment?",
      answer:
        "Simply ensure we have access to your vehicle and an electrical outlet if needed. Remove any valuables and personal items from the vehicle.",
    },
    {
      question: "What if it rains on my appointment day?",
      answer:
        "We monitor weather closely. If rain is expected, we'll contact you to reschedule at no charge. Your convenience is our priority.",
    },
  ],
  relatedServices: ["auto-detailing", "ceramic-coating", "interior-deep-cleansing"],
  clusterPages: [],
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const content = serviceContent[slug] || defaultContent
  const relatedServices = content.relatedServices
    .map((s) => SERVICES.find((svc) => svc.slug === s))
    .filter(Boolean) as (typeof SERVICES)[number][]

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: `${service.name} San Antonio`, href: `/services/${slug}` },
  ]

  return (
    <>
      <ServiceSchema service={service} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={content.faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-12 sm:py-16">
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

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Content */}
            <div>
              <Link
                href="/services"
                className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                {service.name} <span className="text-primary">San Antonio</span>
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>

              <div className="mb-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  {service.duration}
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm">
                  <span className="font-semibold text-primary">{service.priceRange}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  {RATING_DATA.averageRating} ({RATING_DATA.reviewCount} reviews)
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/booking">
                    <Calendar className="h-5 w-5" />
                    Book This Service
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

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
              <Image
                src={`/.jpg?height=600&width=800&query=${encodeURIComponent(service.name + " professional auto detailing san antonio texas")}`}
                alt={`${service.name} service in San Antonio, TX - ${BUSINESS_INFO.name}`}
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

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Benefits */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Why Choose Our {service.name} in San Antonio?
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Our {service.name} Process</h2>
                <div className="space-y-4">
                  {content.process.map((step, index) => (
                    <div key={index} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cluster Pages Navigation */}
              {content.clusterPages.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Related {service.name} Topics</h2>
                  <nav aria-label="Topic cluster navigation" className="grid gap-3 sm:grid-cols-2">
                    {content.clusterPages.map((page) => (
                      <Link
                        key={page.slug}
                        href={`/services/${slug}/${page.slug}`}
                        className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-secondary"
                      >
                        <Sparkles className="h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">{page.title}</div>
                          <div className="text-xs text-muted-foreground">{page.description}</div>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </nav>
                </div>
              )}

              {/* FAQs */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">{service.name} FAQs - San Antonio</h2>
                <Accordion type="single" collapsible className="w-full">
                  {content.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                      <AccordionTrigger className="text-left text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Service Areas */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">{service.name} Service Areas</h2>
                <p className="mb-4 text-muted-foreground">
                  We provide professional {service.name.toLowerCase()} throughout San Antonio and surrounding areas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area.slug}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-sm text-muted-foreground"
                    >
                      <MapPin className="h-3 w-3 text-primary" />
                      {area.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Lead Form */}
              <div className="sticky top-24 space-y-6">
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">Get a Free Quote</h3>
                    <LeadForm serviceName={service.name} serviceSlug={service.slug} source={`service_${slug}`} />
                  </CardContent>
                </Card>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <Card className="border-border bg-card">
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-lg font-semibold text-foreground">Related Services</h3>
                      <div className="space-y-3">
                        {relatedServices.map((related) => (
                          <Link
                            key={related.slug}
                            href={`/services/${related.slug}`}
                            className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-colors hover:border-primary/50"
                          >
                            <Shield className="h-5 w-5 text-primary" />
                            <div className="flex-1">
                              <div className="font-medium text-foreground">{related.name}</div>
                              <div className="text-xs text-muted-foreground">{related.priceRange}</div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Contact Card */}
                <Card className="border-primary/30 bg-primary/10">
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">Questions?</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Call us for a custom quote or to discuss your specific needs.
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="flex items-center justify-center gap-2 text-xl font-bold text-primary"
                    >
                      <Phone className="h-5 w-5" />
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="mt-2 text-xs text-muted-foreground">Tue-Sun: 7AM - 10PM</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready for Professional {service.name}?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Book your {service.name.toLowerCase()} today. 20% deposit secures your appointment. IDA Certified
            technicians. Valet service - we come to you anywhere in San Antonio.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 px-8">
              <Link href="/booking">
                <Sparkles className="h-5 w-5" />
                Book Now - {service.priceRange}
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
      </section>
    </>
  )
}
