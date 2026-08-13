"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import { SplitHeading } from "@/components/motion/PageTransition";

export function HomeHero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-midnight text-white sm:min-h-[95vh]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={siteImages.hero.home}
          alt="Professional carpet steam cleaning"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="hero-gradient absolute inset-0" />
      <div className="steam-glow absolute inset-0" />
      <div className="grain-overlay absolute inset-0 opacity-50" />

      {/* Animated sweep line */}
      <motion.div
        className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-cyan to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      />

      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl flex-col justify-center px-4 py-24 sm:min-h-[95vh] sm:py-28 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
        <div className="min-w-0 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan backdrop-blur-sm"
          >
            <Sparkles size={14} />
            {siteConfig.headline}
          </motion.div>

          <h1 className="overflow-hidden font-display text-[2rem] font-extrabold uppercase leading-[1.05] sm:text-4xl md:text-5xl lg:text-7xl">
            <SplitHeading text="DEEP CLEAN." className="text-white" />
            <br />
            <span className="text-gradient-brand bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent">
              FRESH START.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {siteConfig.heroSupporting}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4 flex flex-wrap items-center gap-3 text-sm text-cyan"
          >
            <span className="rounded-full bg-orange px-3 py-1 font-bold text-white">{siteConfig.offer.headline}</span>
            <span>{siteConfig.availability}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="/booking" className="btn-primary rounded-full px-8 py-3.5 text-sm font-bold text-white">
              {siteConfig.ctas.book}
            </Link>
            <Link href="/services" className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20">
              Explore Services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 120 }}
          className="mt-12 flex flex-1 justify-center lg:mt-0"
        >
          <div className="animate-float relative overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-cyan/20 blur-2xl" />
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={340}
              height={340}
              className="relative h-auto max-w-[260px] drop-shadow-2xl sm:max-w-[320px] lg:max-w-[340px]"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50"
      >
        <span>Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
