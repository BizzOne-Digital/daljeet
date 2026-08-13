import fs from "fs";
import path from "path";

const palette = {
  navy: "#071526",
  midnight: "#030A12",
  brand: "#0077E6",
  cyan: "#19C8FF",
  white: "#F7FBFF",
  grey: "#E8EEF4",
  slate: "#526273",
  yellow: "#FFC400",
  orange: "#FF8A00",
};

function svg(title, subtitle, accent = palette.cyan) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-label="${subtitle}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${palette.midnight}"/>
      <stop offset="55%" stop-color="${palette.navy}"/>
      <stop offset="100%" stop-color="${palette.brand}"/>
    </linearGradient>
    <linearGradient id="steam" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0.35"/>
    </linearGradient>
    <pattern id="fibres" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M0 24 L24 0" stroke="${palette.cyan}" stroke-opacity="0.06"/>
    </pattern>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <rect width="1600" height="1000" fill="url(#fibres)"/>
  <ellipse cx="420" cy="760" rx="520" ry="120" fill="url(#steam)"/>
  <path d="M180 820 C520 660, 860 900, 1180 720 S1500 560, 1600 680" fill="none" stroke="${palette.cyan}" stroke-opacity="0.25" stroke-width="4"/>
  <circle cx="260" cy="220" r="140" fill="${palette.yellow}" fill-opacity="0.08"/>
  <text x="80" y="110" fill="${palette.cyan}" font-family="Arial, sans-serif" font-size="24" letter-spacing="6">LET'S GET CARPET CLEAN</text>
  <text x="80" y="360" fill="${palette.white}" font-family="Arial Black, sans-serif" font-size="84">${title}</text>
  <text x="82" y="430" fill="${palette.grey}" font-family="Arial, sans-serif" font-size="28">${subtitle}</text>
  <text x="80" y="940" fill="${palette.slate}" font-family="Arial, sans-serif" font-size="22">Replace with client photography</text>
</svg>`;
}

const files = [
  ["images/hero/home.svg", "DEEP CLEAN", "Home hero — steam carpet cleaning"],
  ["images/hero/about.svg", "LOCALLY OWNED", "About hero"],
  ["images/hero/services.svg", "OUR SERVICES", "Services hero"],
  ["images/hero/gallery.svg", "PROJECT GALLERY", "Gallery hero"],
  ["images/hero/testimonials.svg", "CLIENT STORIES", "Testimonials hero"],
  ["images/hero/faqs.svg", "QUESTIONS", "FAQ hero"],
  ["images/hero/pricing.svg", "FREE QUOTES", "Pricing hero"],
  ["images/hero/blog.svg", "CLEANING TIPS", "Blog hero"],
  ["images/hero/contact.svg", "CONTACT US", "Contact hero"],
  ["images/hero/booking.svg", "BOOK A CLEANING", "Booking hero"],
  ["images/sections/founder.svg", "MEET DALJIT", "Founder story"],
  ["images/sections/process.svg", "OUR PROCESS", "Cleaning process"],
  ["images/sections/epoxy.svg", "EPOXY FLOORING", "Epoxy spotlight"],
  ["images/sections/gta.svg", "GTA SERVICE", "Service area"],
  ["images/sections/trust.svg", "WHY CHOOSE US", "Trust section"],
  ["images/services/carpet-cleaning.svg", "CARPET CLEANING", "Deep steam carpet cleaning"],
  ["images/services/rug-cleaning.svg", "RUG CLEANING", "Area rug care"],
  ["images/services/upholstery-cleaning.svg", "UPHOLSTERY", "Sofa cleaning"],
  ["images/services/mattress-cleaning.svg", "MATTRESS", "Mattress cleaning"],
  ["images/services/commercial-cleaning.svg", "COMMERCIAL", "Office carpet care"],
  ["images/services/move-cleaning.svg", "MOVE-OUT", "Turnover cleaning"],
  ["images/services/epoxy-flooring.svg", "EPOXY", "Floor coatings"],
  ["images/gallery/carpet-1.svg", "CARPET", "Gallery placeholder"],
  ["images/gallery/carpet-2.svg", "CARPET", "Gallery placeholder"],
  ["images/gallery/rug-1.svg", "RUG", "Gallery placeholder"],
  ["images/gallery/upholstery-1.svg", "UPHOLSTERY", "Gallery placeholder"],
  ["images/gallery/mattress-1.svg", "MATTRESS", "Gallery placeholder"],
  ["images/gallery/commercial-1.svg", "COMMERCIAL", "Gallery placeholder"],
  ["images/gallery/epoxy-1.svg", "EPOXY", "Gallery placeholder"],
  ["images/gallery/epoxy-2.svg", "EPOXY", "Gallery placeholder"],
  ["images/gallery/before-after-1.svg", "BEFORE / AFTER", "Illustrative placeholder only"],
  ["images/gallery/before-after-2.svg", "BEFORE / AFTER", "Illustrative placeholder only"],
  ["images/testimonials/customer-1.svg", "CUSTOMER", "Portrait placeholder"],
  ["images/testimonials/customer-2.svg", "CUSTOMER", "Portrait placeholder"],
  ["images/blog/steam-frequency.svg", "BLOG", "Steam frequency"],
  ["images/blog/condo-tips.svg", "BLOG", "Condo tips"],
  ["images/blog/prepare-home.svg", "BLOG", "Prepare home"],
  ["images/blog/upholstery-expect.svg", "BLOG", "Upholstery guide"],
  ["images/blog/epoxy-garage.svg", "BLOG", "Epoxy garage"],
  ["images/blog/move-out.svg", "BLOG", "Move-out checklist"],
  ["images/faq/faq-1.svg", "FAQ", "Support image"],
  ["images/faq/faq-2.svg", "FAQ", "Support image"],
  ["images/pricing/quote.svg", "QUOTE", "Pricing support"],
  ["images/contact/office.svg", "CONTACT", "Contact support"],
];

const root = path.join(process.cwd(), "public");
for (const [file, title, subtitle] of files) {
  const full = path.join(root, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, svg(title, subtitle));
}

console.log(`Generated ${files.length} placeholder images.`);
