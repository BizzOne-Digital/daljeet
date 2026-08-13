import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Logo({ size = 56, variant = "dark" }: { size?: number; variant?: "dark" | "light" }) {
  const textClass = variant === "light" ? "text-white" : "text-navy";
  const subClass = variant === "light" ? "text-cyan" : "text-brand";
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src={siteConfig.logo.src} alt={siteConfig.logo.alt} width={size} height={size} className="h-auto w-auto object-contain" priority />
      <span className={`hidden sm:block ${textClass}`}>
        <span className={`block font-display text-sm font-extrabold uppercase tracking-wide ${textClass}`}>Let&apos;s Get</span>
        <span className={`block font-display text-xs font-bold uppercase tracking-[0.18em] ${subClass}`}>Carpet Clean</span>
      </span>
    </Link>
  );
}
