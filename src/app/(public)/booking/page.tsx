import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/forms/BookingForm";
import { siteImages } from "@/data/images";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Cleaning",
  description: "Submit a booking request for carpet, upholstery, commercial, or epoxy services across the GTA.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking Request"
        title="Book a Cleaning"
        subtitle="This form submits a booking request—not a confirmed appointment. We'll contact you to confirm availability."
        image={siteImages.hero.booking}
        imageAlt="Booking hero"
      />
      <section className="site-section py-16 sm:py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <div className="order-2 hidden min-w-0 gap-4 lg:order-1 lg:grid">
            <Image src={siteImages.sections.steam} alt="Professional steam cleaning" width={600} height={400} className="responsive-img rounded-2xl border border-brand/10 object-cover" />
            <Image src={siteImages.sections.epoxy} alt="Epoxy floor coating" width={600} height={400} className="responsive-img rounded-2xl border border-brand/10 object-cover" />
            <Image src={siteImages.sections.office} alt="Commercial carpet cleaning" width={600} height={400} className="responsive-img rounded-2xl border border-brand/10 object-cover" />
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <BookingForm />
            <p className="mt-6 text-sm text-slate">
              Prefer to call? <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-brand">{siteConfig.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
