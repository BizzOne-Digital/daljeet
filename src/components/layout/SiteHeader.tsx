"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

const headerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-brand/10 bg-white/95 shadow-lg shadow-navy/5 backdrop-blur-xl"
          : "border-b border-transparent bg-white/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 lg:px-8">
        <Logo size={72} />

        <nav className="hidden items-center gap-1 lg:flex">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-lg px-4 py-2 text-sm font-semibold text-navy/80 transition hover:bg-brand/5 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 px-4 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand/5"
          >
            <Phone size={15} />
            {siteConfig.phone}
          </a>
          <Link href="/booking" className="btn-primary rounded-full px-5 py-2.5 text-sm font-bold text-white">
            {siteConfig.ctas.book}
          </Link>
        </div>

        <button
          type="button"
          className="rounded-xl border border-brand/15 bg-white p-2.5 shadow-sm lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-brand/10 bg-white lg:hidden"
          >
            <nav className="flex flex-col px-4 py-4">
              {headerNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3.5 font-display text-lg font-bold text-navy hover:bg-brand/5"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 grid gap-2">
                <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 py-3 font-semibold text-brand">
                  <Phone size={16} /> Call Now
                </a>
                <Link href="/booking" onClick={() => setOpen(false)} className="btn-primary rounded-full py-3 text-center font-bold text-white">
                  {siteConfig.ctas.book}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
