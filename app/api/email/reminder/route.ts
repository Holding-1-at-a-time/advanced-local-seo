import { type NextRequest, NextResponse } from "next/server"
import { generateAppointmentReminderEmail } from "@/lib/email"
import { BUSINESS_INFO } from "@/lib/constants"

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    const emailHtml = generateAppointmentReminderEmail(bookingData)

    const response = await fetch(new URL("/api/email/send", request.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: bookingData.customerEmail,
        toName: bookingData.customerName,
        subject: `Appointment Reminder - ${BUSINESS_INFO.name}`,
        html: emailHtml,
      }),
    })

    return NextResponse.json({
      success: response.ok,
    })
  } catch (error) {
    console.error("[v0] Reminder email error:", error)
    return NextResponse.json({ success: false, message: "Failed to send reminder" }, { status: 500 })
  }
}
