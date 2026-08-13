"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import type { Testimonial } from "@/types";
import "swiper/css";
import "swiper/css/pagination";

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  return (
    <div className="w-full overflow-hidden">
      <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 6000 }} loop spaceBetween={24} className="!overflow-hidden pb-12">
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!h-auto">
            <figure className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm sm:p-8">
              <blockquote className="break-words text-lg font-medium text-navy sm:text-xl">&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              {item.image && <div className="relative h-12 w-12 overflow-hidden rounded-full"><Image src={item.image.src} alt={item.image.alt} fill className="object-cover" /></div>}
              <div><p className="font-semibold">{item.name}</p><p className="text-sm text-slate">{item.service} • {item.location}</p></div>
            </figcaption>
          </figure>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
