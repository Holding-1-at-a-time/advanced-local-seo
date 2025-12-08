import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HeroWithForm } from "@/components/landing/hero-with-form"
import { BenefitsGrid } from "@/components/landing/benefits-grid"
import { ProcessTimeline } from "@/components/landing/process-timeline"
import { TestimonialsCarousel } from "@/components/landing/testimonials-carousel"
import { CharityMission } from "@/components/landing/charity-mission"
import { FAQSection } from "@/components/landing/faq-section"
import { DepositCTA } from "@/components/landing/deposit-cta"
import { BeforeAfterGallery } from "@/components/landing/before-after-gallery"
import { TrustBadges } from "@/components/trust-badges"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { ServiceSchema, LocalBusinessSchema, FAQSchema } from "@/components/json-ld-schema"
import { SERVICES, BUSINESS_INFO, RATING_DATA } from "@/lib/constants"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Landing page content for each service
const landingContent: Record<
  string,
  {
    headline: string
    subheadline: string
    process: { step: number; title: string; description: string }[]
    testimonials: { name: string; location: string; rating: number; text: string; service: string }[]
    faqs: { question: string; answer: string }[]
    beforeAfter: { before: string; after: string; title: string; description?: string }[]
  }
> = {
  "auto-detailing": {
    headline: "Premium Auto Detailing San Antonio",
    subheadline:
      "Restore your vehicle to showroom condition with our comprehensive detailing service. IDA certified technicians, premium products, valet convenience.",
    process: [
      { step: 1, title: "Book Online", description: "Schedule your detail in 60 seconds" },
      { step: 2, title: "We Come to You", description: "Our team arrives fully equipped" },
      { step: 3, title: "Expert Detail", description: "3-6 hours of meticulous work" },
      { step: 4, title: "Love Your Car", description: "Showroom shine, guaranteed" },
    ],
    testimonials: [
      {
        name: "Michael R.",
        location: "Stone Oak",
        rating: 5,
        text: "The attention to detail is incredible. My 5-year-old SUV looks brand new. The valet service is so convenient!",
        service: "Auto Detailing",
      },
      {
        name: "Sarah T.",
        location: "Alamo Heights",
        rating: 5,
        text: "Professional, punctual, and the results speak for themselves. Best detailing I've ever had in San Antonio.",
        service: "Auto Detailing",
      },
      {
        name: "James L.",
        location: "Medical Center",
        rating: 5,
        text: "Worth every penny. The interior smells amazing and the exterior has that deep shine. Highly recommend!",
        service: "Auto Detailing",
      },
    ],
    faqs: [
      {
        question: "How long does a full auto detail take?",
        answer:
          "A comprehensive auto detail typically takes 3-6 hours depending on vehicle size and condition. Our valet service means you can go about your day while we work.",
      },
      {
        question: "Do you bring your own water and power?",
        answer:
          "We bring our own generator and water tanks for complete independence, though we appreciate access to an outlet when available.",
      },
      {
        question: "What's included in your full detail?",
        answer:
          "Full exterior wash, clay bar, polish, sealant, complete interior cleaning, leather/vinyl conditioning, glass cleaning, and tire dressing.",
      },
      {
        question: "How do I pay and what's the deposit?",
        answer:
          "20% deposit required at booking to secure your appointment. Balance due upon completion. We accept cash, credit, and debit cards.",
      },
      {
        question: "Do you service all areas of San Antonio?",
        answer:
          "Yes! We cover Stone Oak, Alamo Heights, Medical Center, Downtown, and all areas within 25 miles of San Antonio.",
      },
      {
        question: "What products do you use?",
        answer:
          "We use only premium, professional-grade products that are safe for all surfaces including paint, leather, vinyl, and fabric.",
      },
      {
        question: "Can you remove pet hair?",
        answer: "We have specialized tools for pet hair removal. This can be added to any detail or booked separately.",
      },
      {
        question: "What's your cancellation policy?",
        answer:
          "Free cancellation up to 24 hours before your appointment. Less than 24 hours notice forfeits the deposit.",
      },
    ],
    beforeAfter: [
      {
        before: "/dirty-car-interior-before-detail.jpg",
        after: "/clean-car-interior-after-detail.jpg",
        title: "Interior Deep Clean",
        description: "Complete interior restoration",
      },
      {
        before: "/dirty-car-exterior-before-wash.jpg",
        after: "/shiny-car-exterior-after-detail.jpg",
        title: "Exterior Transformation",
        description: "Wash, clay, polish, protect",
      },
    ],
  },
  "ceramic-coating": {
    headline: "Ceramic Coating San Antonio | Long-Lasting Protection",
    subheadline:
      "Professional-grade ceramic coating that protects your paint for 5+ years. Hydrophobic finish, UV protection, and that incredible glass-like shine.",
    process: [
      { step: 1, title: "Paint Correction", description: "Remove all imperfections first" },
      { step: 2, title: "Surface Prep", description: "IPA wipe for perfect bonding" },
      { step: 3, title: "Coating Application", description: "Multiple ceramic layers" },
      { step: 4, title: "Curing Period", description: "24-48 hour cure time" },
    ],
    testimonials: [
      {
        name: "David K.",
        location: "Stone Oak",
        rating: 5,
        text: "The ceramic coating still beads water beautifully after 2 years. Best investment I've made for my Tesla.",
        service: "Ceramic Coating",
      },
      {
        name: "Lisa M.",
        location: "Alamo Heights",
        rating: 5,
        text: "The gloss is unreal. Water just rolls right off. Car wash time cut in half!",
        service: "Ceramic Coating",
      },
      {
        name: "Robert P.",
        location: "Northwest Side",
        rating: 5,
        text: "Had it done on my new Porsche. The depth and clarity of the paint is stunning. Professional service.",
        service: "Ceramic Coating",
      },
    ],
    faqs: [
      {
        question: "How long does ceramic coating last in San Antonio's climate?",
        answer:
          "Our professional ceramic coatings last 5+ years with proper maintenance. San Antonio's sun makes ceramic protection especially valuable.",
      },
      {
        question: "Is ceramic coating better than wax?",
        answer:
          "Yes. Ceramic coating provides significantly longer protection (years vs months), better UV resistance, and easier maintenance than traditional wax.",
      },
      {
        question: "Can I wash my car after ceramic coating?",
        answer:
          "Wait 7 days before the first wash. After that, use pH-neutral soap and hand wash only. Avoid automatic car washes.",
      },
      {
        question: "Do you do paint correction before coating?",
        answer:
          "Yes. Paint correction is essential before ceramic coating to ensure a flawless finish. The coating will lock in whatever condition the paint is in.",
      },
      {
        question: "What's the difference between DIY and professional coating?",
        answer:
          "Professional coatings have higher SiO2 content, longer durability, and proper application requires surface prep that most DIY products can't achieve.",
      },
      {
        question: "How much does ceramic coating cost?",
        answer:
          "Pricing ranges from $500-$1,500 depending on vehicle size and number of coating layers. All packages include paint correction.",
      },
      {
        question: "Will ceramic coating prevent all scratches?",
        answer:
          "Ceramic coating adds a hard protective layer (9H hardness) but won't prevent all scratches. It makes them less likely and easier to repair.",
      },
      {
        question: "Can ceramic coating be applied to other surfaces?",
        answer:
          "Yes! We can coat wheels, glass, trim, and interior surfaces for comprehensive protection throughout your vehicle.",
      },
    ],
    beforeAfter: [
      {
        before: "/car-paint-before-ceramic-coating-dull.jpg",
        after: "/car-paint-after-ceramic-coating-glossy.jpg",
        title: "Ultimate Glass-Like Shine",
        description: "9H ceramic protection applied",
      },
    ],
  },
  "paint-correction": {
    headline: "Paint Correction San Antonio | Swirl & Scratch Removal",
    subheadline:
      "Restore your paint to perfect clarity. Our multi-stage correction process removes swirls, scratches, and oxidation for a flawless mirror finish.",
    process: [
      { step: 1, title: "Paint Assessment", description: "LED light inspection" },
      { step: 2, title: "Decontamination", description: "Clay bar & iron removal" },
      { step: 3, title: "Multi-Stage Polish", description: "Remove all defects" },
      { step: 4, title: "Refinement", description: "Maximum gloss finish" },
    ],
    testimonials: [
      {
        name: "Chris H.",
        location: "Medical Center",
        rating: 5,
        text: "Had terrible swirl marks from automated car washes. Now my black Mercedes looks like glass. Incredible work!",
        service: "Paint Correction",
      },
      {
        name: "Jennifer S.",
        location: "Stone Oak",
        rating: 5,
        text: "The before and after is unbelievable. They removed scratches I thought were permanent. True professionals.",
        service: "Paint Correction",
      },
      {
        name: "Mark T.",
        location: "Alamo Heights",
        rating: 5,
        text: "Best paint correction in San Antonio. My 10-year-old BMW looks better than when I bought it.",
        service: "Paint Correction",
      },
    ],
    faqs: [
      {
        question: "What is paint correction?",
        answer:
          "Paint correction is the process of permanently removing paint defects like swirl marks, scratches, water spots, and oxidation through machine polishing.",
      },
      {
        question: "How many stages of correction do I need?",
        answer:
          "Most vehicles benefit from 2-stage correction. Heavily neglected paint may require 3-stage. We assess and recommend the appropriate level.",
      },
      {
        question: "Will it damage my clear coat?",
        answer:
          "No. Professional correction removes minimal clear coat. We use paint depth gauges and proper techniques to safely enhance your paint.",
      },
      {
        question: "Should I get ceramic coating after?",
        answer: "Highly recommended! Ceramic coating protects your newly corrected paint for years to come.",
      },
      {
        question: "How long does paint correction take?",
        answer:
          "Depending on severity and vehicle size, 4-8 hours for most vehicles. Severe correction may require multiple sessions.",
      },
      {
        question: "Can all scratches be removed?",
        answer:
          "Light scratches and swirls, yes. Deep scratches that penetrate the clear coat may require touch-up or wet sanding first.",
      },
      {
        question: "How do I maintain the results?",
        answer:
          "Hand wash only with proper techniques, use ceramic coating for protection, and avoid automatic car washes.",
      },
      {
        question: "What's the cost of paint correction?",
        answer: "Pricing ranges from $300-$800 depending on the level of correction needed and vehicle size.",
      },
    ],
    beforeAfter: [
      {
        before: "/car-paint-swirl-marks-before-correction.jpg",
        after: "/car-paint-mirror-finish-after-correction.jpg",
        title: "Swirl Mark Removal",
        description: "2-stage paint correction",
      },
    ],
  },
}

