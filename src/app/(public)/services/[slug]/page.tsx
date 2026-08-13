import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero, CTABanner, Breadcrumbs } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/Cards";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { getServiceBySlug, getRelatedServices, services } from "@/data/services";
import { getServiceDetailImages } from "@/data/images";
import { siteConfig } from "@/data/site";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.shortDescription };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const related = getRelatedServices(slug);
  const detailImages = getServiceDetailImages(slug);

  return (
    <>
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title, href: `/services/${service.slug}` }])]} />
      <PageHero eyebrow={service.category} title={service.heroTitle} subtitle={service.shortDescription} image={service.image.src} imageAlt={service.image.alt} primaryCta={{ label: siteConfig.ctas.quote, href: "/contact" }} secondaryCta={{ label: siteConfig.ctas.book, href: "/booking" }} />
      <section className="site-section py-12 sm:py-16"><div className="site-container max-w-4xl"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} /><p className="text-lg text-slate">{service.introduction}</p></div></section>
      <section className="site-section bg-grey py-12 sm:py-16"><div className="site-container grid gap-8 md:grid-cols-2"><Image src={service.image.src} alt={service.image.alt} width={700} height={500} className="responsive-img rounded-2xl border border-brand/10" /><div><h2 className="font-display text-2xl font-bold">Suitable Environments</h2><ul className="mt-4 space-y-2 text-slate">{service.environments.map((e) => <li key={e}>• {e}</li>)}</ul></div></div></section>
      <section className="site-section py-12 sm:py-16"><div className="site-container grid gap-8 md:grid-cols-2"><div><h2 className="font-display text-2xl font-bold">Benefits</h2><ul className="mt-4 space-y-2 text-slate">{service.benefits.map((b) => <li key={b}>• {b}</li>)}</ul></div><div><h2 className="font-display text-2xl font-bold">Our Process</h2><ol className="mt-4 space-y-2 text-slate">{service.process.map((p, i) => <li key={p}>{i + 1}. {p}</li>)}</ol></div></div><div className="site-container mt-10"><Image src={detailImages.process} alt={`${service.title} in progress`} width={1200} height={420} className="responsive-img rounded-2xl border border-brand/10 object-cover" /></div></section>
      <section className="site-section bg-grey py-12 sm:py-16"><div className="site-container grid gap-8 md:grid-cols-2"><Image src={detailImages.prepare} alt={`Prepare for ${service.title.toLowerCase()}`} width={700} height={500} className="responsive-img rounded-2xl border border-brand/10" /><div><h2 className="font-display text-2xl font-bold">How to Prepare</h2><ul className="mt-4 space-y-2 text-slate">{service.preparation.map((p) => <li key={p}>• {p}</li>)}</ul></div></div></section>
      {service.faqs.length > 0 && <section className="site-section py-12 sm:py-16"><div className="site-container max-w-3xl"><FAQAccordion items={service.faqs.map((f, i) => ({ id: `${service.slug}-${i}`, category: service.category, question: f.question, answer: f.answer }))} /></div></section>}
      {related.length > 0 && <section className="site-section bg-grey py-12 sm:py-16"><div className="site-container"><h2 className="font-display text-2xl font-bold">Related Services</h2><div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{related.map((item) => <ServiceCard key={item.slug} title={item.title} description={item.shortDescription} href={`/services/${item.slug}`} image={item.image} />)}</div></div></section>}
      <CTABanner title="Request a Free Quote" description={siteConfig.pricingNote} primary={{ label: siteConfig.ctas.quote, href: "/contact" }} secondary={{ label: siteConfig.ctas.book, href: "/booking" }} />
    </>
  );
}
