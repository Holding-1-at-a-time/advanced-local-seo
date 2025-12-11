module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Business Information - NAP Consistency
__turbopack_context__.s([
    "BUSINESS_INFO",
    ()=>BUSINESS_INFO,
    "CREDENTIALS",
    ()=>CREDENTIALS,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "RATING_DATA",
    ()=>RATING_DATA,
    "SERVICES",
    ()=>SERVICES,
    "SERVICE_AREAS",
    ()=>SERVICE_AREAS,
    "VEHICLE_TYPES",
    ()=>VEHICLE_TYPES
]);
const BUSINESS_INFO = {
    name: "One Detail At A Time LLC",
    shortName: "ODAAT",
    address: {
        street: "11692 Bricken Circle",
        city: "San Antonio",
        state: "TX",
        zip: "78233",
        full: "11692 Bricken Circle, San Antonio, TX 78233"
    },
    coordinates: {
        lat: 29.6199,
        lng: -98.4738
    },
    phone: "(726) 207-1007",
    phoneRaw: "+17262071007",
    email: "rromerojr1@gmail.com",
    website: "https://odaat1.com",
    established: 2019,
    serviceRadius: "25 miles",
    businessHours: {
        monday: "Closed",
        tuesday: "7:00 AM - 10:00 PM",
        wednesday: "7:00 AM - 10:00 PM",
        thursday: "7:00 AM - 10:00 PM",
        friday: "7:00 AM - 10:00 PM",
        saturday: "7:00 AM - 10:00 PM",
        sunday: "7:00 AM - 10:00 PM"
    },
    social: {
        facebook: "https://facebook.com/onedetailatatime",
        instagram: "https://instagram.com/onedetailatatime",
        google: "https://g.page/onedetailatatime"
    }
};
const RATING_DATA = {
    averageRating: 4.9,
    reviewCount: 47,
    fiveStarCount: 45
};
const CREDENTIALS = {
    idaCertified: true,
    yearsExperience: 10,
    charityPartner: "Junior Achievement of South Texas",
    charityDonation: "10%"
};
const SERVICE_AREAS = [
    {
        name: "Stone Oak",
        slug: "stone-oak",
        travelTime: "15 minutes"
    },
    {
        name: "Alamo Heights",
        slug: "alamo-heights",
        travelTime: "20 minutes"
    },
    {
        name: "Medical Center",
        slug: "medical-center",
        travelTime: "18 minutes"
    },
    {
        name: "Downtown San Antonio",
        slug: "downtown",
        travelTime: "22 minutes"
    },
    {
        name: "Northwest Side",
        slug: "northwest-side",
        travelTime: "25 minutes"
    },
    {
        name: "Northeast Side",
        slug: "northeast-side",
        travelTime: "12 minutes"
    },
    {
        name: "North Central",
        slug: "north-central",
        travelTime: "15 minutes"
    },
    {
        name: "Terrell Hills",
        slug: "terrell-hills",
        travelTime: "20 minutes"
    },
    {
        name: "Castle Hills",
        slug: "castle-hills",
        travelTime: "22 minutes"
    },
    {
        name: "Shavano Park",
        slug: "shavano-park",
        travelTime: "20 minutes"
    }
];
const SERVICES = [
    {
        id: "auto-detailing",
        name: "Auto Detailing",
        slug: "auto-detailing",
        shortDescription: "Complete interior and exterior detailing",
        description: "Professional auto detailing that restores your vehicle to showroom condition with meticulous attention to every surface.",
        icon: "Car",
        priceRange: "$150 - $500",
        duration: "3-6 hours",
        featured: true
    },
    {
        id: "ceramic-coating",
        name: "Ceramic Coating",
        slug: "ceramic-coating",
        shortDescription: "Long-lasting paint protection",
        description: "Professional-grade ceramic coating that provides years of protection against UV rays, chemicals, and environmental contaminants.",
        icon: "Shield",
        priceRange: "$500 - $1,500",
        duration: "4-8 hours",
        featured: true
    },
    {
        id: "paint-correction",
        name: "Paint Correction",
        slug: "paint-correction",
        shortDescription: "Swirl and scratch removal",
        description: "Multi-stage paint correction to remove swirl marks, scratches, and oxidation, restoring your paint to a flawless finish.",
        icon: "Sparkles",
        priceRange: "$300 - $800",
        duration: "4-8 hours",
        featured: true
    },
    {
        id: "interior-deep-cleansing",
        name: "Interior Deep Cleansing",
        slug: "interior-deep-cleansing",
        shortDescription: "Deep interior cleaning & sanitization",
        description: "Thorough interior cleaning including steam cleaning, extraction, and sanitization for a fresh, like-new cabin.",
        icon: "Sofa",
        priceRange: "$150 - $350",
        duration: "2-4 hours",
        featured: false
    },
    {
        id: "exterior-hand-wash",
        name: "Exterior Hand Wash",
        slug: "exterior-hand-wash",
        shortDescription: "Premium hand wash with sealant",
        description: "Gentle hand wash using premium products, finished with a protective sealant for lasting shine.",
        icon: "Droplets",
        priceRange: "$50 - $100",
        duration: "1-2 hours",
        featured: false
    },
    {
        id: "headlight-restoration",
        name: "Headlight Restoration",
        slug: "headlight-restoration",
        shortDescription: "Restore clarity & brightness",
        description: "Professional headlight restoration that removes oxidation and yellowing, improving visibility and appearance.",
        icon: "Lightbulb",
        priceRange: "$75 - $150",
        duration: "1-2 hours",
        featured: false
    },
    {
        id: "engine-detailing",
        name: "Engine Detailing",
        slug: "engine-detailing",
        shortDescription: "Engine bay cleaning & dressing",
        description: "Safe and thorough engine bay cleaning that removes grime and restores a clean, well-maintained appearance.",
        icon: "Cog",
        priceRange: "$100 - $200",
        duration: "1-2 hours",
        featured: false
    },
    {
        id: "wheel-tire-detailing",
        name: "Wheel & Tire Detailing",
        slug: "wheel-tire-detailing",
        shortDescription: "Deep wheel cleaning & tire dressing",
        description: "Complete wheel and tire service including brake dust removal, polishing, and premium tire dressing.",
        icon: "CircleDot",
        priceRange: "$75 - $150",
        duration: "1-2 hours",
        featured: false
    },
    {
        id: "scratch-removal",
        name: "Scratch Removal",
        slug: "scratch-removal",
        shortDescription: "Paint scratch repair",
        description: "Professional scratch removal using compound and polish techniques to restore your paint surface.",
        icon: "Eraser",
        priceRange: "$100 - $400",
        duration: "2-4 hours",
        featured: false
    },
    {
        id: "odor-elimination",
        name: "Odor Elimination",
        slug: "odor-elimination",
        shortDescription: "Ozone treatment & deep sanitization",
        description: "Advanced odor elimination using ozone treatment and deep cleaning to remove stubborn smells permanently.",
        icon: "Wind",
        priceRange: "$100 - $200",
        duration: "2-4 hours",
        featured: false
    },
    {
        id: "leather-conditioning",
        name: "Leather Conditioning",
        slug: "leather-conditioning",
        shortDescription: "Leather cleaning & protection",
        description: "Professional leather care including cleaning, conditioning, and protection to preserve your leather surfaces.",
        icon: "Armchair",
        priceRange: "$75 - $175",
        duration: "1-2 hours",
        featured: false
    },
    {
        id: "pet-hair-removal",
        name: "Pet Hair Removal",
        slug: "pet-hair-removal",
        shortDescription: "Complete pet hair extraction",
        description: "Specialized pet hair removal using professional tools to eliminate embedded pet hair from all surfaces.",
        icon: "Dog",
        priceRange: "$75 - $150",
        duration: "1-2 hours",
        featured: false
    },
    {
        id: "water-spot-removal",
        name: "Water Spot Removal",
        slug: "water-spot-removal",
        shortDescription: "Hard water stain removal",
        description: "Professional water spot removal to eliminate mineral deposits and hard water stains from paint and glass.",
        icon: "Droplet",
        priceRange: "$100 - $250",
        duration: "2-3 hours",
        featured: false
    },
    {
        id: "glass-treatment",
        name: "Glass Treatment",
        slug: "glass-treatment",
        shortDescription: "Hydrophobic glass coating",
        description: "Advanced glass treatment that provides hydrophobic protection for improved visibility in rain.",
        icon: "GlassWater",
        priceRange: "$50 - $100",
        duration: "1 hour",
        featured: false
    },
    {
        id: "chrome-polishing",
        name: "Chrome Polishing",
        slug: "chrome-polishing",
        shortDescription: "Chrome & metal restoration",
        description: "Professional chrome and metal polishing to restore shine and remove oxidation from trim and accessories.",
        icon: "Gem",
        priceRange: "$75 - $200",
        duration: "1-3 hours",
        featured: false
    }
];
const VEHICLE_TYPES = [
    "Sedan",
    "SUV",
    "Truck",
    "Luxury",
    "Sports Car",
    "Minivan",
    "Coupe",
    "Convertible",
    "RV/Motorhome",
    "Motorcycle"
];
const NAV_LINKS = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Services",
        href: "/services"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Reviews",
        href: "/reviews"
    },
    {
        name: "Contact",
        href: "/contact"
    },
    {
        name: "Book Now",
        href: "/booking",
        highlight: true
    }
];
}),
"[project]/lib/email.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Email template generators for Gmail API integration
__turbopack_context__.s([
    "generateAppointmentReminderEmail",
    ()=>generateAppointmentReminderEmail,
    "generateBookingConfirmationEmail",
    ()=>generateBookingConfirmationEmail,
    "generateLeadFollowupEmail",
    ()=>generateLeadFollowupEmail,
    "generateOwnerNotificationEmail",
    ()=>generateOwnerNotificationEmail,
    "generateReviewRequestEmail",
    ()=>generateReviewRequestEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-route] (ecmascript)");
;
// Common email styles
const emailStyles = `
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; background-color: #f5f5f5; }
  .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  .header { background-color: #00ae98; padding: 32px 24px; text-align: center; }
  .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; }
  .header p { color: rgba(255,255,255,0.9); margin: 8px 0 0; font-size: 14px; }
  .content { padding: 32px 24px; }
  .content h2 { color: #00ae98; font-size: 20px; margin: 0 0 16px; }
  .content p { margin: 0 0 16px; color: #4a4a4a; }
  .info-box { background-color: #f8f9fa; border-left: 4px solid #00ae98; padding: 16px; margin: 24px 0; border-radius: 0 4px 4px 0; }
  .info-box h3 { color: #1a1a1a; margin: 0 0 12px; font-size: 16px; }
  .info-box p { margin: 4px 0; font-size: 14px; }
  .cta-button { display: inline-block; background-color: #00ae98; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; margin: 16px 0; }
  .cta-button:hover { background-color: #009985; }
  .footer { background-color: #1a1a1a; color: #ffffff; padding: 24px; text-align: center; }
  .footer p { margin: 4px 0; font-size: 14px; color: rgba(255,255,255,0.8); }
  .footer a { color: #00ae98; text-decoration: none; }
  .divider { border-top: 1px solid #e5e5e5; margin: 24px 0; }
  .badge { display: inline-block; background-color: #00ae98; color: #ffffff; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 600; }
`;
// Get service name from slug
function getServiceName(slug) {
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SERVICES"].find((s)=>s.slug === slug);
    return service?.name || slug;
}
// Get neighborhood name from slug
function getNeighborhoodName(slug) {
    const area = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SERVICE_AREAS"].find((a)=>a.slug === slug);
    return area?.name || slug;
}
// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
function generateBookingConfirmationEmail(booking) {
    const serviceName = getServiceName(booking.serviceSlug);
    const neighborhoodName = getNeighborhoodName(booking.neighborhood);
    const vehicle = [
        booking.vehicleYear,
        booking.vehicleMake || booking.vehicleType
    ].filter(Boolean).join(" ");
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation - ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</h1>
      <p>Professional Auto Detailing San Antonio</p>
    </div>
    
    <div class="content">
      <h2>Booking Request Received!</h2>
      
      <p>Hi ${booking.customerName},</p>
      
      <p>Thank you for choosing ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name} for your auto detailing needs! We've received your booking request and will contact you within <strong>2 hours</strong> during business hours to confirm your appointment.</p>
      
      <div class="info-box">
        <h3>Your Booking Details</h3>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Date:</strong> ${formatDate(booking.scheduledDate)}</p>
        <p><strong>Time:</strong> ${booking.scheduledTime}</p>
        <p><strong>Location:</strong> ${neighborhoodName}, San Antonio</p>
        ${booking.specialRequests ? `<p><strong>Special Requests:</strong> ${booking.specialRequests}</p>` : ""}
      </div>
      
      <p><strong>Next Steps:</strong></p>
      <ol>
        <li>We'll call or text you to confirm availability</li>
        <li>A 20% deposit will be required to secure your appointment</li>
        <li>We'll arrive at your location with all equipment needed</li>
        <li>Enjoy your freshly detailed vehicle!</li>
      </ol>
      
      <div class="divider"></div>
      
      <p><span class="badge">IDA Certified</span> <span class="badge">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CREDENTIALS"].yearsExperience}+ Years</span></p>
      
      <p>Need to make changes or have questions? Contact us:</p>
      <p>
        <a href="tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw}" class="cta-button">Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phone}</a>
      </p>
      
      <p style="font-size: 14px; color: #666;">
        <strong>Remember:</strong> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CREDENTIALS"].charityDonation} of our profits support ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CREDENTIALS"].charityPartner}, helping local youth learn valuable business skills.
      </p>
    </div>
    
    <div class="footer">
      <p><strong>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</strong></p>
      <p>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].address.full}</p>
      <p><a href="tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phone}</a> | <a href="mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].email}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].email}</a></p>
      <p><a href="${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}</a></p>
    </div>
  </div>
