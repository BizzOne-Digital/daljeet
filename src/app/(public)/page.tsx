import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { SectionHeading, CTABanner } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/Cards";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FadeIn, StaggerGrid, StaggerItem, ScaleIn } from "@/components/motion/PageTransition";
import { siteConfig, trustStrip, whyChooseUs, cleaningProcess } from "@/data/site";
import { siteImages } from "@/data/images";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { galleryImages } from "@/data/gallery";
import { faqs } from "@/data/faqs";

export default function HomePage() {
  const marqueeItems = [...trustStrip, ...trustStrip];

  return (
    <>
      <HomeHero />

      {/* Trust marquee */}
      <section className="site-section w-full overflow-hidden border-y border-brand/10 bg-white py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span key={`${item}-${i}`} className="text-sm font-bold uppercase tracking-widest text-brand/80">
              ✦ {item}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="site-section section-gradient py-16 sm:py-24">
        <div className="site-container">
          <FadeIn>
            <SectionHeading eyebrow="Services" title="Professional Cleaning Solutions" description="Carpet, upholstery, commercial care, and epoxy flooring across the GTA." />
          </FadeIn>
          <StaggerGrid className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard title={service.title} description={service.shortDescription} href={`/services/${service.slug}`} image={service.image} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Before / After */}
      <section className="site-section py-16 sm:py-24">
        <div className="site-container grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <FadeIn direction="left">
            <SectionHeading eyebrow="Results" title="See the Difference" description="Drag the slider to compare before and after a professional deep clean." />
          </FadeIn>
          <ScaleIn delay={0.15}>
            <BeforeAfterSlider caption="Representative cleaning results — your results may vary by material and condition." />
          </ScaleIn>
        </div>
      </section>

      {/* About */}
      <section className="site-section bg-navy py-16 text-white sm:py-24">
        <div className="site-container grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading eyebrow="About" title={`Founded by ${siteConfig.founder}`} description={siteConfig.description} />
            <Link href="/about" className="mt-8 inline-flex rounded-full border border-cyan/40 px-6 py-3 text-sm font-bold text-cyan hover:bg-cyan/10">
              Our Story →
            </Link>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            <ScaleIn className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-2 ring-cyan/20">
              <Image src={siteImages.sections.founder} alt="Professional cleaner at work" fill className="object-cover" sizes="50vw" />
            </ScaleIn>
            <ScaleIn delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-2 ring-cyan/20 sm:mt-8">
              <Image src={siteImages.sections.livingRoom} alt="Clean modern living room" fill className="object-cover" sizes="50vw" />
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="site-section py-16 sm:py-24">
        <div className="site-container">
          <FadeIn><SectionHeading eyebrow="Process" title="How It Works" align="center" /></FadeIn>
          <StaggerGrid className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cleaningProcess.map((step) => (
              <StaggerItem key={step.step}>
                <div className="glass-panel h-full rounded-2xl p-6">
                  <p className="font-display text-4xl font-extrabold text-brand">{step.step}</p>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <ScaleIn className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl sm:aspect-[21/9]">
            <Image src={siteImages.sections.process} alt="Professional cleaning equipment" fill className="object-cover" sizes="100vw" />
          </ScaleIn>
        </div>
      </section>

      {/* Why choose us */}
      <section className="site-section bg-grey py-16 sm:py-24">
        <div className="site-container">
          <FadeIn><SectionHeading eyebrow="Why Us" title="Why Choose Let's Get Carpet Clean" /></FadeIn>
          <StaggerGrid className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand/10 transition hover:shadow-md">
                  <div className="relative aspect-[16/10]">
                    <Image src={siteImages.whyUs[i] ?? siteImages.sections.steam} alt={item.title} fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-extrabold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Epoxy spotlight */}
      <section className="site-section py-16 sm:py-24">
        <div className="site-container grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
          <ScaleIn className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image src={siteImages.sections.epoxy} alt="Epoxy garage floor coating" fill className="object-cover" sizes="50vw" />
          </ScaleIn>
          <FadeIn direction="right">
            <SectionHeading eyebrow="Epoxy Flooring" title="Garages, Basements & Commercial Floors" description="Durable epoxy coatings applied with proper surface preparation for long-lasting results." />
            <Link href="/services/epoxy-flooring" className="mt-6 inline-block text-sm font-bold text-brand">Learn about epoxy →</Link>
          </FadeIn>
        </div>
      </section>

      {/* Offer */}
      <section className="site-section py-16 sm:py-24">
        <FadeIn className="site-container max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand to-cyan p-6 text-white shadow-2xl shadow-brand/30 sm:p-10">
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-yellow/30 blur-3xl" />
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 sm:text-sm">Limited-Time Offer</p>
            <h2 className="mt-2 break-words font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">{siteConfig.offer.headline}</h2>
            <p className="mt-3 max-w-lg text-white/90">{siteConfig.offer.description}</p>
            <p className="mt-2 text-xs text-white/70">{siteConfig.offer.termsNote}</p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand shadow-lg">Request Free Quote</Link>
          </div>
        </FadeIn>
      </section>

      {/* Testimonials */}
      <section className="site-section bg-white py-16 sm:py-24">
        <div className="site-container">
          <FadeIn><SectionHeading eyebrow="Reviews" title="What Clients Say" align="center" /></FadeIn>
          <div className="mt-10"><TestimonialSlider items={testimonials.slice(0, 3)} /></div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="site-section py-16 sm:py-24">
        <div className="site-container">
          <FadeIn><SectionHeading eyebrow="Gallery" title="Our Work" /></FadeIn>
          <StaggerGrid className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.slice(0, 4).map((item) => (
              <StaggerItem key={item.id} className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image src={item.src} alt={item.alt} fill className="object-cover transition duration-500 group-hover:scale-110" sizes="25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="absolute bottom-3 left-3 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">{item.caption}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <Link href="/gallery" className="mt-8 inline-block font-bold text-brand">View full gallery →</Link>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="site-section bg-grey py-16 sm:py-24">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
          <FadeIn className="space-y-4">
            <SectionHeading eyebrow="FAQ" title="Common Questions" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
              <Image src={siteImages.sections.equipment} alt="Cleaning equipment and supplies" fill className="object-cover" sizes="40vw" />
            </div>
          </FadeIn>
          <div className="mt-8 lg:mt-0"><FAQAccordion items={faqs.slice(0, 4)} /></div>
        </div>
      </section>

      {/* Service area */}
      <section className="site-section py-16 sm:py-24">
        <div className="site-container">
          <FadeIn><SectionHeading eyebrow="Service Area" title="Serving the Greater Toronto Area" /></FadeIn>
          <div className="mt-8 flex flex-wrap gap-2">
            {siteConfig.serviceAreaCities.map((city) => (
              <span key={city} className="rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">{city}</span>
            ))}
          </div>
          <ScaleIn className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[21/9]">
            <Image src={siteImages.sections.gta} alt="Greater Toronto Area" fill className="object-cover" sizes="100vw" />
          </ScaleIn>
        </div>
      </section>

      <CTABanner
        title="Ready for a Deep Clean?"
        description={`Call ${siteConfig.phone} or book online. ${siteConfig.availability}.`}
        primary={{ label: siteConfig.ctas.book, href: "/booking" }}
        secondary={{ label: siteConfig.ctas.quote, href: "/contact" }}
      />
    </>
  );
}