// Default content for services without specific landing content
const defaultLandingContent = {
  process: [
    { step: 1, title: "Book Online", description: "Quick and easy scheduling" },
    { step: 2, title: "We Arrive", description: "Fully equipped mobile service" },
    { step: 3, title: "Expert Service", description: "Professional care for your vehicle" },
    { step: 4, title: "Enjoy Results", description: "Satisfaction guaranteed" },
  ],
  testimonials: [
    {
      name: "Customer",
      location: "San Antonio",
      rating: 5,
      text: "Excellent service! Very professional and the results exceeded my expectations.",
      service: "Detailing",
    },
    {
      name: "Customer",
      location: "Stone Oak",
      rating: 5,
      text: "The convenience of the valet service is unmatched. Will definitely use again!",
      service: "Detailing",
    },
    {
      name: "Customer",
      location: "Alamo Heights",
      rating: 5,
      text: "My car looks brand new. These guys know what they're doing.",
      service: "Detailing",
    },
  ],
  faqs: [
    {
      question: "Do you serve all of San Antonio?",
      answer: "Yes! We provide mobile services throughout San Antonio and surrounding areas within a 25-mile radius.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards, and debit cards. 20% deposit required to secure your appointment.",
    },
    {
      question: "What if it rains?",
      answer: "We'll contact you to reschedule at no charge if weather prevents service.",
    },
    {
      question: "How do I prepare for my appointment?",
      answer: "Just have your vehicle accessible. Remove valuables and personal items beforehand.",
    },
  ],
  beforeAfter: [],
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

  const content = landingContent[slug] || { headline: `${service.name} San Antonio` }

  return {
    title: `${service.name} San Antonio | ${RATING_DATA.reviewCount}+ 5-Star Reviews | ${BUSINESS_INFO.name}`,
    description: `Professional ${service.name.toLowerCase()} in San Antonio, TX. ${service.description} IDA Certified. ${RATING_DATA.reviewCount}+ five-star reviews. Valet service - we come to you!`,
    alternates: {
      canonical: `${BUSINESS_INFO.website}/landing/${slug}`,
    },
    openGraph: {
      title: content.headline || `${service.name} San Antonio`,
      description: `Professional ${service.name.toLowerCase()} in San Antonio. ${RATING_DATA.reviewCount}+ five-star reviews. We come to you!`,
      type: "website",
    },
  }
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const content = {
    ...defaultLandingContent,
    ...landingContent[slug],
    headline: landingContent[slug]?.headline || `${service.name} San Antonio | Professional Results`,
    subheadline: landingContent[slug]?.subheadline || service.description,
  }

  return (
    <>
      <ServiceSchema service={service} />
      <LocalBusinessSchema />
      <FAQSchema faqs={content.faqs} />

      <Header />

      <main>
        {/* Hero with Form */}
        <HeroWithForm
          serviceName={service.name}
          serviceSlug={service.slug}
          headline={content.headline}
          subheadline={content.subheadline}
        />

        {/* Trust Badges */}
        <section className="border-y border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4">
            <TrustBadges variant="grid" />
          </div>
        </section>

        {/* Benefits Grid */}
        <BenefitsGrid />

        {/* Before/After Gallery */}
        {content.beforeAfter.length > 0 && <BeforeAfterGallery items={content.beforeAfter} />}

        {/* Process Timeline */}
        <ProcessTimeline
          title={`Our ${service.name} Process`}
          subtitle="Simple, professional, convenient."
          steps={content.process}
        />

        {/* Charity Mission */}
        <CharityMission />

        {/* Testimonials */}
        <TestimonialsCarousel testimonials={content.testimonials} />

        {/* FAQs */}
        <FAQSection faqs={content.faqs} title={`${service.name} FAQs - San Antonio`} />

        {/* Final CTA */}
        <DepositCTA serviceName={service.name} priceRange={service.priceRange} />
      </main>

      <Footer />
      <StickyCTA />
    </>
  )
}
