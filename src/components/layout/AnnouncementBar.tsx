import Link from "next/link";
import { siteConfig } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-navy via-brand to-cyan px-4 py-2.5 text-center text-sm text-white">
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="inline-flex animate-pulse rounded-full bg-orange px-3 py-0.5 text-xs font-extrabold uppercase shadow-lg">
          {siteConfig.offer.headline}
        </span>
        <Link href="/contact" className="font-bold underline-offset-2 hover:underline">
          Request your free quote →
        </Link>
        <span className="hidden text-xs text-white/75 sm:inline">• {siteConfig.offer.termsNote}</span>
      </div>
    </div>
  );
}
