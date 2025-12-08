import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { BUSINESS_INFO, RATING_DATA } from "@/lib/constants"
import { ConvexClientProvider } from "@/lib/convex-provider"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.website),
  title: {
    default: `${BUSINESS_INFO.name} | Professional Auto Detailing San Antonio TX`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: `Professional auto detailing in San Antonio, TX. IDA Certified with 10+ years experience. Ceramic coating, paint correction, interior detailing & more. ${RATING_DATA.reviewCount}+ five-star reviews. We come to you!`,
  keywords: [
    "auto detailing San Antonio",
    "ceramic coating San Antonio",
    "paint correction San Antonio",
    "mobile detailing San Antonio",
    "car detailing near me",
    "professional detailing San Antonio TX",
    "IDA certified detailer",
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS_INFO.website,
    title: `${BUSINESS_INFO.name} | Professional Auto Detailing San Antonio`,
    description: `Professional auto detailing in San Antonio, TX. IDA Certified, 10+ years experience, ${RATING_DATA.reviewCount}+ five-star reviews. Valet service - we come to you!`,
    siteName: BUSINESS_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} | Auto Detailing San Antonio`,
    description: `Professional auto detailing in San Antonio, TX. IDA Certified, 10+ years experience.`,
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: BUSINESS_INFO.website,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#00ae98",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="San Antonio" />
        <meta name="geo.position" content={`${BUSINESS_INFO.coordinates.lat};${BUSINESS_INFO.coordinates.lng}`} />
        <meta name="ICBM" content={`${BUSINESS_INFO.coordinates.lat}, ${BUSINESS_INFO.coordinates.lng}`} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
