import Image from "next/image"
import { Heart, CheckCircle } from "lucide-react"

interface CharityMissionProps {
  className?: string
}

export function CharityMission({ className }: CharityMissionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <Heart className="h-4 w-4" />
                Giving Back to San Antonio
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">Your Detail Supports Local Youth Education</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Every service helps us donate 10% of profits to Junior Achievement of South Texas, teaching young people
                essential business and financial skills.
              </p>
              <ul className="space-y-3">
                {[
                  "Supporting entrepreneurship education",
                  "Teaching financial literacy to students",
                  "Building workforce readiness",
                  "Creating future San Antonio leaders",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src="/children-learning-business-skills-junior-achieveme.jpg"
                alt="Junior Achievement of South Texas - Children learning business skills"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
