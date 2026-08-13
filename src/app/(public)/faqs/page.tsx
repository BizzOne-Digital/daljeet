import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, CTABanner } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { siteImages } from "@/data/images";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { JsonLd, faqJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = { title: "FAQs", description: "Answers about quotes, services, drying, condos, commercial bookings, epoxy, and our GTA service area." };

export default function FAQsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHero eyebrow="FAQ" title="Questions & Answers" subtitle="Helpful information about our services, quotes, and booking process." image={siteImages.hero.faqs} imageAlt="FAQ hero" />
      <section className="site-section py-16 sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10"><div className="min-w-0 space-y-4"><Image src={siteImages.sections.steam} alt="FAQ support" width={500} height={360} className="responsive-img rounded-2xl border border-brand/10" /><Image src={siteImages.sections.office} alt="Cleaning guidance" width={500} height={360} className="responsive-img rounded-2xl border border-brand/10" /></div><div className="min-w-0"><FAQAccordion items={faqs} /></div></div></section>
      <CTABanner title="Still Have Questions?" description="Reach out anytime — we're available 24/7 for inquiries." primary={{ label: siteConfig.ctas.quote, href: "/contact" }} />
    </>
  );
}
