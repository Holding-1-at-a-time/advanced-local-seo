// Image constants with SEO-optimized alt text for local search

export const SERVICE_IMAGES = {
  "auto-detailing": {
    src: "/images/services/auto-detailing-san-antonio-professional.jpg",
    alt: "Professional auto detailing service in San Antonio TX - IDA certified technician hand washing luxury vehicle with premium foam wash",
    title: "Auto Detailing San Antonio",
  },
  "ceramic-coating": {
    src: "/images/services/ceramic-coating-application-san-antonio.jpg",
    alt: "Professional ceramic coating application on car paint in San Antonio - creating long-lasting glossy protective finish",
    title: "Ceramic Coating San Antonio",
  },
  "paint-correction": {
    src: "/images/services/paint-correction-swirl-removal-san-antonio.jpg",
    alt: "Car paint correction and swirl mark removal service San Antonio TX - professional machine polishing by IDA certified detailer",
    title: "Paint Correction San Antonio",
  },
  "interior-deep-cleansing": {
    src: "/images/services/interior-deep-cleaning-san-antonio.jpg",
    alt: "Professional car interior deep cleaning San Antonio - steam extraction for leather seats and dashboard sanitization",
    title: "Interior Deep Cleaning San Antonio",
  },
  "exterior-hand-wash": {
    src: "/images/services/exterior-hand-wash-sealant-san-antonio.jpg",
    alt: "Premium hand car wash with sealant application San Antonio TX - gentle foam wash protecting paint finish",
    title: "Hand Wash & Sealant San Antonio",
  },
  "headlight-restoration": {
    src: "/images/services/headlight-restoration-before-after.jpg",
    alt: "Headlight restoration before and after San Antonio - removing oxidation and haze for improved night visibility",
    title: "Headlight Restoration San Antonio",
  },
  "engine-detailing": {
    src: "/images/services/engine-bay-detailing-clean.jpg",
    alt: "Professional engine bay detailing San Antonio TX - degreasing and dressing for clean showroom engine appearance",
    title: "Engine Detailing San Antonio",
  },
  "wheel-tire-detailing": {
    src: "/images/services/wheel-tire-detailing-shine.jpg",
    alt: "Wheel and tire detailing service San Antonio - brake dust removal and premium tire dressing for showroom shine",
    title: "Wheel & Tire Detailing San Antonio",
  },
  "scratch-removal": {
    src: "/images/services/scratch-removal-paint-repair.jpg",
    alt: "Car paint scratch removal San Antonio TX - professional buffing and polishing to remove surface scratches",
    title: "Scratch Removal San Antonio",
  },
  "odor-elimination": {
    src: "/images/services/odor-elimination-ozone-treatment.jpg",
    alt: "Car odor elimination ozone treatment San Antonio - professional deep sanitization removing stubborn odors",
    title: "Odor Elimination San Antonio",
  },
  "leather-conditioning": {
    src: "/images/services/leather-conditioning-seats.jpg",
    alt: "Luxury car leather conditioning San Antonio TX - professional leather care and protection for premium interiors",
    title: "Leather Conditioning San Antonio",
  },
  "pet-hair-removal": {
    src: "/images/services/pet-hair-removal-interior.jpg",
    alt: "Professional pet hair removal from car interior San Antonio - specialized tools for complete hair extraction",
    title: "Pet Hair Removal San Antonio",
  },
  "water-spot-removal": {
    src: "/images/services/water-spot-removal-paint.jpg",
    alt: "Water spot and mineral deposit removal from car paint San Antonio TX - professional polishing for spotless finish",
    title: "Water Spot Removal San Antonio",
  },
  "glass-treatment": {
    src: "/images/services/glass-treatment-hydrophobic.jpg",
    alt: "Hydrophobic glass treatment San Antonio - rain repellent coating for improved windshield visibility",
    title: "Glass Treatment San Antonio",
  },
  "chrome-polishing": {
    src: "/images/services/chrome-polishing-trim.jpg",
    alt: "Professional chrome polishing and metal restoration San Antonio TX - mirror finish on bumpers and trim",
    title: "Chrome Polishing San Antonio",
  },
} as const

export const HERO_IMAGES = {
  main: {
    src: "/images/hero/luxury-car-showroom-shine.jpg",
    alt: "Luxury car with perfect showroom shine after ceramic coating - One Detail At A Time San Antonio professional auto detailing",
    title: "Professional Auto Detailing San Antonio",
  },
  mobile: {
    src: "/images/hero/mobile-detailing-valet-service.jpg",
    alt: "Mobile auto detailing valet service arriving at San Antonio customer home - we come to you",
    title: "Mobile Detailing San Antonio",
  },
} as const

export const ABOUT_IMAGES = {
  certified: {
    src: "/images/about/ida-certified-detailer-working.jpg",
    alt: "IDA certified professional auto detailer working on vehicle in San Antonio - 10+ years experience",
    title: "IDA Certified Detailer San Antonio",
  },
  charity: {
    src: "/images/about/junior-achievement-donation.jpg",
    alt: "Junior Achievement of South Texas students learning business skills - 10% of One Detail At A Time profits support youth education",
    title: "Junior Achievement South Texas Partnership",
  },
} as const

export const GALLERY_IMAGES = {
  ceramicBeforeAfter: {
    src: "/images/gallery/before-after-ceramic-coating.jpg",
    alt: "Ceramic coating before and after comparison San Antonio - dull oxidized paint transformed to glossy protected finish",
    title: "Ceramic Coating Results",
  },
  interiorBeforeAfter: {
    src: "/images/gallery/before-after-interior-detail.jpg",
    alt: "Interior detailing before and after San Antonio - dirty stained seats restored to pristine condition",
    title: "Interior Detail Results",
  },
  paintCorrectionBeforeAfter: {
    src: "/images/gallery/before-after-paint-correction.jpg",
    alt: "Paint correction before and after San Antonio - swirl marks and scratches removed for mirror finish",
    title: "Paint Correction Results",
  },
  stoneOak: {
    src: "/images/gallery/stone-oak-customer-vehicle.jpg",
    alt: "Professional auto detailing completed in Stone Oak San Antonio - luxury SUV with showroom finish",
    title: "Stone Oak Detailing",
  },
  alamoHeights: {
    src: "/images/gallery/alamo-heights-detail-complete.jpg",
    alt: "Premium sedan detailing in Alamo Heights San Antonio - professional finish by One Detail At A Time",
    title: "Alamo Heights Detailing",
  },
} as const

// Helper function to get service image
export function getServiceImage(slug: string) {
  return (
    SERVICE_IMAGES[slug as keyof typeof SERVICE_IMAGES] || {
      src: `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(slug + " auto detailing san antonio")}`,
      alt: `${slug} auto detailing service San Antonio TX`,
      title: `${slug} San Antonio`,
    }
  )
}
