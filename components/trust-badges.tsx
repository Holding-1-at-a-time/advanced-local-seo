import { Shield, Award, Star, Car, Heart, MapPin } from "lucide-react"
import { RATING_DATA, CREDENTIALS } from "@/lib/constants"

const badges = [
  {
    icon: Shield,
    title: "IDA Certified",
    description: "Professional certification",
  },
  {
    icon: Award,
    title: `${CREDENTIALS.yearsExperience}+ Years`,
    description: "Industry experience",
  },
  {
    icon: Star,
    title: `${RATING_DATA.averageRating} Stars`,
    description: `${RATING_DATA.reviewCount}+ reviews`,
  },
  {
    icon: Car,
    title: "Valet Service",
    description: "We come to you",
  },
  {
    icon: Heart,
    title: "10% to Charity",
    description: "Junior Achievement",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    description: "San Antonio based",
  },
]

interface TrustBadgesProps {
  variant?: "default" | "compact" | "grid"
  className?: string
}

export function TrustBadges({ variant = "default", className }: TrustBadgesProps) {
  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 text-sm ${className}`}>
        {badges.slice(0, 4).map((badge) => (
          <div key={badge.title} className="flex items-center gap-2 text-muted-foreground">
            <badge.icon className="h-4 w-4 text-primary" />
            <span>{badge.title}</span>
          </div>
        ))}
      </div>
    )
  }

  if (variant === "grid") {
    return (
      <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 ${className}`}>
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/50"
          >
            <badge.icon className="mb-2 h-8 w-8 text-primary" />
            <div className="font-semibold text-foreground">{badge.title}</div>
            <div className="text-xs text-muted-foreground">{badge.description}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 ${className}`}>
      {badges.map((badge) => (
        <div key={badge.title} className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <badge.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-foreground">{badge.title}</div>
            <div className="text-sm text-muted-foreground">{badge.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
