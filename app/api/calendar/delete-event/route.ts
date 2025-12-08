import { type NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

// Google Calendar API configuration
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,
)

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
})

const calendar = google.calendar({ version: "v3", auth: oauth2Client })

export async function DELETE(request: NextRequest) {
  try {
    const { eventId } = await request.json()

    if (!eventId) {
      return NextResponse.json({ message: "Missing required field: eventId" }, { status: 400 })
    }

    await calendar.events.delete({
      calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
      eventId,
      sendUpdates: "all",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Google Calendar API delete error:", error)
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Failed to delete calendar event",
      },
      { status: 500 },
    )
  }
}
