// Email template generators for Gmail API integration
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS, CREDENTIALS } from "./constants"

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
`

interface BookingData {
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceSlug: string
  vehicleType: string
  vehicleMake?: string
  vehicleYear?: string
  scheduledDate: string
  scheduledTime: string
  neighborhood: string
  specialRequests?: string
}

interface LeadData {
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceSlug?: string
  message?: string
  source: string
}

// Get service name from slug
function getServiceName(slug: string): string {
  const service = SERVICES.find((s) => s.slug === slug)
  return service?.name || slug
}

// Get neighborhood name from slug
function getNeighborhoodName(slug: string): string {
  const area = SERVICE_AREAS.find((a) => a.slug === slug)
  return area?.name || slug
}

// Format date for display
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Generate booking confirmation email for customer
export function generateBookingConfirmationEmail(booking: BookingData): string {
  const serviceName = getServiceName(booking.serviceSlug)
  const neighborhoodName = getNeighborhoodName(booking.neighborhood)
  const vehicle = [booking.vehicleYear, booking.vehicleMake || booking.vehicleType].filter(Boolean).join(" ")

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation - ${BUSINESS_INFO.name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${BUSINESS_INFO.name}</h1>
      <p>Professional Auto Detailing San Antonio</p>
    </div>
    
    <div class="content">
      <h2>Booking Request Received!</h2>
      
      <p>Hi ${booking.customerName},</p>
      
      <p>Thank you for choosing ${BUSINESS_INFO.name} for your auto detailing needs! We've received your booking request and will contact you within <strong>2 hours</strong> during business hours to confirm your appointment.</p>
      
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
      
      <p><span class="badge">IDA Certified</span> <span class="badge">${CREDENTIALS.yearsExperience}+ Years</span></p>
      
      <p>Need to make changes or have questions? Contact us:</p>
      <p>
        <a href="tel:${BUSINESS_INFO.phoneRaw}" class="cta-button">Call ${BUSINESS_INFO.phone}</a>
      </p>
      
      <p style="font-size: 14px; color: #666;">
        <strong>Remember:</strong> ${CREDENTIALS.charityDonation} of our profits support ${CREDENTIALS.charityPartner}, helping local youth learn valuable business skills.
      </p>
    </div>
    
    <div class="footer">
      <p><strong>${BUSINESS_INFO.name}</strong></p>
      <p>${BUSINESS_INFO.address.full}</p>
      <p><a href="tel:${BUSINESS_INFO.phoneRaw}">${BUSINESS_INFO.phone}</a> | <a href="mailto:${BUSINESS_INFO.email}">${BUSINESS_INFO.email}</a></p>
      <p><a href="${BUSINESS_INFO.website}">${BUSINESS_INFO.website}</a></p>
    </div>
  </div>
</body>
</html>
`
}

