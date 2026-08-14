"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const lines = ["DEEP CLEAN", "FRESH START"];

export function CinematicIntro({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("lgcc-intro-seen");
    return !reduced && !seen;
  });

  const [contentReady, setContentReady] = useState(false);

  const finish = useCallback(() => {
    sessionStorage.setItem("lgcc-intro-seen", "1");
    setShowIntro(false);
    setTimeout(() => setContentReady(true), 300);
  }, []);

  useEffect(() => {
    if (!showIntro) {
      setContentReady(true);
      return;
    }
    const timer = window.setTimeout(finish, 3400);
    return () => window.clearTimeout(timer);
  }, [finish, showIntro]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div 
            key="intro" 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-midnight text-white" 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="fabric-texture absolute inset-0 opacity-30" />
            <motion.div 
              className="absolute inset-x-0 top-1/2 h-px bg-cyan/40" 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ duration: 0.8 }} 
            />
            <div className="relative z-10 flex flex-col items-center px-6 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.4 }}
              >
                <Image src={siteConfig.logo.src} alt={siteConfig.logo.alt} width={160} height={160} priority />
              </motion.div>
              {lines.map((line, i) => (
                <motion.p 
                  key={line} 
                  className="mt-3 font-display text-3xl font-extrabold uppercase tracking-wider sm:text-5xl" 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.9 + i * 0.25 }}
                >
                  {line}
                </motion.p>
              ))}
              <motion.div
                className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <motion.div
                  className="h-full bg-cyan"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.6, duration: 1.6, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
            <motion.button 
              type="button" 
              onClick={finish} 
              className="absolute bottom-8 right-8 rounded-full border border-white/25 px-5 py-2 text-sm transition hover:bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Skip intro
            </motion.button>
            {/* Decorative Elements */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-brand/10 blur-3xl" />
          </motion.div>
        ) : null}
      </AnimatePresence>
      
      {/* Content - only render after intro is done or skipped */}
      <motion.div
        initial={showIntro ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {contentReady && children}
      </motion.div>
    </>
  );
}
