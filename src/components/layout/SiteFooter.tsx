import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/layout/Logo";

const footerNav = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  more: [
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faqs", label: "FAQs" },
    { href: "/booking", label: "Book Now" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-navy text-white">
      <div className="steam-glow absolute inset-0 opacity-40" />
      <div className="site-container relative grid gap-10 py-12 sm:py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo size={64} variant="light" />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">{siteConfig.footerDescription}</p>
          <p className="mt-3 text-sm font-semibold text-cyan">{siteConfig.availability}</p>
          <span className="mt-4 inline-flex rounded-full bg-orange/90 px-3 py-1 text-xs font-bold text-white">
            {siteConfig.offer.headline} — {siteConfig.offer.termsNote}
          </span>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan">Contact</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>{siteConfig.founder}</li>
            <li><a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-white hover:text-cyan">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-cyan">{siteConfig.email}</a></li>
            <li>{siteConfig.address.formatted}</li>
            <li><a href={siteConfig.instagram.url} target="_blank" rel="noreferrer" className="text-cyan hover:text-white">{siteConfig.instagram.handle}</a></li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan">Pages</p>
            <ul className="space-y-2 text-sm text-white/80">
              {footerNav.pages.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan">More</p>
            <ul className="space-y-2 text-sm text-white/80">
              {footerNav.more.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">{siteConfig.copyright}</div>
    </footer>
  );
}
