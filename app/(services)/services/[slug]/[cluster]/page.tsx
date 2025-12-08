import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
  Shield,
  Award,
  Clock,
  MapPin,
  Star,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICES, BUSINESS_INFO, SERVICE_AREAS, RATING_DATA, CREDENTIALS } from "@/lib/constants"
import { BreadcrumbSchema, FAQSchema, WebPageSchema, HowToSchema } from "@/components/json-ld-schema"

// Define cluster topics for each service
const CLUSTER_TOPICS: Record<string, Array<{ slug: string; title: string; description: string }>> = {
  "auto-detailing": [
    {
      slug: "paint-protection",
      title: "Paint Protection Methods",
      description:
        "Learn about different paint protection options including wax, sealants, and ceramic coatings to keep your vehicle looking new.",
    },
    {
      slug: "interior-vs-exterior",
      title: "Interior vs Exterior Detailing",
      description:
        "Understand the differences between interior and exterior detailing services and which your vehicle needs.",
    },
    {
      slug: "benefits",
      title: "Benefits of Professional Detailing",
      description:
        "Discover why professional auto detailing is worth the investment for your vehicle's appearance and value.",
    },
    {
      slug: "pricing-guide",
      title: "Auto Detailing Pricing Guide",
      description: "Complete guide to auto detailing costs in San Antonio and what factors affect pricing.",
    },
    {
      slug: "diy-vs-professional",
      title: "DIY vs Professional Detailing",
      description: "Compare the pros and cons of DIY detailing versus hiring a professional detailer.",
    },
    {
      slug: "seasonal-care",
      title: "Seasonal Car Care Tips",
      description: "How to protect your vehicle through San Antonio's hot summers and mild winters.",
    },
  ],
  "ceramic-coating": [
    {
      slug: "what-is-ceramic-coating",
      title: "What is Ceramic Coating?",
      description: "Everything you need to know about ceramic coating technology and how it protects your vehicle.",
    },
    {
      slug: "ceramic-vs-wax",
      title: "Ceramic Coating vs Wax",
      description: "Compare ceramic coating to traditional wax and understand which protection is right for you.",
    },
    {
      slug: "longevity",
      title: "How Long Does Ceramic Coating Last?",
      description: "Learn about ceramic coating durability and maintenance requirements for lasting protection.",
    },
    {
      slug: "preparation",
      title: "Ceramic Coating Preparation",
      description: "What preparation is needed before applying ceramic coating for best results.",
    },
    {
      slug: "maintenance",
      title: "Ceramic Coating Maintenance",
      description: "How to properly maintain your ceramic coated vehicle for maximum longevity.",
    },
    {
      slug: "cost-breakdown",
      title: "Ceramic Coating Cost Breakdown",
      description: "Understanding the investment of professional ceramic coating in San Antonio.",
    },
  ],
  "paint-correction": [
    {
      slug: "swirl-marks",
      title: "Swirl Mark Removal",
      description: "How professional paint correction eliminates swirl marks from your vehicle's finish.",
    },
    {
      slug: "scratch-types",
      title: "Types of Paint Scratches",
      description: "Understanding different types of scratches and which ones can be corrected.",
    },
    {
      slug: "single-vs-multi-stage",
      title: "Single vs Multi-Stage Correction",
      description: "Learn about different paint correction levels and which your vehicle needs.",
    },
    {
      slug: "oxidation-removal",
      title: "Paint Oxidation Removal",
      description: "How to restore faded and oxidized paint back to its original shine.",
    },
    {
      slug: "before-ceramic-coating",
      title: "Paint Correction Before Coating",
      description: "Why paint correction is essential before applying ceramic coating.",
    },
    {
      slug: "machine-polishing",
      title: "Machine Polishing Explained",
      description: "Understanding the tools and techniques used in professional paint correction.",
    },
  ],
}

// Generate cluster page content dynamically
function getClusterContent(serviceSlug: string, clusterSlug: string) {
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  const clusters = CLUSTER_TOPICS[serviceSlug] || []
  const cluster = clusters.find((c) => c.slug === clusterSlug)

  if (!service || !cluster) return null

  return {
    service,
    cluster,
    clusters,
  }
}

