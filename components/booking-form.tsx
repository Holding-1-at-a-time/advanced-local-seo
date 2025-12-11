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
import { CheckCircle, Loader2, CalendarIcon } from "lucide-react"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createBooking = useMutation(api.bookings.createBooking)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const bookingData = {
      customerName: formData.get("name") as string,
      customerEmail: formData.get("email") as string,
      customerPhone: formData.get("phone") as string,
      vehicleType: formData.get("vehicleType") as string,
      vehicleMake: (formData.get("vehicleMake") as string) || undefined,
      vehicleYear: (formData.get("vehicleYear") as string) || undefined,
      serviceSlug: formData.get("service") as string,
      neighborhood: formData.get("neighborhood") as string,
      scheduledDate: formData.get("preferredDate") as string,
      scheduledTime: formData.get("preferredTime") as string,
      specialRequests: (formData.get("message") as string) || undefined,
      source: "booking_page",
    }

    try {
      const bookingId = await createBooking(bookingData)
      console.log("[v0] Booking created in Convex:", bookingId)

      const emailResponse = await fetch("/api/booking/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...bookingData, bookingId }),
      })

      if (!emailResponse.ok) {
        console.warn("[v0] Email/calendar processing failed, but booking was saved")
      }

      setIsSuccess(true)
    } catch (err) {
      console.error("[v0] Booking submission error:", err)
      setError("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/10 p-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h3 className="mb-2 text-2xl font-semibold text-foreground">Booking Request Received!</h3>
        <p className="mb-4 text-muted-foreground">
          Thank you for your booking request. We'll contact you within 2 hours during business hours to confirm your
          appointment and collect the deposit.
        </p>
        <p className="mb-2 text-sm text-muted-foreground">A confirmation email has been sent to your inbox.</p>
        <p className="text-sm text-muted-foreground">
          Need immediate assistance? Call us at{" "}
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-primary hover:underline">
            {BUSINESS_INFO.phone}
          </a>
        </p>
      </div>
    )
  }

  // Get minimum date (tomorrow)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split("T")[0]

  // Available time slots
  const timeSlots = [
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Contact Information */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Information</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" placeholder="John Smith" required className="bg-background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-background"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required className="bg-background" />
          </div>
        </div>
      </div>

      {/* Vehicle Information */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-foreground">Vehicle Information</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="vehicleType">Vehicle Type *</Label>
            <Select name="vehicleType" required>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select type" />
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
          <div className="space-y-2">
            <Label htmlFor="vehicleMake">Make & Model</Label>
            <Input id="vehicleMake" name="vehicleMake" placeholder="e.g., Toyota Camry" className="bg-background" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicleYear">Year</Label>
            <Input
              id="vehicleYear"
              name="vehicleYear"
              placeholder="e.g., 2022"
              className="bg-background"
              maxLength={4}
            />
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-foreground">Service Details</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="service">Service Needed *</Label>
            <Select name="service" required>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((service) => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.name} - {service.priceRange}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="neighborhood">Your Location *</Label>
            <Select name="neighborhood" required>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select your area" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_AREAS.map((area) => (
                  <SelectItem key={area.slug} value={area.slug}>
                    {area.name}
                  </SelectItem>
                ))}
                <SelectItem value="other">Other Area (within 25 miles)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Scheduling */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-foreground">Preferred Schedule</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="preferredDate">Preferred Date *</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                min={minDate}
                required
                className="bg-background pl-10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredTime">Preferred Time *</Label>
            <Select name="preferredTime" required>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Note: Monday is closed. Available Tuesday-Sunday, 7AM-10PM. We'll confirm availability when we contact you.
        </p>
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <Label htmlFor="message">Special Requests or Notes</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about any specific concerns, access instructions, or special requests..."
          rows={4}
          className="bg-background resize-none"
        />
      </div>

      {/* Submit */}
      <div>
        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting Request...
            </>
          ) : (
            "Request Appointment"
          )}
        </Button>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          By submitting, you agree to our privacy policy. A 20% deposit will be required to confirm your appointment.
          We'll contact you within 2 hours during business hours.
        </p>
      </div>
    </form>
  )
}
