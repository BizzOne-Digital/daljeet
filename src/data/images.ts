/** Local images in /public/images — subfolders: hero/, sections/, services/, gallery/ */
const img = (path: string) => `/images/${path}`;

export const siteImages = {
  hero: {
    home: img("hero/hero-home.jpg"),
    about: img("hero/hero-about.jpg"),
    services: img("hero/hero-services.jpg"),
    gallery: img("hero/hero-gallery.jpg"),
    testimonials: img("hero/hero-testimonials.jpg"),
    faqs: img("hero/hero-faqs.jpg"),
    pricing: img("hero/hero-pricing.jpg"),
    contact: img("hero/hero-contact.jpg"),
    booking: img("hero/hero-booking.jpg"),
  },
  sections: {
    founder: img("sections/section-founder.jpg"),
    trust: img("sections/section-equipment.jpg"),
    process: img("sections/section-process.jpg"),
    epoxy: img("sections/section-epoxy.jpg"),
    gta: img("sections/section-gta.jpg"),
    livingRoom: img("sections/section-livingRoom.jpg"),
    steam: img("sections/section-steam.jpg"),
    office: img("sections/section-office.jpg"),
    equipment: img("sections/section-equipment.jpg"),
    condo: img("sections/section-condo.jpg"),
    moveOut: img("sections/section-moveOut.jpg"),
    quote: img("sections/section-quote.jpg"),
  },
  whyUs: [
    img("whyUs-honest.jpg"),
    img("whyUs-detail.jpg"),
    img("whyUs-commercial.jpg"),
    img("whyUs-scheduling.jpg"),
    img("sections/section-quote.jpg"),
  ],
  services: {
    carpet: img("services/service-carpet.jpg"),
    rug: img("services/service-rug.jpg"),
    upholstery: img("services/service-upholstery.jpg"),
    mattress: img("gallery/gallery-5.png"),
    commercial: img("services/service-commercial.jpg"),
    move: img("services/service-move.jpg"),
    epoxy: img("services/service-epoxy.jpg"),
  },
  gallery: {
    carpet1: img("gallery/gallery-1.png"),
    carpet2: img("gallery/gallery-2.png"),
    rug: img("gallery/gallery-3.png"),
    upholstery: img("gallery/gallery-4.png"),
    mattress: img("gallery/gallery-5.png"),
    commercial: img("gallery/gallery-6.png"),
    epoxy1: img("gallery/gallery-7.png"),
    epoxy2: img("services/service-epoxy.jpg"),
    before: img("gallery/gallery-1.png"),
    after: img("gallery/gallery-2.png"),
  },
} as const;

const serviceDetailMap: Record<string, { process: string; prepare: string }> = {
  "carpet-cleaning": { process: siteImages.services.carpet, prepare: siteImages.sections.steam },
  "rug-cleaning": { process: siteImages.services.rug, prepare: siteImages.sections.livingRoom },
  "sofa-upholstery-cleaning": { process: siteImages.services.upholstery, prepare: siteImages.sections.equipment },
  "mattress-cleaning": { process: siteImages.services.mattress, prepare: siteImages.sections.livingRoom },
  "commercial-carpet-cleaning": { process: siteImages.services.commercial, prepare: siteImages.sections.office },
  "move-in-move-out-cleaning": { process: siteImages.services.move, prepare: siteImages.sections.condo },
  "epoxy-flooring": { process: siteImages.services.epoxy, prepare: siteImages.sections.epoxy },
};

export function getServiceDetailImages(slug: string) {
  return (
    serviceDetailMap[slug] ?? {
      process: siteImages.sections.process,
      prepare: siteImages.sections.steam,
    }
  );
}

export type SiteImageKey = keyof typeof siteImages;