// Generate lead follow-up email for customer
export function generateLeadFollowupEmail(lead: LeadData): string {
  const serviceName = lead.serviceSlug ? getServiceName(lead.serviceSlug) : "Auto Detailing"

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Quote Request - ${BUSINESS_INFO.name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${BUSINESS_INFO.name}</h1>
      <p>Professional Auto Detailing San Antonio</p>
    </div>
    
    <div class="content">
      <h2>Thanks for Your Interest!</h2>
      
      <p>Hi ${lead.customerName},</p>
      
      <p>Thank you for reaching out to ${BUSINESS_INFO.name}! We've received your request for a ${serviceName} quote and will be in touch within <strong>2 hours</strong> during business hours.</p>
      
      <div class="info-box">
        <h3>What Makes Us Different</h3>
        <p>✓ <strong>IDA Certified:</strong> Professional certification ensuring top-quality work</p>
        <p>✓ <strong>Mobile Service:</strong> We come to your home or office</p>
        <p>✓ <strong>${CREDENTIALS.yearsExperience}+ Years Experience:</strong> Trusted by San Antonio families</p>
        <p>✓ <strong>Community Focused:</strong> ${CREDENTIALS.charityDonation} supports local youth education</p>
      </div>
      
      <p>Ready to schedule now? Book online and get priority service:</p>
      
      <p>
        <a href="${BUSINESS_INFO.website}/booking" class="cta-button">Book Your Detail</a>
      </p>
      
      <div class="divider"></div>
      
      <p>Can't wait? Give us a call:</p>
      <p>
        <a href="tel:${BUSINESS_INFO.phoneRaw}" style="color: #00ae98; font-size: 20px; font-weight: 600; text-decoration: none;">${BUSINESS_INFO.phone}</a>
      </p>
      
      <p style="font-size: 14px; color: #666;">
        We're available Tuesday-Sunday, 7AM-10PM. We look forward to helping your vehicle look its best!
      </p>
    </div>
    
    <div class="footer">
      <p><strong>${BUSINESS_INFO.name}</strong></p>
      <p>${BUSINESS_INFO.address.full}</p>
      <p><a href="tel:${BUSINESS_INFO.phoneRaw}">${BUSINESS_INFO.phone}</a> | <a href="mailto:${BUSINESS_INFO.email}">${BUSINESS_INFO.email}</a></p>
      <p><a href="${BUSINESS_INFO.website}">${BUSINESS_INFO.website}</a></p>
    </div>
  </div>
</body>
</html>
`
}

// Generate notification email for business owner
export function generateOwnerNotificationEmail(data: BookingData | LeadData, type: "booking" | "lead"): string {
  const isBooking = type === "booking"
  const bookingData = data as BookingData
  const leadData = data as LeadData

  const serviceName = isBooking
    ? getServiceName(bookingData.serviceSlug)
    : leadData.serviceSlug
      ? getServiceName(leadData.serviceSlug)
      : "Not specified"

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New ${isBooking ? "Booking" : "Lead"} - ${BUSINESS_INFO.name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header" style="background-color: ${isBooking ? "#00ae98" : "#2563eb"};">
      <h1>New ${isBooking ? "Booking Request" : "Lead"}</h1>
      <p>${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}</p>
    </div>
    
    <div class="content">
      <h2>${isBooking ? "Booking Details" : "Lead Information"}</h2>
      
      <div class="info-box">
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${data.customerName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.customerEmail}">${data.customerEmail}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${data.customerPhone}">${data.customerPhone}</a></p>
      </div>
      
      ${
        isBooking
          ? `
      <div class="info-box">
        <h3>Appointment Details</h3>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Vehicle:</strong> ${[bookingData.vehicleYear, bookingData.vehicleMake || bookingData.vehicleType].filter(Boolean).join(" ")}</p>
        <p><strong>Date:</strong> ${formatDate(bookingData.scheduledDate)}</p>
        <p><strong>Time:</strong> ${bookingData.scheduledTime}</p>
        <p><strong>Location:</strong> ${getNeighborhoodName(bookingData.neighborhood)}, San Antonio</p>
        ${bookingData.specialRequests ? `<p><strong>Special Requests:</strong> ${bookingData.specialRequests}</p>` : ""}
      </div>
      `
          : `
      <div class="info-box">
        <h3>Request Details</h3>
        <p><strong>Service Interest:</strong> ${serviceName}</p>
        <p><strong>Source:</strong> ${leadData.source}</p>
        ${leadData.message ? `<p><strong>Message:</strong> ${leadData.message}</p>` : ""}
      </div>
      `
      }
      
      <p><strong>Action Required:</strong> Contact customer within 2 hours</p>
      
      <p>
        <a href="tel:${data.customerPhone}" class="cta-button">Call Customer Now</a>
      </p>
    </div>
    
    <div class="footer">
      <p>This is an automated notification from ${BUSINESS_INFO.website}</p>
    </div>
  </div>
</body>
</html>
`
}

// Generate appointment reminder email
export function generateAppointmentReminderEmail(booking: BookingData): string {
  const serviceName = getServiceName(booking.serviceSlug)
  const neighborhoodName = getNeighborhoodName(booking.neighborhood)
  const vehicle = [booking.vehicleYear, booking.vehicleMake || booking.vehicleType].filter(Boolean).join(" ")

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Reminder - ${BUSINESS_INFO.name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${BUSINESS_INFO.name}</h1>
      <p>Appointment Reminder</p>
    </div>
    
    <div class="content">
      <h2>Your Appointment is Tomorrow!</h2>
      
      <p>Hi ${booking.customerName},</p>
      
      <p>This is a friendly reminder about your upcoming auto detailing appointment with ${BUSINESS_INFO.name}.</p>
      
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
        <a href="tel:${BUSINESS_INFO.phoneRaw}" class="cta-button">Call ${BUSINESS_INFO.phone}</a>
      </p>
      
      <p style="font-size: 14px; color: #666;">
        We look forward to making your ${vehicle} shine!
      </p>
    </div>
    
    <div class="footer">
      <p><strong>${BUSINESS_INFO.name}</strong></p>
      <p>${BUSINESS_INFO.address.full}</p>
      <p><a href="tel:${BUSINESS_INFO.phoneRaw}">${BUSINESS_INFO.phone}</a> | <a href="mailto:${BUSINESS_INFO.email}">${BUSINESS_INFO.email}</a></p>
    </div>
  </div>
</body>
</html>
`
}

// Generate review request email
export function generateReviewRequestEmail(booking: BookingData): string {
  const serviceName = getServiceName(booking.serviceSlug)

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How Did We Do? - ${BUSINESS_INFO.name}</title>
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${BUSINESS_INFO.name}</h1>
      <p>We'd Love Your Feedback</p>
    </div>
    
    <div class="content">
      <h2>How Was Your Experience?</h2>
      
      <p>Hi ${booking.customerName},</p>
      
      <p>Thank you for choosing ${BUSINESS_INFO.name} for your ${serviceName} service! We hope your vehicle is looking fantastic.</p>
      
      <p>Would you take a moment to share your experience? Your review helps other San Antonio car owners find quality auto detailing, and helps us continue to improve our service.</p>
      
      <p style="text-align: center;">
        <a href="${BUSINESS_INFO.social.google}" class="cta-button" style="background-color: #4285f4;">Leave a Google Review</a>
      </p>
      
      <p style="text-align: center; margin-top: 16px;">
        <a href="${BUSINESS_INFO.website}/reviews" class="cta-button">Leave a Website Review</a>
      </p>
      
      <div class="divider"></div>
      
      <p style="font-size: 14px; color: #666;">
        <strong>Remember:</strong> Your support helps us donate ${CREDENTIALS.charityDonation} of profits to ${CREDENTIALS.charityPartner}, empowering local youth with business skills.
      </p>
      
      <p>Questions or concerns? We're here to help:</p>
      <p>
        <a href="tel:${BUSINESS_INFO.phoneRaw}" style="color: #00ae98; text-decoration: none;">${BUSINESS_INFO.phone}</a>
      </p>
    </div>
    
    <div class="footer">
      <p><strong>${BUSINESS_INFO.name}</strong></p>
      <p>${BUSINESS_INFO.address.full}</p>
      <p><a href="${BUSINESS_INFO.website}">${BUSINESS_INFO.website}</a></p>
    </div>
  </div>
</body>
</html>
`
}
