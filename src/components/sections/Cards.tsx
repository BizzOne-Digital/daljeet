"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ImageAsset } from "@/types";

export function ServiceCard({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: ImageAsset;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="card-shine group h-full min-w-0 overflow-hidden rounded-2xl bg-white shadow-md shadow-navy/5 ring-1 ring-brand/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-extrabold text-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
        <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand transition group-hover:gap-3">
          Learn more <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}
