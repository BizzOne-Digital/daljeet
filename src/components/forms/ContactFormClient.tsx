"use client";

import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { useSearchParams } from "next/navigation";

function Inner({ defaultInterest }: { defaultInterest?: string }) {
  return <ContactForm defaultInterest={defaultInterest} />;
}

export function ContactFormClient() {
  const params = useSearchParams();
  const interest = params.get("interest") || undefined;
  return <Inner defaultInterest={interest} />;
}

export function ContactFormWrapper() {
  return (
    <Suspense fallback={<p className="text-sm text-slate">Loading form...</p>}>
      <ContactFormClient />
    </Suspense>
  );
}