</body>
</html>
`;
}
function generateLeadFollowupEmail(lead) {
    const serviceName = lead.serviceSlug ? getServiceName(lead.serviceSlug) : "Auto Detailing";
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Quote Request - ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</h1>
      <p>Professional Auto Detailing San Antonio</p>
    </div>
    
    <div class="content">
      <h2>Thanks for Your Interest!</h2>
      
      <p>Hi ${lead.customerName},</p>
      
      <p>Thank you for reaching out to ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}! We've received your request for a ${serviceName} quote and will be in touch within <strong>2 hours</strong> during business hours.</p>
      
      <div class="info-box">
        <h3>What Makes Us Different</h3>
        <p>✓ <strong>IDA Certified:</strong> Professional certification ensuring top-quality work</p>
        <p>✓ <strong>Mobile Service:</strong> We come to your home or office</p>
        <p>✓ <strong>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CREDENTIALS"].yearsExperience}+ Years Experience:</strong> Trusted by San Antonio families</p>
        <p>✓ <strong>Community Focused:</strong> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CREDENTIALS"].charityDonation} supports local youth education</p>
      </div>
      
      <p>Ready to schedule now? Book online and get priority service:</p>
      
      <p>
        <a href="${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}/booking" class="cta-button">Book Your Detail</a>
      </p>
      
      <div class="divider"></div>
      
      <p>Can't wait? Give us a call:</p>
      <p>
        <a href="tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw}" style="color: #00ae98; font-size: 20px; font-weight: 600; text-decoration: none;">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phone}</a>
      </p>
      
      <p style="font-size: 14px; color: #666;">
        We're available Tuesday-Sunday, 7AM-10PM. We look forward to helping your vehicle look its best!
      </p>
    </div>
    
    <div class="footer">
      <p><strong>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</strong></p>
      <p>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].address.full}</p>
      <p><a href="tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phone}</a> | <a href="mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].email}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].email}</a></p>
      <p><a href="${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}</a></p>
    </div>
  </div>
</body>
</html>
`;
}
function generateOwnerNotificationEmail(data, type) {
    const isBooking = type === "booking";
    const bookingData = data;
    const leadData = data;
    const serviceName = isBooking ? getServiceName(bookingData.serviceSlug) : leadData.serviceSlug ? getServiceName(leadData.serviceSlug) : "Not specified";
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New ${isBooking ? "Booking" : "Lead"} - ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header" style="background-color: ${isBooking ? "#00ae98" : "#2563eb"};">
      <h1>New ${isBooking ? "Booking Request" : "Lead"}</h1>
      <p>${new Date().toLocaleString("en-US", {
        timeZone: "America/Chicago"
    })}</p>
    </div>
    
    <div class="content">
      <h2>${isBooking ? "Booking Details" : "Lead Information"}</h2>
      
      <div class="info-box">
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${data.customerName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.customerEmail}">${data.customerEmail}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${data.customerPhone}">${data.customerPhone}</a></p>
      </div>
      
      ${isBooking ? `
      <div class="info-box">
        <h3>Appointment Details</h3>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Vehicle:</strong> ${[
        bookingData.vehicleYear,
        bookingData.vehicleMake || bookingData.vehicleType
    ].filter(Boolean).join(" ")}</p>
        <p><strong>Date:</strong> ${formatDate(bookingData.scheduledDate)}</p>
        <p><strong>Time:</strong> ${bookingData.scheduledTime}</p>
        <p><strong>Location:</strong> ${getNeighborhoodName(bookingData.neighborhood)}, San Antonio</p>
        ${bookingData.specialRequests ? `<p><strong>Special Requests:</strong> ${bookingData.specialRequests}</p>` : ""}
      </div>
      ` : `
      <div class="info-box">
        <h3>Request Details</h3>
        <p><strong>Service Interest:</strong> ${serviceName}</p>
        <p><strong>Source:</strong> ${leadData.source}</p>
        ${leadData.message ? `<p><strong>Message:</strong> ${leadData.message}</p>` : ""}
      </div>
      `}
      
      <p><strong>Action Required:</strong> Contact customer within 2 hours</p>
      
      <p>
        <a href="tel:${data.customerPhone}" class="cta-button">Call Customer Now</a>
      </p>
    </div>
    
    <div class="footer">
      <p>This is an automated notification from ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}</p>
    </div>
  </div>
