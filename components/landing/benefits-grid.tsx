import { Clock, Smile, Shield, Car, Heart, Award } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Save Your Time",
    description: "No driving to shops. We come to your home or office anywhere in San Antonio.",
  },
  {
    icon: Smile,
    title: "Boost Your Confidence",
    description: "A clean car reflects on you. Feel proud every time you get behind the wheel.",
  },
  {
    icon: Shield,
    title: "Protect Your Investment",
    description: "Professional detailing preserves your vehicle's value and extends its life.",
  },
  {
    icon: Car,
    title: "Valet Convenience",
    description: "Our mobile service brings the shop to you. Work or relax while we detail.",
  },
  {
    icon: Heart,
    title: "Support Local Youth",
    description: "10% of our profits go to Junior Achievement of South Texas.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description: "IDA certified with 10+ years experience. Trust the professionals.",
  },
]

interface BenefitsGridProps {
  className?: string
}

export function BenefitsGrid({ className }: BenefitsGridProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Why San Antonio Chooses Us</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            More than just a detail - it's an experience designed around your convenience.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
