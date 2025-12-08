import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

// Create a new review
export const createReview = mutation({
  args: {
    customerName: v.string(),
    rating: v.number(),
    comment: v.string(),
    serviceSlug: v.optional(v.string()),
    location: v.string(),
  },
  handler: async (ctx, args) => {
    const reviewId = await ctx.db.insert("reviews", {
      ...args,
      verified: false,
      featured: false,
      createdAt: Date.now(),
    })
    return reviewId
  },
})

// Get all reviews
export const getAllReviews = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("reviews").order("desc").collect()
  },
})

// Get featured reviews
export const getFeaturedReviews = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("reviews")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .order("desc")
      .take(6)
  },
})

// Get reviews by rating
export const getReviewsByRating = query({
  args: { minRating: v.number() },
  handler: async (ctx, args) => {
    const reviews = await ctx.db.query("reviews").order("desc").collect()
    return reviews.filter((r) => r.rating >= args.minRating)
  },
})

// Toggle featured status
export const toggleFeatured = mutation({
  args: { reviewId: v.id("reviews") },
  handler: async (ctx, args) => {
    const review = await ctx.db.get(args.reviewId)
    if (review) {
      await ctx.db.patch(args.reviewId, { featured: !review.featured })
    }
  },
})

// Verify a review
export const verifyReview = mutation({
  args: { reviewId: v.id("reviews") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.reviewId, { verified: true })
  },
})