</body>
</html>
`;
}
function generateAppointmentReminderEmail(booking) {
    const serviceName = getServiceName(booking.serviceSlug);
    const neighborhoodName = getNeighborhoodName(booking.neighborhood);
    const vehicle = [
        booking.vehicleYear,
        booking.vehicleMake || booking.vehicleType
    ].filter(Boolean).join(" ");
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Reminder - ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</h1>
      <p>Appointment Reminder</p>
    </div>
    
    <div class="content">
      <h2>Your Appointment is Tomorrow!</h2>
      
      <p>Hi ${booking.customerName},</p>
      
      <p>This is a friendly reminder about your upcoming auto detailing appointment with ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}.</p>
      
      <div class="info-box">
        <h3>Appointment Details</h3>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Date:</strong> ${formatDate(booking.scheduledDate)}</p>
        <p><strong>Time:</strong> ${booking.scheduledTime}</p>
        <p><strong>Location:</strong> ${neighborhoodName}, San Antonio</p>
      </div>
      
      <p><strong>Please ensure:</strong></p>
      <ul>
        <li>Your vehicle is accessible at the scheduled time</li>
        <li>Remove any valuables from the vehicle</li>
        <li>We have access to water and electricity if possible</li>
      </ul>
      
      <p>Need to reschedule? Contact us as soon as possible:</p>
      <p>
        <a href="tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw}" class="cta-button">Call ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phone}</a>
      </p>
      
      <p style="font-size: 14px; color: #666;">
        We look forward to making your ${vehicle} shine!
      </p>
    </div>
    
    <div class="footer">
      <p><strong>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</strong></p>
      <p>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].address.full}</p>
      <p><a href="tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phone}</a> | <a href="mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].email}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].email}</a></p>
    </div>
  </div>
</body>
</html>
`;
}
function generateReviewRequestEmail(booking) {
    const serviceName = getServiceName(booking.serviceSlug);
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How Did We Do? - ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</h1>
      <p>We'd Love Your Feedback</p>
    </div>
    
    <div class="content">
      <h2>How Was Your Experience?</h2>
      
      <p>Hi ${booking.customerName},</p>
      
      <p>Thank you for choosing ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name} for your ${serviceName} service! We hope your vehicle is looking fantastic.</p>
      
      <p>Would you take a moment to share your experience? Your review helps other San Antonio car owners find quality auto detailing, and helps us continue to improve our service.</p>
      
      <p style="text-align: center;">
        <a href="${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].social.google}" class="cta-button" style="background-color: #4285f4;">Leave a Google Review</a>
      </p>
      
      <p style="text-align: center; margin-top: 16px;">
        <a href="${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}/reviews" class="cta-button">Leave a Website Review</a>
      </p>
      
      <div class="divider"></div>
      
      <p style="font-size: 14px; color: #666;">
        <strong>Remember:</strong> Your support helps us donate ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CREDENTIALS"].charityDonation} of profits to ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CREDENTIALS"].charityPartner}, empowering local youth with business skills.
      </p>
      
      <p>Questions or concerns? We're here to help:</p>
      <p>
        <a href="tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phoneRaw}" style="color: #00ae98; text-decoration: none;">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].phone}</a>
      </p>
    </div>
    
    <div class="footer">
      <p><strong>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}</strong></p>
      <p>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].address.full}</p>
      <p><a href="${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].website}</a></p>
    </div>
  </div>
</body>
</html>
`;
}
}),
"[project]/app/api/lead/process/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email.tsx [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const leadData = await request.json();
        // 1. Send follow-up email to customer
        const customerEmailHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateLeadFollowupEmail"])(leadData);
        const customerEmailResponse = await fetch(new URL("/api/email/send", request.url), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                to: leadData.customerEmail,
                toName: leadData.customerName,
                subject: `Your Quote Request - ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name}`,
                html: customerEmailHtml
            })
        });
        // 2. Send notification email to business owner
        const ownerEmailHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$tsx__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateOwnerNotificationEmail"])(leadData, "lead");
        await fetch(new URL("/api/email/send", request.url), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                to: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].email,
                toName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BUSINESS_INFO"].name,
                subject: `New Lead - ${leadData.customerName}`,
                html: ownerEmailHtml
            })
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            emailSent: customerEmailResponse.ok
        });
    } catch (error) {
        console.error("[v0] Lead processing error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error instanceof Error ? error.message : "Failed to process lead"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__72158284._.js.map