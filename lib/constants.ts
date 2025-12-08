// Business Information - NAP Consistency
export const BUSINESS_INFO = {
  name: "One Detail At A Time LLC",
  shortName: "ODAAT",
  address: {
    street: "11692 Bricken Circle",
    city: "San Antonio",
    state: "TX",
    zip: "78233",
    full: "11692 Bricken Circle, San Antonio, TX 78233",
  },
  coordinates: { lat: 29.6199, lng: -98.4738 },
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
    sunday: "7:00 AM - 10:00 PM",
  },
  social: {
    facebook: "https://facebook.com/onedetailatatime",
    instagram: "https://instagram.com/onedetailatatime",
    google: "https://g.page/onedetailatatime",
  },
} as const

// Rating Data
export const RATING_DATA = {
  averageRating: 4.9,
  reviewCount: 47,
  fiveStarCount: 45,
}

// Trust Badges & Credentials
export const CREDENTIALS = {
  idaCertified: true,
  yearsExperience: 10,
  charityPartner: "Junior Achievement of South Texas",
  charityDonation: "10%",
}

// Service Areas - San Antonio Neighborhoods
export const SERVICE_AREAS = [
  { name: "Stone Oak", slug: "stone-oak", travelTime: "15 minutes" },
  { name: "Alamo Heights", slug: "alamo-heights", travelTime: "20 minutes" },
  { name: "Medical Center", slug: "medical-center", travelTime: "18 minutes" },
  { name: "Downtown San Antonio", slug: "downtown", travelTime: "22 minutes" },
  { name: "Northwest Side", slug: "northwest-side", travelTime: "25 minutes" },
  { name: "Northeast Side", slug: "northeast-side", travelTime: "12 minutes" },
  { name: "North Central", slug: "north-central", travelTime: "15 minutes" },
  { name: "Terrell Hills", slug: "terrell-hills", travelTime: "20 minutes" },
  { name: "Castle Hills", slug: "castle-hills", travelTime: "22 minutes" },
  { name: "Shavano Park", slug: "shavano-park", travelTime: "20 minutes" },
] as const

// All 15 Services
export const SERVICES = [
  {
    id: "auto-detailing",
    name: "Auto Detailing",
    slug: "auto-detailing",
    shortDescription: "Complete interior and exterior detailing",
    description:
      "Professional auto detailing that restores your vehicle to showroom condition with meticulous attention to every surface.",
    icon: "Car",
    priceRange: "$150 - $500",
    duration: "3-6 hours",
    featured: true,
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    slug: "ceramic-coating",
    shortDescription: "Long-lasting paint protection",
    description:
      "Professional-grade ceramic coating that provides years of protection against UV rays, chemicals, and environmental contaminants.",
    icon: "Shield",
    priceRange: "$500 - $1,500",
    duration: "4-8 hours",
    featured: true,
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    slug: "paint-correction",
    shortDescription: "Swirl and scratch removal",
    description:
      "Multi-stage paint correction to remove swirl marks, scratches, and oxidation, restoring your paint to a flawless finish.",
    icon: "Sparkles",
    priceRange: "$300 - $800",
    duration: "4-8 hours",
    featured: true,
  },
  {
    id: "interior-deep-cleansing",
    name: "Interior Deep Cleansing",
    slug: "interior-deep-cleansing",
    shortDescription: "Deep interior cleaning & sanitization",
    description:
      "Thorough interior cleaning including steam cleaning, extraction, and sanitization for a fresh, like-new cabin.",
    icon: "Sofa",
    priceRange: "$150 - $350",
    duration: "2-4 hours",
    featured: false,
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
    featured: false,
  },
  {
    id: "headlight-restoration",
    name: "Headlight Restoration",
    slug: "headlight-restoration",
    shortDescription: "Restore clarity & brightness",
    description:
      "Professional headlight restoration that removes oxidation and yellowing, improving visibility and appearance.",
    icon: "Lightbulb",
    priceRange: "$75 - $150",
    duration: "1-2 hours",
    featured: false,
  },
  {
    id: "engine-detailing",
    name: "Engine Detailing",
    slug: "engine-detailing",
    shortDescription: "Engine bay cleaning & dressing",
    description:
      "Safe and thorough engine bay cleaning that removes grime and restores a clean, well-maintained appearance.",
    icon: "Cog",
    priceRange: "$100 - $200",
    duration: "1-2 hours",
    featured: false,
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
    featured: false,
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
    featured: false,
  },
  {
    id: "odor-elimination",
    name: "Odor Elimination",
    slug: "odor-elimination",
    shortDescription: "Ozone treatment & deep sanitization",
    description:
      "Advanced odor elimination using ozone treatment and deep cleaning to remove stubborn smells permanently.",
    icon: "Wind",
    priceRange: "$100 - $200",
    duration: "2-4 hours",
    featured: false,
  },
  {
    id: "leather-conditioning",
    name: "Leather Conditioning",
    slug: "leather-conditioning",
    shortDescription: "Leather cleaning & protection",
    description:
      "Professional leather care including cleaning, conditioning, and protection to preserve your leather surfaces.",
    icon: "Armchair",
    priceRange: "$75 - $175",
    duration: "1-2 hours",
    featured: false,
  },
  {
    id: "pet-hair-removal",
    name: "Pet Hair Removal",
    slug: "pet-hair-removal",
    shortDescription: "Complete pet hair extraction",
    description:
      "Specialized pet hair removal using professional tools to eliminate embedded pet hair from all surfaces.",
    icon: "Dog",
    priceRange: "$75 - $150",
    duration: "1-2 hours",
    featured: false,
  },
  {
    id: "water-spot-removal",
    name: "Water Spot Removal",
    slug: "water-spot-removal",
    shortDescription: "Hard water stain removal",
    description:
      "Professional water spot removal to eliminate mineral deposits and hard water stains from paint and glass.",
    icon: "Droplet",
    priceRange: "$100 - $250",
    duration: "2-3 hours",
    featured: false,
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
    featured: false,
  },
  {
    id: "chrome-polishing",
    name: "Chrome Polishing",
    slug: "chrome-polishing",
    shortDescription: "Chrome & metal restoration",
    description:
      "Professional chrome and metal polishing to restore shine and remove oxidation from trim and accessories.",
    icon: "Gem",
    priceRange: "$75 - $200",
    duration: "1-3 hours",
    featured: false,
  },
] as const

// Vehicle Types for Forms
export const VEHICLE_TYPES = [
  "Sedan",
  "SUV",
  "Truck",
  "Luxury",
  "Sports Car",
  "Minivan",
  "Coupe",
  "Convertible",
  "RV/Motorhome",
  "Motorcycle",
] as const

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
  { name: "Book Now", href: "/booking", highlight: true },
] as const
