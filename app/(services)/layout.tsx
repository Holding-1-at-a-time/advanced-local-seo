import type React from "react"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { OrganizationSchema, LocalBusinessSchema } from "@/components/json-ld-schema"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <StickyCTA />
    </>
  )
}
