import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, CTABanner } from "@/components/sections/PageHero";
import { ContactFormWrapper } from "@/components/forms/ContactFormClient";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { siteImages } from "@/data/images";
import { siteConfig } from "@/data/site";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = { title: "Contact", description: "Contact Let's Get Carpet Clean — phone, email, address, and 24/7 availability across the GTA." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get In Touch" subtitle={`${siteConfig.availability}. Serving ${siteConfig.serviceArea}.`} image={siteImages.hero.contact} imageAlt="Contact hero" />
      <section className="site-section py-16 sm:py-20"><div className="site-container grid gap-8 sm:gap-10 lg:grid-cols-2">
        <div className="min-w-0 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-bold">Contact Details</h2>
          <ul className="mt-6 space-y-3 text-slate">
            <li><a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-brand">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand">{siteConfig.email}</a></li>
            <li>{siteConfig.address.formatted}</li>
            <li><a href={siteConfig.instagram.url} target="_blank" rel="noreferrer" className="text-brand">{siteConfig.instagram.handle}</a></li>
          </ul>
          <Image src={siteImages.sections.steam} alt="Contact support" width={600} height={360} className="responsive-img mt-8 rounded-2xl border border-brand/10" />
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-brand/10"><iframe title="Map" src={siteConfig.mapEmbedUrl} className="h-full w-full" loading="lazy" /></div>
        </div>
        <div className="min-w-0 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm sm:p-8"><h2 className="font-display text-2xl font-bold">Send a Message</h2><div className="mt-6"><ContactFormWrapper /></div></div>
      </div></section>
      <section className="site-section bg-grey py-16 sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand/10"><Image src={siteImages.sections.process} alt="Professional cleaning process" fill className="object-cover" sizes="40vw" /></div><FAQAccordion items={faqs.slice(0, 4)} /></div></section>
      <CTABanner title="Ready to Book?" description="Submit a booking request and we'll confirm availability." primary={{ label: siteConfig.ctas.book, href: "/booking" }} />
    </>
  );
}
