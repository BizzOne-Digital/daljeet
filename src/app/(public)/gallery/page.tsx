import type { Metadata } from "next";
import { PageHero, CTABanner } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { galleryImages } from "@/data/gallery";
import { siteImages } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Gallery", description: "Project gallery for carpet, upholstery, commercial, and epoxy work across the GTA." };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Our Work" subtitle="Carpet, upholstery, commercial, and epoxy project photography across the GTA." image={siteImages.hero.gallery} imageAlt="Gallery hero" />
      <section className="site-section py-16 sm:py-20"><div className="site-container"><BeforeAfterSlider caption="Representative cleaning results — your results may vary by material and condition." /><div className="mt-12"><GalleryGrid items={galleryImages} /></div></div></section>
      <CTABanner title="Want Results Like These?" description="Request a free quote for your space." primary={{ label: siteConfig.ctas.book, href: "/booking" }} />
    </>
  );
}
