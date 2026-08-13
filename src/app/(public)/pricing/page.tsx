import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTABanner } from "@/components/sections/PageHero";
import { ContactFormWrapper } from "@/components/forms/ContactFormClient";
import { siteImages } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Pricing", description: "Contact Let's Get Carpet Clean for a free personalized quote across the GTA." };

const quoteFactors = [
  "Service type",
  "Number and size of rooms or items",
  "Material and condition",
  "Stain or odour treatment needs",
  "Property access",
  "Residential versus commercial scope",
  "Epoxy floor size and preparation",
];

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Every Space Is Different" subtitle="Contact for a free personalized quote — no fixed public rates." image={siteImages.hero.pricing} imageAlt="Pricing hero" primaryCta={{ label: siteConfig.ctas.quote, href: "#quote-form" }} />
      <section className="site-section py-16 sm:py-20"><div className="site-container max-w-4xl"><div className="rounded-3xl border border-brand/10 bg-white p-8 shadow-sm"><h2 className="font-display text-2xl font-bold">What may influence your quote</h2><ul className="mt-6 space-y-3 text-slate">{quoteFactors.map((f) => <li key={f}>• {f}</li>)}</ul><div className="mt-8 grid gap-4 sm:grid-cols-2"><Image src={siteImages.sections.livingRoom} alt="Residential cleaning quote" width={450} height={300} className="responsive-img rounded-2xl border border-brand/10 object-cover" /><Image src={siteImages.services.commercial} alt="Commercial cleaning quote" width={450} height={300} className="responsive-img rounded-2xl border border-brand/10 object-cover" /></div></div></div></section>
      <section className="site-section bg-grey py-16 sm:py-20"><div className="site-container grid gap-8 lg:grid-cols-2 lg:items-center"><Image src={siteImages.services.epoxy} alt="Epoxy flooring service" width={600} height={420} className="responsive-img rounded-2xl border border-brand/10 object-cover" /><div className="rounded-3xl bg-gradient-to-br from-brand to-cyan p-8 text-white"><h2 className="font-display text-3xl font-extrabold">{siteConfig.offer.headline}</h2><p className="mt-3">{siteConfig.offer.description}</p><p className="mt-2 text-xs text-white/75">{siteConfig.offer.termsNote}</p><Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-brand">Request Quote</Link></div></div></section>
      <section id="quote-form" className="site-section py-16 sm:py-20"><div className="site-container grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10"><Image src={siteImages.sections.quote} alt="Clean home interior" width={500} height={600} className="hidden rounded-2xl border border-brand/10 object-cover lg:block" /><div><h2 className="font-display text-2xl font-bold">Quick Quote Request</h2><div className="mt-6"><ContactFormWrapper /></div></div></div></section>
      <CTABanner title="Prefer to Talk?" description={`Call ${siteConfig.phone} or book online.`} primary={{ label: siteConfig.ctas.call, href: `tel:${siteConfig.phoneTel}` }} secondary={{ label: siteConfig.ctas.book, href: "/booking" }} />
    </>
  );
}
