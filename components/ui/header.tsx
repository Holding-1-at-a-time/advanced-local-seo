"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="hidden border-b border-border/40 bg-secondary/50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS_INFO.phone}
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
            </span>
          </div>
          <div className="text-muted-foreground">
            <span className="text-primary">IDA Certified</span> • 10+ Years Experience
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            OD
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-foreground">One Detail At A Time</div>
            <div className="text-xs text-muted-foreground">San Antonio Auto Detailing</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                link.highlight
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-md px-4 py-3 text-base font-medium transition-colors",
                  link.highlight
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="mt-4 flex items-center gap-2 rounded-md bg-secondary px-4 py-3 text-primary"
            >
              <Phone className="h-5 w-5" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
