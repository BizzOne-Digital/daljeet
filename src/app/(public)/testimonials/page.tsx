import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/PageHero";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client stories from Let's Get Carpet Clean across the Greater Toronto Area.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="site-section bg-navy py-16 text-white sm:py-20">
        <div className="site-container max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">Testimonials</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">What Clients Say</h1>
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            Real feedback from homeowners and businesses across the GTA.
          </p>
        </div>
      </section>
      <section className="site-section py-16 sm:py-20">
        <div className="site-container">
          <TestimonialSlider items={testimonials} />
        </div>
      </section>
      <section className="site-section bg-grey py-16 sm:py-20">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-2xl bg-white p-6 shadow-sm">
              <blockquote className="break-words text-slate">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-slate">
                {t.name} — {t.service}, {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTABanner title="Share Your Experience" description="Had a great experience? We'd love to hear from you." primary={{ label: siteConfig.ctas.quote, href: "/contact" }} />
    </>
  );
}
