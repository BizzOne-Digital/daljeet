import type { Service } from "@/types";
import { siteImages } from "@/data/images";

export const services: Service[] = [
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    shortDescription:
      "Deep steam carpet cleaning for homes, condos, and living spaces across the GTA.",
    category: "Carpet",
    image: { src: siteImages.services.carpet, alt: "Professional deep steam carpet cleaning in a modern home" },
    heroTitle: "Professional Carpet Cleaning",
    introduction:
      "Restore freshness to wall-to-wall carpets with deep steam extraction tailored to your fibre type, traffic patterns, and condition. Ideal for routine refreshes, seasonal cleaning, and high-use areas.",
    environments: ["Living rooms", "Bedrooms", "Hallways", "Basements", "Stairs"],
    benefits: [
      "Removes embedded dirt and everyday buildup",
      "Helps refresh appearance and feel underfoot",
      "Suitable for many residential carpet types",
      "Clear quote before work begins",
    ],
    process: [
      "Inspect carpet condition and discuss concerns",
      "Pre-vacuum and pre-treat high-traffic or stained areas as needed",
      "Deep steam extract with appropriate method for the fibre",
      "Final review and drying guidance",
    ],
    preparation: [
      "Remove small items and fragile décor from carpeted areas",
      "Note any specific stains, odours, or pet areas beforehand",
      "Ensure reasonable access to rooms being cleaned",
    ],
    faqs: [
      {
        question: "How long until carpets are dry?",
        answer:
          "Drying time varies by fibre, humidity, ventilation, and cleaning method. Many residential jobs feel noticeably drier within several hours, but full drying may take longer.",
      },
      {
        question: "Do you move furniture?",
        answer:
          "Light items may be moved when safe and agreed in advance. Heavy or fragile furniture should be discussed during quoting.",
      },
    ],
  },
  {
    slug: "rug-cleaning",
    title: "Rug Cleaning",
    shortDescription: "Careful cleaning for area rugs, runners, and delicate fibres.",
    category: "Rug",
    image: { src: siteImages.services.rug, alt: "Area rug cleaning service" },
    heroTitle: "Rug Cleaning",
    introduction:
      "From everyday area rugs to statement pieces, we assess material and construction before choosing an appropriate cleaning approach to help refresh colour and texture.",
    environments: ["Living areas", "Bedrooms", "Entryways", "Office reception areas"],
    benefits: [
      "Material-aware cleaning approach",
      "Helps lift surface and embedded soil",
      "Suitable for many common rug types",
      "Quote based on size and condition",
    ],
    process: [
      "Identify rug material and construction",
      "Pre-inspect stains and wear",
      "Clean using method suited to the rug",
      "Dry and review results",
    ],
    preparation: ["Note rug material if known", "Point out fragile edges or dye concerns", "Ensure clear access for pickup or on-site work"],
    faqs: [
      {
        question: "Can all rugs be cleaned on-site?",
        answer: "Some rugs may be better suited to off-site or specialized handling depending on size, material, and condition—confirmed during your quote.",
      },
    ],
  },
  {
    slug: "sofa-upholstery-cleaning",
    title: "Sofa & Upholstery Cleaning",
    shortDescription: "Refresh sofas, sectionals, chairs, and fabric upholstery.",
    category: "Upholstery",
    image: { src: siteImages.services.upholstery, alt: "Sofa and upholstery steam cleaning" },
    heroTitle: "Sofa & Upholstery Cleaning",
    introduction:
      "Target everyday spills, body oils, and general use on fabric upholstery with methods selected for your furniture type and fabric code where available.",
    environments: ["Sofas", "Sectionals", "Dining chairs", "Office seating", "Accent chairs"],
    benefits: [
      "Helps refresh heavily used seating",
      "Approach tailored to fabric type",
      "Useful before events or seasonal refreshes",
      "Quote reflects number of pieces and condition",
    ],
    process: [
      "Inspect fabric and discuss stains or odours",
      "Pre-treat where appropriate",
      "Extract and clean upholstery surfaces",
      "Review drying expectations",
    ],
    preparation: ["Clear cushions and small items if requested", "Identify fabric codes if available", "Note pet areas or recurring stains"],
    faqs: [
      {
        question: "Will all stains come out?",
        answer: "Results depend on stain type, age, and fabric. We set realistic expectations during inspection—no absolute guarantees.",
      },
    ],
  },
  {
    slug: "mattress-cleaning",
    title: "Mattress Cleaning",
    shortDescription: "Steam cleaning to help refresh mattresses and reduce allergens.",
    category: "Mattress",
    image: { src: siteImages.services.mattress, alt: "Mattress cleaning service" },
    heroTitle: "Mattress Cleaning",
    introduction:
      "Help refresh mattresses with steam cleaning focused on surface soil, odours, and general hygiene concerns—especially useful after moves or seasonal deep cleans.",
    environments: ["Master bedrooms", "Guest rooms", "Rental units", "Property turnovers"],
    benefits: [
      "Helps refresh sleeping surfaces",
      "Useful during move-in/move-out cycles",
      "Quote based on size and condition",
      "Conservative treatment recommendations",
    ],
    process: ["Inspect mattress condition", "Pre-treat localized concerns if suitable", "Steam clean surfaces", "Advise on drying and ventilation"],
    preparation: ["Strip bedding before arrival", "Note stains or odours in advance", "Allow ventilation in the room"],
    faqs: [
      {
        question: "How long should a mattress dry?",
        answer: "Drying varies by material, humidity, and airflow. We provide guidance after service based on your specific situation.",
      },
    ],
  },
  {
    slug: "commercial-carpet-cleaning",
    title: "Commercial Carpet Cleaning",
    shortDescription: "Reliable carpet care for offices, retail, and commercial spaces.",
    category: "Commercial",
    image: { src: siteImages.services.commercial, alt: "Commercial office carpet cleaning" },
    heroTitle: "Commercial Carpet Cleaning",
    introduction:
      "Maintain professional appearances with scheduled or one-time commercial carpet cleaning for offices, retail units, and shared spaces across the GTA.",
    environments: ["Offices", "Retail", "Common areas", "Lobbies", "Property-managed buildings"],
    benefits: [
      "Supports ongoing maintenance plans",
      "Flexible scheduling discussions",
      "Scope tailored to square footage and use",
      "Clear communication for property teams",
    ],
    process: [
      "Walkthrough or scope review",
      "Quote based on area and access",
      "Clean during agreed time window",
      "Document completion for property contacts",
    ],
    preparation: ["Identify after-hours or weekend access needs", "Share floor plans or room counts if available", "Note high-traffic zones"],
    faqs: [
      {
        question: "Do you offer recurring contracts?",
        answer: "Yes—property managers and businesses can discuss ongoing maintenance schedules during quoting.",
      },
    ],
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In & Move-Out Cleaning",
    shortDescription: "Carpet refreshes for tenants, landlords, and property turnovers.",
    category: "Residential",
    image: { src: siteImages.services.move, alt: "Move-in move-out carpet cleaning" },
    heroTitle: "Move-In & Move-Out Cleaning",
    introduction:
      "Prepare units for new occupants or final walkthroughs with thorough carpet cleaning suited to rental turnovers and real estate timelines.",
    environments: ["Apartments", "Condos", "Rental homes", "Managed units"],
    benefits: [
      "Helps present units in better condition",
      "Useful for landlords and tenants",
      "Quote reflects rooms and timeline",
      "Can combine with other fabric services",
    ],
    process: ["Confirm scope and deadline", "Clean agreed carpeted areas", "Review with owner or agent if present", "Provide drying guidance"],
    preparation: ["Ensure vacant access where possible", "List rooms included in lease or listing", "Share building access instructions"],
    faqs: [
      {
        question: "Can you work around tight move dates?",
        answer: "We discuss availability during booking. Timing depends on schedule and drying considerations for the space.",
      },
    ],
  },
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    shortDescription: "Durable epoxy coatings for garages, basements, and industrial floors.",
    category: "Epoxy",
    image: { src: siteImages.services.epoxy, alt: "Epoxy garage floor coating installation" },
    heroTitle: "Epoxy Flooring",
    introduction:
      "Transform garages, basements, and commercial floors with durable epoxy coatings applied by a team with hands-on trade experience in floor preparation and finish.",
    environments: ["Residential garages", "Basements", "Workshops", "Commercial/industrial floors"],
    benefits: [
      "Durable, easy-to-clean surface when properly applied",
      "Customizable finish options discussed at quote",
      "Preparation scope confirmed before work",
      "Suited to high-use floor areas",
    ],
    process: [
      "On-site consultation and surface assessment",
      "Surface prep and repair as quoted",
      "Epoxy application in agreed stages",
      "Cure time guidance and final review",
    ],
    preparation: ["Clear the floor area completely", "Discuss cracks, moisture, or prior coatings", "Plan for cure-time access restrictions"],
    faqs: [
      {
        question: "How long before I can use the floor?",
        answer: "Cure times depend on product, temperature, and coat system. We provide specific guidance after your consultation.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, limit = 3) {
  return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
