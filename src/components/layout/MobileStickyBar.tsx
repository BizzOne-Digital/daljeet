"use client";

import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid w-full max-w-[100vw] grid-cols-2 gap-2 border-t border-brand/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/20 py-3 text-sm font-semibold text-brand">
        <Phone size={16} /> Call Now
      </a>
      <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-semibold text-white">
        <MessageSquare size={16} /> Get a Quote
      </Link>
    </div>
  );
}
