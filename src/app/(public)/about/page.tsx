import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading, CTABanner } from "@/components/sections/PageHero";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { siteConfig, whyChooseUs, cleaningProcess } from "@/data/site";
import { testimonials } from "@/data/testimonials";

import { siteImages } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Daljit and learn about Let's Get Carpet Clean — honest carpet, upholstery, and epoxy services across the GTA.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Locally Owned. Hands-On Service." subtitle={siteConfig.description} image={siteImages.hero.about} imageAlt="Professional carpet cleaner" primaryCta={{ label: siteConfig.ctas.book, href: "/booking" }} />
      <section className="site-section py-16 sm:py-20"><div className="site-container grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center"><SectionHeading eyebrow="Founder" title={`Meet ${siteConfig.founder}`} description="Hands-on trade experience in carpet care and epoxy floor coatings—with a focus on honest recommendations and fair quote-based pricing." /><Image src={siteImages.sections.founder} alt="Founder" width={700} height={520} className="responsive-img rounded-2xl object-cover shadow-lg ring-1 ring-brand/10" /></div></section>
      <section className="site-section bg-grey py-16 sm:py-20"><div className="site-container"><SectionHeading eyebrow="Values" title="Mission & Philosophy" /><div className="mt-8 grid gap-6 lg:grid-cols-2"><div className="min-w-0 grid gap-4 md:grid-cols-2">{whyChooseUs.map((item) => <div key={item.title} className="responsive-img rounded-2xl bg-white p-6 shadow-sm"><h3 className="font-display text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm text-slate">{item.description}</p></div>)}</div><Image src={siteImages.sections.trust} alt="Professional cleaning supplies and equipment" width={600} height={700} className="h-full min-h-[320px] rounded-2xl object-cover shadow-lg" /></div></div></section>
      <section className="site-section py-16 sm:py-20"><div className="site-container"><SectionHeading eyebrow="Process" title="Our Quality Process" /><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{cleaningProcess.map((step) => <div key={step.step} className="responsive-img rounded-2xl border border-brand/10 p-5"><p className="font-display text-2xl font-bold text-brand">{step.step}</p><h3 className="mt-2 font-bold">{step.title}</h3><p className="mt-2 text-sm text-slate">{step.description}</p></div>)}</div><Image src={siteImages.sections.process} alt="Process" width={1200} height={420} className="mt-8 rounded-2xl object-cover shadow-lg" /></div></section>
      <section className="site-section bg-grey py-16 sm:py-20"><div className="site-container"><SectionHeading eyebrow="Community" title="Proudly Serving the GTA" description="Residential homes, condos, commercial spaces, and property-management clients across the Greater Toronto Area." /><Image src={siteImages.sections.gta} alt="GTA community" width={1200} height={420} className="mt-8 rounded-2xl object-cover shadow-lg" /></div></section>
      <section className="site-section py-16 sm:py-20"><div className="site-container"><TestimonialSlider items={testimonials.slice(0, 2)} /></div></section>
      <CTABanner title="Book Your Cleaning" description="Contact us for a free quote and flexible scheduling discussion." primary={{ label: siteConfig.ctas.book, href: "/booking" }} secondary={{ label: siteConfig.ctas.quote, href: "/contact" }} />
    </>
  );
}
