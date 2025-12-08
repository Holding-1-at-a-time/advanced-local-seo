"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  service: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  className?: string
}

export function TestimonialsCarousel({ testimonials, className }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">What San Antonio Says</h2>
          <p className="text-muted-foreground">Real reviews from real customers</p>
        </div>

        {/* Mobile: Single testimonial with navigation */}
        <div className="lg:hidden">
          <div className="relative rounded-2xl border border-border bg-card p-6">
            <Quote className="absolute -top-3 left-6 h-8 w-8 text-primary/20" />
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="mb-4 text-foreground">"{testimonials[currentIndex].text}"</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {testimonials[currentIndex].service}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="bg-transparent">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="bg-transparent">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        {/* Desktop: Grid of testimonials */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="relative rounded-2xl border border-border bg-card p-6">
              <Quote className="absolute -top-3 left-6 h-8 w-8 text-primary/20" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="mb-4 text-foreground line-clamp-4">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
