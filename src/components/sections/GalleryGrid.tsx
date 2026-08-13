"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

export function GalleryGrid({ items }: { items: GalleryImage[] }) {
  const [category, setCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const filtered = category === "All" ? items : items.filter((i) => i.category === category);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button key={cat} type="button" onClick={() => setCategory(cat)} className={cn("rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide sm:px-4", category === cat ? "bg-brand text-white" : "border border-brand/15 text-slate")}>{cat}</button>
        ))}
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:break-inside-avoid">
        {filtered.map((item, index) => (
          <button key={item.id} type="button" onClick={() => setLightbox(index)} className="mb-4 block w-full max-w-full overflow-hidden rounded-xl border border-brand/10 text-left">
            <div className="relative aspect-[4/3] w-full overflow-hidden"><Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width:640px) 100vw, 33vw" /></div>
            <div className="p-3"><p className="break-words text-sm font-medium text-navy">{item.caption}</p></div>
          </button>
        ))}
      </div>
      {lightbox !== null && filtered[lightbox] && (
        <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-4 bg-navy/95 p-4" role="dialog" aria-modal="true">
          <button type="button" onClick={() => setLightbox(null)} className="absolute right-3 top-3 rounded-full border border-white/20 p-2 text-white sm:right-4 sm:top-4" aria-label="Close"><X size={20} /></button>
          <Image src={filtered[lightbox].src} alt={filtered[lightbox].alt} width={1200} height={800} className="max-h-[60vh] w-full max-w-full object-contain sm:max-h-[75vh]" />
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))} className="rounded-full border border-white/20 p-2 text-white" aria-label="Previous"><ChevronLeft size={20} /></button>
            <button type="button" onClick={() => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length))} className="rounded-full border border-white/20 p-2 text-white" aria-label="Next"><ChevronRight size={20} /></button>
          </div>
        </div>
      )}
    </>
  );
}
