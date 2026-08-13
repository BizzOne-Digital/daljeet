import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import { siteConfig } from "@/data/site";
import { JsonLd, localBusinessJsonLd } from "@/lib/seo/json-ld";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.heroHeadline} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.heroSupporting,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.heroSupporting,
    images: [{ url: siteConfig.logo.src, width: 280, height: 280, alt: siteConfig.logo.alt }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${manrope.variable} h-full overflow-x-clip`}>
      <body className="min-h-full overflow-x-clip bg-white font-body text-navy antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded bg-brand px-4 py-2 text-white">
          Skip to content
        </a>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
