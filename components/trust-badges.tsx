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
      <div className={`flex flex-wrap items-center justify-center gap-6 text-sm ${className}`}>
        {badges.slice(0, 4).map((badge) => (
          <div
            key={badge.title}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <badge.icon className="h-4 w-4 text-primary" />
            <span className="font-medium">{badge.title}</span>
          </div>
        ))}
      </div>
    )
  }

  if (variant === "grid") {
    return (
      <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 ${className}`}>
        {badges.map((badge, index) => (
          <div
            key={badge.title}
            className="group relative flex flex-col items-center rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-soft hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
              <badge.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="font-semibold text-foreground">{badge.title}</div>
            <div className="text-xs text-muted-foreground">{badge.description}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-8 ${className}`}>
      {badges.map((badge) => (
        <div key={badge.title} className="flex items-center gap-4 group">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
            <badge.icon className="h-7 w-7 text-primary" />
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
