import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy | One Detail At A Time",
  description: "Privacy policy for One Detail At A Time LLC auto detailing services in San Antonio, TX.",
  alternates: {
    canonical: `${BUSINESS_INFO.website}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="mb-4 text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Introduction</h2>
          <p className="text-muted-foreground">
            {BUSINESS_INFO.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
            {BUSINESS_INFO.website} or use our auto detailing services in San Antonio, TX.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Information We Collect</h2>
          <h3 className="mb-3 text-xl font-semibold text-foreground">Personal Information</h3>
          <p className="mb-4 text-muted-foreground">
            When you book our services, contact us, or submit a form, we may collect:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Name and contact information (email, phone number)</li>
            <li>Service address in San Antonio and surrounding areas</li>
            <li>Vehicle information (make, model, year, condition)</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Service preferences and special requests</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">How We Use Your Information</h2>
          <p className="mb-4 text-muted-foreground">We use the information we collect to:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Schedule and provide auto detailing services at your location</li>
            <li>Process payments and send booking confirmations</li>
            <li>Communicate about your appointment, including reminders and follow-ups</li>
            <li>Send service updates, promotions, and newsletters (with your consent)</li>
            <li>Improve our services and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Information Sharing</h2>
          <p className="mb-4 text-muted-foreground">
            We do not sell, trade, or rent your personal information to third parties. We may share your information
            with:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Service providers who assist in our operations (payment processors, scheduling systems)</li>
            <li>Google Calendar for appointment scheduling (if you authorize this integration)</li>
            <li>Email service providers for communications</li>
            <li>Law enforcement or regulatory authorities when required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational security measures to protect your personal
            information. However, no method of transmission over the internet or electronic storage is 100% secure. We
            use SSL encryption for data transmission and secure databases for storage.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Cookies and Tracking</h2>
          <p className="mb-4 text-muted-foreground">Our website uses cookies and similar tracking technologies to:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Improve website functionality and user experience</li>
            <li>Provide targeted content and advertising</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Your Rights</h2>
          <p className="mb-4 text-muted-foreground">You have the right to:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to processing of your personal information</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Children's Privacy</h2>
          <p className="text-muted-foreground">
            Our services are not directed to children under 13 years of age. We do not knowingly collect personal
            information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Contact Us</h2>
          <p className="mb-4 text-muted-foreground">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
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
