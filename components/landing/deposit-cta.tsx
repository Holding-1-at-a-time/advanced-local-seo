import Link from "next/link"
import { Phone, Sparkles, CreditCard, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS_INFO } from "@/lib/constants"

interface DepositCTAProps {
  serviceName: string
  priceRange?: string
  className?: string
}

export function DepositCTA({ serviceName, priceRange, className }: DepositCTAProps) {
  return (
    <section className={`border-t border-border bg-gradient-to-b from-secondary/50 to-background py-16 ${className}`}>
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Ready for Professional {serviceName}?</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          Book now and experience the One Detail At A Time difference. Valet service - we come to you anywhere in San
          Antonio.
        </p>

        {/* Deposit Info */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-primary" />
            <span>20% deposit secures your slot</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Tue-Sun 7AM - 10PM</span>
          </div>
          {priceRange && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">{priceRange}</span>
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2 px-8">
            <Link href="/booking">
              <Sparkles className="h-5 w-5" />
              Book Online Now
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
              <Phone className="h-5 w-5" />
              {BUSINESS_INFO.phone}
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Payment accepted: Cash, Credit Card, Debit Card. Balance due upon service completion.
        </p>
      </div>
    </section>
  )
}
