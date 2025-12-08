import { type NextRequest, NextResponse } from "next/server"
import { generateLeadFollowupEmail, generateOwnerNotificationEmail } from "@/lib/email"
import { BUSINESS_INFO } from "@/lib/constants"

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()

    // 1. Send follow-up email to customer
    const customerEmailHtml = generateLeadFollowupEmail(leadData)
    const customerEmailResponse = await fetch(new URL("/api/email/send", request.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: leadData.customerEmail,
        toName: leadData.customerName,
        subject: `Your Quote Request - ${BUSINESS_INFO.name}`,
        html: customerEmailHtml,
      }),
    })

    // 2. Send notification email to business owner
    const ownerEmailHtml = generateOwnerNotificationEmail(leadData, "lead")
    await fetch(new URL("/api/email/send", request.url), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: BUSINESS_INFO.email,
        toName: BUSINESS_INFO.name,
        subject: `New Lead - ${leadData.customerName}`,
        html: ownerEmailHtml,
      }),
    })

    return NextResponse.json({
      success: true,
      emailSent: customerEmailResponse.ok,
    })
  } catch (error) {
    console.error("[v0] Lead processing error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to process lead",
      },
      { status: 500 },
    )
  }
}
