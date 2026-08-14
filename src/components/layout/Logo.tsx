import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Logo({ size = 56, variant = "dark" }: { size?: number; variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="flex items-center">
      <Image src={siteConfig.logo.src} alt={siteConfig.logo.alt} width={size} height={size} className="h-auto w-auto object-contain" priority />
    </Link>
  );
}
