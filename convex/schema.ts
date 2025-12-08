import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  // Booking requests from customers
  bookings: defineTable({
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    vehicleType: v.string(),
    vehicleMake: v.optional(v.string()),
    vehicleYear: v.optional(v.string()),
    serviceSlug: v.string(),
    neighborhood: v.string(),
    scheduledDate: v.string(),
    scheduledTime: v.string(),
    specialRequests: v.optional(v.string()),
    status: v.union(v.literal("pending"), v.literal("confirmed"), v.literal("completed"), v.literal("cancelled")),
    depositPaid: v.boolean(),
    calendarEventId: v.optional(v.string()),
    emailSent: v.boolean(),
    source: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_email", ["customerEmail"])
    .index("by_date", ["scheduledDate"]),

  // Lead/quote requests from forms
  leads: defineTable({
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    serviceSlug: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.string(),
    status: v.union(v.literal("new"), v.literal("contacted"), v.literal("converted"), v.literal("closed")),
    emailSent: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_email", ["customerEmail"]),

  // Customer reviews
  reviews: defineTable({
    customerName: v.string(),
    rating: v.number(),
    comment: v.string(),
    serviceSlug: v.optional(v.string()),
    location: v.string(),
    verified: v.boolean(),
    featured: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_rating", ["rating"])
    .index("by_featured", ["featured"]),

  // Service pillar pages content (for dynamic updates)
  pillarPages: defineTable({
    serviceSlug: v.string(),
    title: v.string(),
    metaDescription: v.string(),
    content: v.string(),
    faqs: v.array(
      v.object({
        question: v.string(),
        answer: v.string(),
      }),
    ),
    updatedAt: v.number(),
  }).index("by_slug", ["serviceSlug"]),

  // Cluster pages linked to pillar pages
  clusterPages: defineTable({
    pillarSlug: v.string(),
    clusterSlug: v.string(),
    title: v.string(),
    metaDescription: v.string(),
    content: v.string(),
    updatedAt: v.number(),
  })
    .index("by_pillar", ["pillarSlug"])
    .index("by_cluster", ["clusterSlug"]),

  // Email logs for tracking sent emails
  emailLogs: defineTable({
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
    sentAt: v.number(),
  })
    .index("by_email", ["recipientEmail"])
    .index("by_type", ["emailType"]),
})
