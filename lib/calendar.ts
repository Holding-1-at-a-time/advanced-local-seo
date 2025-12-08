// Google Calendar integration
// This file contains server-side calendar functionality

import { BUSINESS_INFO, SERVICES } from "./constants"

interface CalendarEventParams {
  summary: string
  description: string
  location: string
  startDateTime: string // ISO string
  endDateTime: string // ISO string
  attendeeEmail: string
  attendeeName: string
}

interface BookingCalendarData {
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceSlug: string
  vehicleType: string
  vehicleMake?: string
  vehicleYear?: string
  scheduledDate: string
  scheduledTime: string
  neighborhood: string
  specialRequests?: string
}

// Get service name and duration from slug
function getServiceInfo(slug: string): { name: string; duration: number } {
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return { name: slug, duration: 2 }

  // Parse duration string like "3-6 hours" and take the average
  const durationMatch = service.duration.match(/(\d+)-?(\d+)?/)
  if (durationMatch) {
    const min = Number.parseInt(durationMatch[1])
    const max = durationMatch[2] ? Number.parseInt(durationMatch[2]) : min
    return { name: service.name, duration: Math.ceil((min + max) / 2) }
  }
  return { name: service.name, duration: 2 }
}

// Parse time string like "9:00 AM" to hours and minutes
function parseTime(timeString: string): { hours: number; minutes: number } {
  const match = timeString.match(/(\d+):(\d+)\s*(AM|PM)/i)
  if (!match) return { hours: 9, minutes: 0 }

  let hours = Number.parseInt(match[1])
  const minutes = Number.parseInt(match[2])
  const period = match[3].toUpperCase()

  if (period === "PM" && hours !== 12) hours += 12
  if (period === "AM" && hours === 12) hours = 0

  return { hours, minutes }
}

// Create calendar event data from booking
export function createCalendarEventFromBooking(booking: BookingCalendarData): CalendarEventParams {
  const serviceInfo = getServiceInfo(booking.serviceSlug)
  const time = parseTime(booking.scheduledTime)

  // Create start datetime
  const startDate = new Date(booking.scheduledDate)
  startDate.setHours(time.hours, time.minutes, 0, 0)

  // Create end datetime (add service duration)
  const endDate = new Date(startDate)
  endDate.setHours(endDate.getHours() + serviceInfo.duration)

  // Build description
  const vehicle = [booking.vehicleYear, booking.vehicleMake || booking.vehicleType].filter(Boolean).join(" ")

  const description = `
${serviceInfo.name} Appointment

Customer: ${booking.customerName}
Phone: ${booking.customerPhone}
Email: ${booking.customerEmail}

Vehicle: ${vehicle}
Location: ${booking.neighborhood}, San Antonio

${booking.specialRequests ? `Special Requests: ${booking.specialRequests}` : ""}

---
${BUSINESS_INFO.name}
${BUSINESS_INFO.phone}
  `.trim()

  return {
    summary: `🚗 ${serviceInfo.name} - ${booking.customerName}`,
    description,
    location: `${booking.neighborhood}, San Antonio, TX`,
    startDateTime: startDate.toISOString(),
    endDateTime: endDate.toISOString(),
    attendeeEmail: booking.customerEmail,
    attendeeName: booking.customerName,
  }
}

// Create calendar event via API route
export async function createCalendarEvent(
  params: CalendarEventParams,
): Promise<{ success: boolean; eventId?: string; error?: string }> {
  try {
    const response = await fetch("/api/calendar/create-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      const error = await response.json()
      return { success: false, error: error.message }
    }

    const data = await response.json()
    return { success: true, eventId: data.eventId }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Failed to create calendar event" }
  }
}

// Delete calendar event via API route
export async function deleteCalendarEvent(eventId: string): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("/api/calendar/delete-event", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId }),
    })

    if (!response.ok) {
      const error = await response.json()
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Failed to delete calendar event" }
  }
}
