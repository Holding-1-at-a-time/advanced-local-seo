import { v } from "convex/values"
import { mutation, query } from "./_generated/server.d"

// Log an email
export const logEmail = mutation({
  args: {
    recipientEmail: v.string(),
    recipientName: v.string(),
    emailType: v.union(
      v.literal("booking_confirmation"),
      v.literal("lead_followup"),
      v.literal("appointment_reminder"),
      v.literal("review_request"),
    ),
    subject: v.string(),
    status: v.union(v.literal("sent"), v.literal("failed"), v.literal("pending")),
    bookingId: v.optional(v.id("bookings")),
    leadId: v.optional(v.id("leads")),
  },
  handler: async (ctx, args) => {
    const logId = await ctx.db.insert("emailLogs", {
      ...args,
      sentAt: Date.now(),
    })
    return logId
  },
})

// Get email logs by recipient
export const getEmailsByRecipient = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("emailLogs")
      .withIndex("by_email", (q) => q.eq("recipientEmail", args.email))
      .order("desc")
      .collect()
  },
})

// Get recent emails
export const getRecentEmails = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("emailLogs")
      .order("desc")
      .take(args.limit || 50)
  },
})
