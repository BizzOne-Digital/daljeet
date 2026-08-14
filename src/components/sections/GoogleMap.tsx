'use client';

import { siteConfig } from "@/data/site";

export function GoogleMap({ className = "" }: { className?: string }) {
  const address = siteConfig.address.formatted;
  const mapQuery = encodeURIComponent(address);
  
  // Using Google Maps iframe embed with q parameter (no API key needed)
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`overflow-hidden rounded-2xl border border-brand/10 shadow-lg ${className}`}>
      <iframe
        title={`Map showing ${address}`}
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
