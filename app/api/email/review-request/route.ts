import { type NextRequest, NextResponse } from "next/server"
import { generateReviewRequestEmail } from "@/lib/email"
import { BUSINESS_INFO } from "@/lib/constants"

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    const emailHtml = generateReviewRequestEmail(bookingData)

    const response = await fetch(new URL("/api/email/send", request.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: bookingData.customerEmail,
        toName: bookingData.customerName,
        subject: `How Was Your ${BUSINESS_INFO.name} Experience?`,
        html: emailHtml,
      }),
    })

    return NextResponse.json({
      success: response.ok,
    })
  } catch (error) {
    console.error("[v0] Review request email error:", error)
    return NextResponse.json({ success: false, message: "Failed to send review request" }, { status: 500 })
  }
}
