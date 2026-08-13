"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { siteImages } from "@/data/images";

export function BeforeAfterSlider({ caption }: { caption?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const update = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div className="w-full max-w-full">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl ring-1 ring-brand/15 select-none"
        onPointerMove={(e) => e.buttons === 1 && update(e.clientX)}
        onPointerDown={(e) => update(e.clientX)}
      >
        <Image src={siteImages.gallery.before} alt="Before cleaning" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <Image src={siteImages.gallery.after} alt="After cleaning" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </div>
        <div className="absolute inset-y-0 z-10 w-1 bg-white shadow-lg" style={{ left: `${position}%` }} />
        <div className="absolute top-4 left-4 rounded-full bg-navy/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">Before</div>
        <div className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">After</div>
        <input type="range" min={0} max={100} value={position} onChange={(e) => setPosition(Number(e.target.value))} aria-label="Before and after slider" className="absolute inset-0 z-20 w-full cursor-ew-resize opacity-0" />
      </div>
      {caption && <p className="mt-3 text-sm text-slate">{caption}</p>}
    </div>
  );
}
