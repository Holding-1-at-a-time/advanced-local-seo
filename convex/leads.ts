import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

// Create a new lead
export const createLead = mutation({
  args: {
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    serviceSlug: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now()
    const leadId = await ctx.db.insert("leads", {
      ...args,
      status: "new",
      emailSent: false,
      createdAt: now,
      updatedAt: now,
    })
    return leadId
  },
})

// Get all leads
export const getAllLeads = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("leads").order("desc").collect()
  },
})

// Get leads by status
export const getLeadsByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("leads")
      .withIndex("by_status", (q) => q.eq("status", args.status as "new" | "contacted" | "converted" | "closed"))
      .order("desc")
      .collect()
  },
})

// Update lead status
export const updateLeadStatus = mutation({
  args: {
    leadId: v.id("leads"),
    status: v.union(v.literal("new"), v.literal("contacted"), v.literal("converted"), v.literal("closed")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.leadId, {
      status: args.status,
      updatedAt: Date.now(),
    })
  },
})
