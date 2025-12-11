import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service | One Detail At A Time",
  description: "Terms of service for One Detail At A Time LLC auto detailing services in San Antonio, TX.",
  alternates: {
    canonical: `${BUSINESS_INFO.website}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing our website {BUSINESS_INFO.website} or using the services of {BUSINESS_INFO.name}, you agree to
            be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of
            these terms, you are prohibited from using our services.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Services Provided</h2>
          <p className="mb-4 text-muted-foreground">
            {BUSINESS_INFO.name} provides professional auto detailing services in San Antonio, TX and surrounding areas,
            including but not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Ceramic coating and paint protection</li>
            <li>Paint correction and swirl removal</li>
            <li>Interior and exterior detailing</li>
            <li>Specialty services (headlight restoration, odor elimination, etc.)</li>
            <li>Mobile valet detailing services</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Booking and Payment</h2>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Deposits</h3>
          <p className="mb-4 text-muted-foreground">
            A 20% deposit is required to secure your appointment. The remaining balance is due upon completion of
            services.
          </p>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Payment Methods</h3>
          <p className="mb-4 text-muted-foreground">We accept credit cards, debit cards, and digital payments.</p>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Pricing</h3>
          <p className="text-muted-foreground">
            Prices are estimates based on vehicle condition. Final pricing may vary based on actual condition and
            services required. Any changes will be communicated before work begins.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Cancellation Policy</h2>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Customer Cancellations</h3>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>48+ hours notice: Full refund of deposit</li>
            <li>24-48 hours notice: 50% deposit refund</li>
            <li>Less than 24 hours: No refund</li>
          </ul>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Weather Cancellations</h3>
          <p className="text-muted-foreground">
            Services may be rescheduled due to inclement weather at no charge to the customer.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Service Locations</h2>
          <p className="mb-4 text-muted-foreground">
            We provide mobile detailing services within a 25-mile radius of San Antonio, including:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Stone Oak, Alamo Heights, Medical Center</li>
            <li>Downtown San Antonio, Northwest Side</li>
            <li>North Central, Terrell Hills, Castle Hills</li>
            <li>And surrounding San Antonio neighborhoods</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Customer Responsibilities</h2>
          <p className="mb-4 text-muted-foreground">Customers are responsible for:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Providing accurate vehicle information and condition</li>
            <li>Ensuring access to water and electricity for mobile services</li>
            <li>Removing personal belongings from the vehicle</li>
            <li>Disclosing any pre-existing damage or issues</li>
            <li>Being available for vehicle handover</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Liability and Warranties</h2>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Service Warranty</h3>
          <p className="mb-4 text-muted-foreground">
            We stand behind our work. If you're not satisfied with our services, contact us within 48 hours and we'll
            make it right.
          </p>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Limitation of Liability</h3>
          <p className="text-muted-foreground">
            While we take every precaution, {BUSINESS_INFO.name} is not liable for:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Pre-existing damage not disclosed by the customer</li>
            <li>Damage resulting from poor vehicle condition</li>
            <li>Items left in the vehicle</li>
            <li>Mechanical issues unrelated to detailing services</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Professional Standards</h2>
          <p className="mb-4 text-muted-foreground">
            {BUSINESS_INFO.name} is an IDA (International Detailing Association) certified detailing business with 10+
            years of experience. We maintain:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Professional insurance coverage</li>
            <li>IDA certification and ongoing training</li>
            <li>Premium product standards</li>
            <li>Environmental responsibility practices</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Charitable Commitment</h2>
          <p className="text-muted-foreground">
            10% of our profits support Junior Achievement of South Texas, helping empower young people in our community.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content on our website, including text, images, logos, and designs, is the property of{" "}
            {BUSINESS_INFO.name} and protected by copyright laws.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Modifications to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
            to our website. Continued use of our services constitutes acceptance of modified terms.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms of Service are governed by the laws of the State of Texas. Any disputes shall be resolved in the
            courts of Bexar County, Texas.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Contact Information</h2>
          <p className="mb-4 text-muted-foreground">For questions about these Terms of Service, please contact us:</p>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="mb-2 font-semibold text-foreground">{BUSINESS_INFO.name}</p>
            <p className="text-muted-foreground">{BUSINESS_INFO.address.full}</p>
            <p className="text-muted-foreground">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-primary hover:underline">
                {BUSINESS_INFO.phone}
              </a>
            </p>
            <p className="text-muted-foreground">
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary hover:underline">
                {BUSINESS_INFO.email}
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
