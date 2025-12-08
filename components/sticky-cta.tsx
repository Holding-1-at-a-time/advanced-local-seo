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

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden">
      <div className="flex items-center justify-between gap-2 p-3">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 font-medium text-foreground transition-colors hover:bg-secondary/80"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <Button asChild className="flex-1 py-6" size="lg">
          <Link href="/booking" className="flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            Book Online
          </Link>
        </Button>
      </div>
    </div>
  )
}