export async function generateStaticParams() {
  const params: Array<{ slug: string; cluster: string }> = []

  Object.entries(CLUSTER_TOPICS).forEach(([serviceSlug, clusters]) => {
    clusters.forEach((cluster) => {
      params.push({ slug: serviceSlug, cluster: cluster.slug })
    })
  })

  return params
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string; cluster: string }> }): Promise<Metadata> {
  const { slug, cluster } = await params
  const content = getClusterContent(slug, cluster)

  if (!content) return { title: "Not Found" }

  const { service, cluster: clusterData } = content

  return {
    title: `${clusterData.title} | ${service.name} San Antonio | ${BUSINESS_INFO.name}`,
    description: `${clusterData.description} Professional ${service.name.toLowerCase()} services in San Antonio, TX by IDA Certified detailers.`,
    keywords: [
      clusterData.title.toLowerCase(),
      `${service.name.toLowerCase()} san antonio`,
      `${clusterData.slug.replace(/-/g, " ")} san antonio`,
      "professional detailing",
      "san antonio tx",
    ],
    openGraph: {
      title: `${clusterData.title} | ${BUSINESS_INFO.name}`,
      description: clusterData.description,
      url: `${BUSINESS_INFO.website}/services/${slug}/${cluster}`,
      siteName: BUSINESS_INFO.name,
      locale: "en_US",
      type: "article",
    },
  }
}

