import { type NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

// Gmail API configuration
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,
)

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
})

const gmail = google.gmail({ version: "v1", auth: oauth2Client })

export async function POST(request: NextRequest) {
  try {
    const { to, toName, subject, html } = await request.json()

    if (!to || !subject || !html) {
      return NextResponse.json({ message: "Missing required fields: to, subject, html" }, { status: 400 })
    }

    // Create the email message in RFC 2822 format
    const emailLines = [
      `To: ${toName ? `"${toName}" <${to}>` : to}`,
      `From: "One Detail At A Time" <${process.env.GMAIL_SENDER_EMAIL}>`,
      `Subject: ${subject}`,
      "MIME-Version: 1.0",
      'Content-Type: text/html; charset="UTF-8"',
      "",
      html,
    ]

    const email = emailLines.join("\r\n")

    // Encode the email in base64url format
    const encodedEmail = Buffer.from(email)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")

    // Send the email via Gmail API
    const response = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedEmail,
      },
    })

    return NextResponse.json({
      success: true,
      messageId: response.data.id,
    })
  } catch (error) {
    console.error("[v0] Gmail API error:", error)
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 },
    )
  }
}
