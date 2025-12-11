"use client"

import { useEffect, useState } from "react"
import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants"
import Link from "next/link"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-border/50 bg-background/80 backdrop-blur-xl px-4 py-3">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-3.5 font-medium text-foreground transition-all hover:bg-secondary active:scale-95"
          >
            <Phone className="h-5 w-5 text-primary" />
            Call Now
          </a>
          <Button asChild className="flex-1 h-[50px] rounded-xl shadow-md hover:shadow-lg transition-all" size="lg">
            <Link href="/booking" className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              Book Online
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
