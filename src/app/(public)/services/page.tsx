import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, SectionHeading, CTABanner } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/Cards";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { siteImages } from "@/data/images";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Services",
  description: "Carpet, rug, upholstery, mattress, commercial cleaning, and epoxy flooring across the GTA.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Complete Cleaning & Flooring Services" subtitle="Residential and commercial solutions with quote-based pricing." image={siteImages.hero.services} imageAlt="Services hero" primaryCta={{ label: siteConfig.ctas.quote, href: "/contact" }} />
      <section className="site-section py-16 sm:py-20"><div className="site-container"><SectionHeading eyebrow="Overview" title="What We Offer" /><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{services.map((s) => <ServiceCard key={s.slug} title={s.title} description={s.shortDescription} href={`/services/${s.slug}`} image={s.image} />)}</div></div></section>
      <section className="site-section bg-grey py-16 sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-2 lg:items-center"><div><SectionHeading eyebrow="Residential" title="Homes & Condos" description="Single-room refreshes to full-home deep cleans and move-out services." /></div><Image src={siteImages.services.carpet} alt="Residential cleaning" width={700} height={500} className="responsive-img rounded-2xl border border-brand/10" /></div></section>
      <section className="site-section py-16 sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-2 lg:items-center"><Image src={siteImages.services.commercial} alt="Commercial cleaning" width={700} height={500} className="responsive-img rounded-2xl border border-brand/10" /><SectionHeading eyebrow="Commercial" title="Offices & Property Management" description="Reliable maintenance and one-time commercial carpet cleaning." /></div></section>
      <section className="site-section bg-grey py-16 sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-2 lg:items-center"><SectionHeading eyebrow="Epoxy" title="Epoxy Flooring Services" description="Garages, basements, and industrial floors with durable coatings." /><Image src={siteImages.services.epoxy} alt="Epoxy flooring" width={700} height={500} className="responsive-img rounded-2xl border border-brand/10" /></div></section>
      <section className="site-section py-16 sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand/10"><Image src={siteImages.sections.steam} alt="Service questions" fill className="object-cover" sizes="40vw" /></div><div><SectionHeading eyebrow="FAQ" title="Service Questions" /><div className="mt-8"><FAQAccordion items={faqs.filter((f) => f.category === "Services" || f.category === "Epoxy").slice(0, 4)} /></div></div></div></section>
      <CTABanner title={siteConfig.pricingNote} description="Tell us about your space and we'll provide a personalized quote." primary={{ label: siteConfig.ctas.quote, href: "/contact" }} />
    </>
  );
}
