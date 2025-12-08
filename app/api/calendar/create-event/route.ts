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

export async function POST(request: NextRequest) {
  try {
    const { summary, description, location, startDateTime, endDateTime, attendeeEmail, attendeeName } =
      await request.json()

    if (!summary || !startDateTime || !endDateTime) {
      return NextResponse.json(
        { message: "Missing required fields: summary, startDateTime, endDateTime" },
        { status: 400 },
      )
    }

    // Create the calendar event
    const event = {
      summary,
      description,
      location,
      start: {
        dateTime: startDateTime,
        timeZone: "America/Chicago", // San Antonio timezone
      },
      end: {
        dateTime: endDateTime,
        timeZone: "America/Chicago",
      },
      attendees: attendeeEmail ? [{ email: attendeeEmail, displayName: attendeeName }] : undefined,
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 }, // 1 day before
          { method: "popup", minutes: 60 }, // 1 hour before
        ],
      },
      colorId: "9", // Blue color for auto detailing appointments
    }

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
      requestBody: event,
      sendUpdates: "all", // Send email notifications to attendees
    })

    return NextResponse.json({
      success: true,
      eventId: response.data.id,
      htmlLink: response.data.htmlLink,
    })
  } catch (error) {
    console.error("[v0] Google Calendar API error:", error)
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Failed to create calendar event",
      },
      { status: 500 },
    )
  }
}
