"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)

    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle("dark", newIsDark)
    document.documentElement.classList.toggle("light", !newIsDark)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft" : "bg-transparent",
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-md transition-transform group-hover:scale-105">
              <span className="relative z-10">OD</span>
              <div className="absolute inset-0 rounded-xl bg-primary opacity-0 blur-lg transition-opacity group-hover:opacity-50" />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-foreground tracking-tight">One Detail At A Time</div>
              <div className="text-xs text-muted-foreground">Premium Auto Detailing</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                  link.highlight
                    ? "rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {!link.highlight && (
                  <span className="absolute inset-x-4 -bottom-px h-px bg-primary scale-x-0 transition-transform duration-300 hover:scale-x-100" />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Phone CTA */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden md:flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Book CTA - Desktop */}
            <Button
              asChild
              className="hidden md:inline-flex rounded-full px-6 shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Link href="/booking">Book Now</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-6 w-6">
                <Menu
                  className={cn(
                    "absolute inset-0 h-6 w-6 transition-all duration-300",
                    mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 h-6 w-6 transition-all duration-300",
                    mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-out",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-6 space-y-2">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300",
                "animate-fade-in-up opacity-0",
                link.highlight ? "bg-primary text-primary-foreground shadow-md" : "text-foreground hover:bg-secondary",
              )}
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 font-medium text-foreground"
            >
              <Phone className="h-5 w-5 text-primary" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
