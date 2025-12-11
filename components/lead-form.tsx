"use client"

import type React from "react"

import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SERVICES, VEHICLE_TYPES, SERVICE_AREAS, BUSINESS_INFO } from "@/lib/constants"
import { CheckCircle, Loader2 } from "lucide-react"

interface LeadFormProps {
  serviceName?: string
  serviceSlug?: string
  neighborhood?: string
  source?: string
  variant?: "default" | "compact" | "inline"
  className?: string
}

export function LeadForm({
  serviceName,
  serviceSlug,
  neighborhood,
  source = "website",
  variant = "default",
  className,
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createLead = useMutation(api.leads.createLead)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const leadData = {
      customerName: formData.get("name") as string,
      customerEmail: formData.get("email") as string,
      customerPhone: formData.get("phone") as string,
      serviceSlug: (formData.get("service") as string) || serviceSlug || undefined,
      message: (formData.get("message") as string) || undefined,
      source,
    }

    try {
      const leadId = await createLead(leadData)
      console.log("[v0] Lead created in Convex:", leadId)

      await fetch("/api/lead/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...leadData, leadId }),
      })

      setIsSuccess(true)
    } catch (err) {
      console.error("[v0] Lead submission error:", err)
      setError("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={`rounded-xl border border-primary/30 bg-primary/10 p-8 text-center ${className}`}>
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="text-muted-foreground">
          We've received your request and will contact you within 2 hours during business hours.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Need immediate assistance? Call us at{" "}
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-primary hover:underline">
            {BUSINESS_INFO.phone}
          </a>
        </p>
      </div>
    )
  }

  const isCompact = variant === "compact" || variant === "inline"

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className={isCompact ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" placeholder="John Smith" required className="bg-background" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required className="bg-background" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vehicleType">Vehicle Type</Label>
          <Select name="vehicleType">
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              {VEHICLE_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {!serviceSlug && (
          <div className="space-y-2">
            <Label htmlFor="service">Service Needed</Label>
            <Select name="service">
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select a service" />
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
        )}

        {!neighborhood && (
          <div className="space-y-2">
            <Label htmlFor="neighborhood">Your Area</Label>
            <Select name="neighborhood">
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select your area" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_AREAS.map((area) => (
                  <SelectItem key={area.slug} value={area.slug}>
                    {area.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {variant === "default" && (
        <div className="space-y-2">
          <Label htmlFor="message">Additional Details</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your vehicle and any specific concerns..."
            rows={3}
            className="bg-background resize-none"
          />
        </div>
      )}

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
          "Get My Free Quote"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to our privacy policy. We'll never share your information.
      </p>
    </form>
  )
}
