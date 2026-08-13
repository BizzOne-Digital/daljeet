import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  fullScreen,
  showScrollCue,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  fullScreen?: boolean;
  showScrollCue?: boolean;
}) {
  return (
    <section className={cn("relative w-full overflow-hidden bg-midnight text-white", fullScreen ? "min-h-[60vh] sm:min-h-[70vh]" : "min-h-[38vh] sm:min-h-[45vh]")}>
      <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
      <div className="hero-gradient absolute inset-0" />
      <div className="steam-glow absolute inset-0" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-20">
        {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan sm:tracking-[0.24em]">{eyebrow}</p>}
        <h1 className="max-w-4xl break-words font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primaryCta && <Link href={primaryCta.href} className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white sm:w-auto">{primaryCta.label}<ArrowRight size={15} /></Link>}
            {secondaryCta && <Link href={secondaryCta.href} className="inline-flex w-full justify-center rounded-full border border-white/30 px-6 py-3 text-center text-sm font-bold backdrop-blur-sm hover:bg-white/10 sm:w-auto">{secondaryCta.label}</Link>}
          </div>
        )}
        {showScrollCue && <div className="mt-12 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50"><ArrowDown size={14} className="animate-bounce" />Scroll</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-2 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>}
      <h2 className="break-words font-display text-2xl font-extrabold text-navy sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate">{description}</p>}
    </div>
  );
}

export function CTABanner({ title, description, primary, secondary }: { title: string; description: string; primary: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return (
    <section className="relative w-full overflow-hidden bg-navy py-14 text-white sm:py-20">
      <div className="steam-glow absolute inset-0" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:gap-8 lg:flex-row lg:items-center lg:px-8">
        <div className="min-w-0">
          <h2 className="break-words font-display text-2xl font-extrabold sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm text-white/75 sm:text-base">{description}</p>
        </div>
        <div className="flex w-full flex-wrap gap-3 sm:w-auto">
          <Link href={primary.href} className="btn-primary w-full rounded-full px-6 py-3 text-center text-sm font-bold text-white sm:w-auto sm:px-8 sm:py-3.5">{primary.label}</Link>
          {secondary && <Link href={secondary.href} className="w-full rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold hover:bg-white/10 sm:w-auto sm:px-8 sm:py-3.5">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate">
      {items.map((item, i) => (
        <span key={item.label}>{i > 0 && " / "}{item.href ? <Link href={item.href} className="hover:text-brand">{item.label}</Link> : <span className="text-navy font-medium">{item.label}</span>}</span>
      ))}
    </nav>
  );
}
