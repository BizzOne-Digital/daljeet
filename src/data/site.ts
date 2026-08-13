export const siteConfig = {
  name: "Let's Get Carpet Clean",
  headline: "CARPET & STEAM CLEANING",
  heroHeadline: "DEEP CLEAN. FRESH START.",
  heroSupporting:
    "Professional carpet, upholstery, and steam cleaning across the Greater Toronto Area—delivered with honest service, powerful results, and no unnecessary upsells.",
  founder: "Daljit",
  phone: "647-298-3190",
  phoneTel: "+16472983190",
  email: "info@letsgetcarpetclean.com",
  address: {
    street: "451 Brisdale Drive",
    city: "Brampton",
    region: "Ontario",
    country: "CA",
    formatted: "451 Brisdale Drive, Brampton, Ontario",
  },
  availability: "24 hours a day, 7 days a week",
  instagram: {
    handle: "@letsgetcarpetclean",
    url: "https://instagram.com/letsgetcarpetclean",
  },
  serviceArea: "Greater Toronto Area, Ontario",
  serviceAreaCities: [
    "Brampton",
    "Mississauga",
    "Toronto",
    "Vaughan",
    "Caledon",
    "Etobicoke",
    "Markham",
    "Richmond Hill",
    "Oakville",
    "Burlington",
  ],
  offer: {
    headline: "30% OFF",
    description: "Limited-time promotional offer—request your free quote for details.",
    termsNote: "Terms may apply—request a quote for details.",
  },
  pricingNote: "Contact for a free quote",
  description:
    "Let's Get Carpet Clean is a locally owned carpet cleaning and epoxy flooring company serving the Greater Toronto Area. Founded by Daljit, who brings hands-on trade experience in both carpet care and epoxy floor coatings, the business was built on a simple idea: deliver honest, thorough work at fair prices—without the upsells and runaround bigger companies are known for.",
  copyright: `© ${new Date().getFullYear()} Let's Get Carpet Clean. All rights reserved.`,
  footerDescription:
    "Locally owned carpet, upholstery, and epoxy flooring services across the GTA. Honest recommendations, thorough results, and quote-based pricing.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d-79.78!3d43.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s451%20Brisdale%20Drive%2C%20Brampton%2C%20ON!5e0!3m2!1sen!2sca!4v1",
  logo: {
    src: "/logo/logo.png",
    alt: "Let's Get Carpet Clean logo",
    width: 280,
    height: 280,
  },
  ctas: {
    quote: "Get a Free Quote",
    book: "Book a Cleaning",
    call: "Call Now",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export const trustStrip = [
  "Locally owned",
  "GTA service area",
  "Honest quote-based pricing",
  "Residential & commercial",
  "24/7 availability",
] as const;

export const whyChooseUs = [
  {
    title: "Honest Recommendations",
    description: "We suggest only what your space actually needs—no unnecessary upsells or pressure.",
  },
  {
    title: "Attention to Detail",
    description: "From pre-treatment to final walkthrough, every job gets the same careful approach.",
  },
  {
    title: "Residential & Commercial",
    description: "Homes, condos, offices, and property-management maintenance across the GTA.",
  },
  {
    title: "Flexible Scheduling",
    description: "Reach us 24/7 to discuss timing that works for your property and access needs.",
  },
  {
    title: "Fair Quote-Based Pricing",
    description: "Every space is different. We provide personalized quotes—not one-size-fits-all rates.",
  },
] as const;

export const cleaningProcess = [
  {
    step: "01",
    title: "Request a Quote",
    description: "Tell us about your service, property type, and location. We respond with a clear quote.",
  },
  {
    step: "02",
    title: "Confirm the Service",
    description: "Review scope, timing, and access details before your appointment is scheduled.",
  },
  {
    step: "03",
    title: "Deep Clean & Treat",
    description: "Our team performs steam cleaning and targeted treatment based on your materials and needs.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description: "We review results with you and answer any follow-up questions about drying or care.",
  },
] as const;

export const propertyTypes = [
  "Residential home",
  "Condo",
  "Commercial / office",
  "Property management",
  "Other",
] as const;

export const contactMethods = ["Phone", "Email", "Either"] as const;

export const serviceInterests = [
  "Carpet cleaning",
  "Rug cleaning",
  "Sofa & upholstery cleaning",
  "Mattress cleaning",
  "Commercial carpet cleaning",
  "Move-in / move-out cleaning",
  "Epoxy flooring",
  "General inquiry",
] as const;

export const bookingTimeWindows = [
  "Morning (8am – 12pm)",
  "Afternoon (12pm – 5pm)",
  "Evening (5pm – 9pm)",
  "Flexible / discuss by phone",
] as const;
