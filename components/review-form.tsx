"use client"

import type React from "react"

import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api.d"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SERVICES, SERVICE_AREAS, BUSINESS_INFO } from "@/lib/constants"
import { CheckCircle, Loader2, Star } from "lucide-react"

interface ReviewFormProps {
  className?: string
}

export function ReviewForm({ className }: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [rating, setRating] = useState(5)
  const [hoveredRating, setHoveredRating] = useState(0)

  const createReview = useMutation(api.reviews.createReview)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const reviewData = {
      customerName: formData.get("name") as string,
      rating,
      comment: formData.get("comment") as string,
      serviceSlug: (formData.get("service") as string) || undefined,
      location: (formData.get("location") as string) || "San Antonio",
    }

    try {
      const reviewId = await createReview(reviewData)
      console.log("[v0] Review created in Convex:", reviewId)
      setIsSuccess(true)
    } catch (err) {
      console.error("[v0] Review submission error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={`rounded-xl border border-primary/30 bg-primary/10 p-8 text-center ${className}`}>
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-xl font-semibold text-foreground">Thank You for Your Review!</h3>
        <p className="text-muted-foreground">
          We appreciate your feedback. Your review helps other San Antonio customers find quality auto detailing.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Want to share on Google too?{" "}
          <a
            href={BUSINESS_INFO.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Leave a Google Review
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Rating */}
      <div className="space-y-2">
        <Label>Your Rating *</Label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <Star
                className={`h-8 w-8 ${
                  star <= (hoveredRating || rating)
                    ? "fill-yellow-500 text-yellow-500"
                    : "fill-transparent text-muted-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Your Name *</Label>
        <Input id="name" name="name" placeholder="John S." required className="bg-background" />
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label htmlFor="service">Service Received</Label>
        <Select name="service">
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select a service (optional)" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((service) => (
              <SelectItem key={service.slug} value={service.slug}>
                {service.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">Your Neighborhood</Label>
        <Select name="location">
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select your area (optional)" />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_AREAS.map((area) => (
              <SelectItem key={area.slug} value={area.name}>
                {area.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Comment */}
      <div className="space-y-2">
        <Label htmlFor="comment">Your Review *</Label>
        <Textarea
          id="comment"
          name="comment"
          placeholder="Tell us about your experience..."
          rows={4}
          required
          maxLength={500}
          className="bg-background resize-none"
        />
        <p className="text-xs text-muted-foreground">Maximum 500 characters</p>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Review"
        )}
      </Button>
    </form>
  )
}
