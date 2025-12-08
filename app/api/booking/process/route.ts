import { type NextRequest, NextResponse } from "next/server"
import { generateBookingConfirmationEmail, generateOwnerNotificationEmail } from "@/lib/email"
import { createCalendarEventFromBooking } from "@/lib/calendar"
import { BUSINESS_INFO } from "@/lib/constants"

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    // 1. Send confirmation email to customer
    const customerEmailHtml = generateBookingConfirmationEmail(bookingData)
    const customerEmailResponse = await fetch(new URL("/api/email/send", request.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: bookingData.customerEmail,
        toName: bookingData.customerName,
        subject: `Booking Confirmation - ${BUSINESS_INFO.name}`,
        html: customerEmailHtml,
      }),
    })

    // 2. Send notification email to business owner
    const ownerEmailHtml = generateOwnerNotificationEmail(bookingData, "booking")
    await fetch(new URL("/api/email/send", request.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: BUSINESS_INFO.email,
        toName: BUSINESS_INFO.name,
        subject: `New Booking Request - ${bookingData.customerName}`,
        html: ownerEmailHtml,
      }),
    })

    // 3. Create Google Calendar event
    const calendarEvent = createCalendarEventFromBooking(bookingData)
    const calendarResponse = await fetch(new URL("/api/calendar/create-event", request.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(calendarEvent),
    })

    let calendarEventId = null
    if (calendarResponse.ok) {
      const calendarData = await calendarResponse.json()
      calendarEventId = calendarData.eventId
    }

    return NextResponse.json({
      success: true,
      emailSent: customerEmailResponse.ok,
      calendarEventId,
    })
  } catch (error) {
    console.error("[v0] Booking processing error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to process booking",
      },
      { status: 500 },
    )
  }
}
