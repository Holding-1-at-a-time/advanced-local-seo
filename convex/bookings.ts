import { v } from "convex/values"
import { mutation, query } from "./_generated/server.d"

// Create a new booking
export const createBooking = mutation({
  args: {
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
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now()
    return await ctx.db.insert("bookings", {
          ...args,
          status: "pending",
          depositPaid: false,
          emailSent: false,
          createdAt: now,
          updatedAt: now,
        });
  },
})

// Get all bookings (for admin)
export const getAllBookings = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("bookings").order("desc").collect()
  },
})

// Get bookings by status
export const getBookingsByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("bookings")
      .withIndex("by_status", (q) => q.eq("status", args.status as "pending" | "confirmed" | "completed" | "cancelled"))
      .order("desc")
      .collect()
  },
})

// Get bookings by date
export const getBookingsByDate = query({
  args: { date: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("bookings")
      .withIndex("by_date", (q) => q.eq("scheduledDate", args.date))
      .collect()
  },
})

// Update booking status
export const updateBookingStatus = mutation({
  args: {
    bookingId: v.id("bookings"),
    status: v.union(v.literal("pending"), v.literal("confirmed"), v.literal("completed"), v.literal("cancelled")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.bookingId, {
      status: args.status,
      updatedAt: Date.now(),
    })
  },
})

// Update booking with calendar event ID
export const updateBookingCalendarEvent = mutation({
  args: {
    bookingId: v.id("bookings"),
    calendarEventId: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.bookingId, {
      calendarEventId: args.calendarEventId,
      updatedAt: Date.now(),
    })
  },
})

// Mark deposit as paid
export const markDepositPaid = mutation({
  args: { bookingId: v.id("bookings") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.bookingId, {
      depositPaid: true,
      status: "confirmed",
      updatedAt: Date.now(),
    })
  },
})