export default async function ClusterPage({ params }: { params: Promise<{ slug: string; cluster: string }> }) {
  const { slug, cluster } = await params
  const content = getClusterContent(slug, cluster)

  if (!content) notFound()

  const { service, cluster: clusterData, clusters } = content

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
    { name: clusterData.title, href: `/services/${service.slug}/${clusterData.slug}` },
  ]

  const currentIndex = clusters.findIndex((c) => c.slug === clusterData.slug)
  const prevCluster = currentIndex > 0 ? clusters[currentIndex - 1] : null
  const nextCluster = currentIndex < clusters.length - 1 ? clusters[currentIndex + 1] : null

  // Sample FAQs for cluster page
  const faqs = [
    {
      question: `What is ${clusterData.title.toLowerCase()}?`,
      answer: clusterData.description,
    },
    {
      question: `Do you offer ${clusterData.title.toLowerCase()} in Stone Oak?`,
      answer: `Yes! One Detail At A Time provides ${service.name.toLowerCase()} services including ${clusterData.title.toLowerCase()} throughout Stone Oak, Alamo Heights, and all San Antonio neighborhoods.`,
    },
    {
      question: `How much does ${clusterData.title.toLowerCase()} cost?`,
      answer: `Our ${service.name.toLowerCase()} services range from ${service.priceRange}. Contact us for a personalized quote based on your vehicle's specific needs.`,
    },
  ]

  // HowTo steps for this cluster topic
  const howToSteps = [
    {
      name: "Vehicle Assessment",
      text: `We thoroughly inspect your vehicle to determine the best approach for ${clusterData.title.toLowerCase()}.`,
    },
    {
      name: "Surface Preparation",
      text: "The vehicle is properly washed and decontaminated to ensure optimal results.",
    },
    {
      name: "Professional Treatment",
      text: `Our IDA Certified technicians apply professional-grade products and techniques for ${clusterData.title.toLowerCase()}.`,
    },
    {
      name: "Quality Inspection",
      text: "A final inspection ensures every detail meets our high standards before completion.",
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <WebPageSchema
        title={`${clusterData.title} | ${service.name} San Antonio`}
        description={clusterData.description}
        url={`/services/${service.slug}/${clusterData.slug}`}
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name={clusterData.title}
        description={clusterData.description}
        steps={howToSteps}
        totalTime={
          service.duration ? `PT${service.duration.split("-")[1]?.trim().replace(" hours", "H") || "4H"}` : "PT4H"
        }
      />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="border-b border-border/40 bg-card/50" aria-label="Breadcrumb">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              {breadcrumbs.map((item, index) => (
                <li key={item.href} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary font-medium">{item.name}</span>
                  ) : (
                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="mx-auto max-w-7xl px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Back to Pillar Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 group"
                >
                  <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to {service.name} Guide</span>
                </Link>

                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  {clusterData.title}
                  <span className="block text-primary mt-2">San Antonio, TX</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {clusterData.description} Our IDA Certified team at {BUSINESS_INFO.name} delivers exceptional results
                  for San Antonio vehicle owners.
                </p>

                {/* Trust Signals */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>IDA Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-5 w-5 text-primary" />
                    <span>{CREDENTIALS.yearsExperience}+ Years</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-5 w-5 text-primary" />
                    <span>
                      {RATING_DATA.averageRating} Stars ({RATING_DATA.reviewCount} Reviews)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/booking">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Now
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      {BUSINESS_INFO.phone}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  <Image
                    src={`/.jpg?height=400&width=600&query=${encodeURIComponent(clusterData.title + " auto detailing")}`}
                    alt={`${clusterData.title} - ${service.name} in San Antonio`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-card/30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Article Content */}
              <article className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
                <h2>Understanding {clusterData.title}</h2>
                <p>
                  When it comes to {clusterData.title.toLowerCase()} in San Antonio, understanding the process and
                  benefits is essential for making informed decisions about your vehicle's care. At {BUSINESS_INFO.name}
                  , we specialize in professional {service.name.toLowerCase()} services that deliver exceptional
                  results.
                </p>

                <h3>Why {clusterData.title} Matters</h3>
                <p>
                  San Antonio's intense sun, heat, and environmental conditions can take a toll on your vehicle.{" "}
                  {clusterData.title} is crucial for maintaining your car's appearance and protecting your investment.
                  Our IDA Certified technicians have {CREDENTIALS.yearsExperience}+ years of experience delivering
                  premium results.
                </p>

                <h3>Our Process</h3>
                <div className="not-prose grid gap-4 my-8">
                  {howToSteps.map((step, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-background/50 border border-border/40">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{step.name}</h4>
                        <p className="text-muted-foreground text-sm">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3>Service Areas in San Antonio</h3>
                <p>
                  We proudly serve all San Antonio neighborhoods including Stone Oak, Alamo Heights, Medical Center,
                  Downtown, and surrounding areas. Our valet service brings professional{" "}
                  {clusterData.title.toLowerCase()} directly to your location.
                </p>

                <div className="not-prose flex flex-wrap gap-2 my-6">
                  {SERVICE_AREAS.slice(0, 6).map((area) => (
                    <span key={area.slug} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {area.name}
                    </span>
                  ))}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Related Topics Card */}
                <Card className="bg-card/50 border-border/40">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      Related {service.name} Topics
                    </h3>
                    <nav aria-label="Topic cluster navigation">
                      <ul className="space-y-2">
                        {clusters.map((c) => (
                          <li key={c.slug}>
                            <Link
                              href={`/services/${service.slug}/${c.slug}`}
                              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                                c.slug === clusterData.slug
                                  ? "bg-primary/20 text-primary"
                                  : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              <CheckCircle
                                className={`h-4 w-4 ${c.slug === clusterData.slug ? "text-primary" : "text-muted-foreground/50"}`}
                              />
                              <span className="text-sm">{c.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">Ready to Get Started?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Book your {service.name.toLowerCase()} appointment today.
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <Link href="/booking">Schedule Now</Link>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3">
                      Starting at {service.priceRange.split(" - ")[0]}
                    </p>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="bg-card/50 border-border/40">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Contact Us</h3>
                    <address
                      className="not-italic space-y-3 text-sm text-muted-foreground"
                      itemScope
                      itemType="https://schema.org/LocalBusiness"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-0.5" />
                        <span itemProp="address">{BUSINESS_INFO.address.full}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <a
                          href={`tel:${BUSINESS_INFO.phoneRaw}`}
                          itemProp="telephone"
                          className="hover:text-primary transition-colors"
                        >
                          {BUSINESS_INFO.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Tue-Sun: 7AM - 10PM</span>
                      </div>
                    </address>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions About {clusterData.title}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card/50 border-border/40">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination Navigation */}
        <section className="py-12 border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex justify-between items-center">
              {prevCluster ? (
                <Link
                  href={`/services/${service.slug}/${prevCluster.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <span className="text-xs uppercase tracking-wide">Previous</span>
                    <p className="font-medium text-foreground">{prevCluster.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextCluster ? (
                <Link
                  href={`/services/${service.slug}/${nextCluster.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group text-right"
                >
                  <div>
                    <span className="text-xs uppercase tracking-wide">Next</span>
                    <p className="font-medium text-foreground">{nextCluster.title}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
