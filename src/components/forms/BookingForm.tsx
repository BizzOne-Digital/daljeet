"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { bookingFormSchema, bookingStepSchemas, type BookingFormValues } from "@/lib/validation/booking";
import { bookingTimeWindows, contactMethods, propertyTypes, serviceInterests, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass = "w-full rounded-xl border border-brand/15 bg-white px-4 py-3 text-sm outline-none focus:border-brand/40";
const steps = ["Service", "Property", "Schedule", "Contact", "Review"];

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const form = useForm<BookingFormValues>({
    defaultValues: {
      propertyScope: "Residential",
      propertyType: propertyTypes[0],
      serviceType: serviceInterests[0],
      preferredContact: "Either",
      preferredTime: bookingTimeWindows[0],
      offerInterest: false,
      consent: true,
      website: "",
      approximateArea: "",
      stainNotes: "",
      accessNotes: "",
      alternateDate: "",
      message: "",
    },
  });

  const next = async () => {
    const values = form.getValues();
    const schema = bookingStepSchemas[step];
    const result = schema.safeParse(values);
    if (!result.success) {
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof BookingFormValues;
        form.setError(field, { message: err.message });
      });
      toast.error("Please complete the required fields.");
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const submit = form.handleSubmit(async (data) => {
    const parsed = bookingFormSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message || "Please review your booking details.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      setReference(json.reference);
      toast.success("Booking request sent.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Unable to submit booking request");
    } finally {
      setSubmitting(false);
    }
  });

  const values = form.getValues();

  if (reference) {
    return (
      <div className="rounded-2xl border border-success/20 bg-success/5 p-8">
        <h3 className="font-display text-2xl font-bold text-navy">Request Received</h3>
        <p className="mt-3 text-slate">Reference: <strong>{reference}</strong></p>
        <p className="mt-2 text-slate">This is a booking request—not a confirmed appointment. We&apos;ll contact you to confirm availability.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="min-w-0 rounded-2xl border border-brand/10 bg-white p-4 shadow-sm sm:p-6">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...form.register("website")} />
      <div className="mb-6 flex flex-wrap gap-2">
        {steps.map((label, i) => (
          <span key={label} className={cn("rounded-full px-3 py-1 text-xs font-semibold", i <= step ? "bg-brand text-white" : "bg-grey text-slate")}>{i + 1}. {label}</span>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-4">
          <select className={fieldClass} {...form.register("serviceType")}>{serviceInterests.map((s) => <option key={s}>{s}</option>)}</select>
          <select className={fieldClass} {...form.register("propertyScope")}><option>Residential</option><option>Commercial</option></select>
          <select className={fieldClass} {...form.register("propertyType")}>{propertyTypes.map((p) => <option key={p}>{p}</option>)}</select>
          <input placeholder="Number of rooms or items" className={fieldClass} {...form.register("roomsOrItems")} />
          <input placeholder="Approximate area (optional)" className={fieldClass} {...form.register("approximateArea")} />
          <textarea placeholder="Stain or odour notes (optional)" rows={3} className={fieldClass} {...form.register("stainNotes")} />
        </div>
      )}
      {step === 1 && (
        <div className="space-y-4">
          <input placeholder="City" className={fieldClass} {...form.register("city")} />
          <input placeholder="Full address" className={fieldClass} {...form.register("address")} />
          <textarea placeholder="Parking / access notes" rows={3} className={fieldClass} {...form.register("accessNotes")} />
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          <input type="date" className={fieldClass} {...form.register("preferredDate")} />
          <select className={fieldClass} {...form.register("preferredTime")}>{bookingTimeWindows.map((t) => <option key={t}>{t}</option>)}</select>
          <input type="date" className={fieldClass} {...form.register("alternateDate")} />
        </div>
      )}
      {step === 3 && (
        <div className="space-y-4">
          <input placeholder="Full name" className={fieldClass} {...form.register("name")} />
          <input type="email" placeholder="Email" className={fieldClass} {...form.register("email")} />
          <input placeholder="Phone" className={fieldClass} {...form.register("phone")} />
          <select className={fieldClass} {...form.register("preferredContact")}>{contactMethods.map((m) => <option key={m}>{m}</option>)}</select>
          <textarea placeholder="Additional message" rows={3} className={fieldClass} {...form.register("message")} />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" {...form.register("offerInterest")} /> Interested in {siteConfig.offer.headline} offer</label>
          <label className="flex items-start gap-2 text-sm"><input type="checkbox" className="mt-1" {...form.register("consent")} /> I agree to be contacted about this booking request.</label>
        </div>
      )}
      {step === 4 && (
        <div className="space-y-2 text-sm text-slate">
          <p><strong>Service:</strong> {values.serviceType}</p>
          <p><strong>Property:</strong> {values.propertyScope} — {values.propertyType}</p>
          <p><strong>When:</strong> {values.preferredDate} — {values.preferredTime}</p>
          <p><strong>Contact:</strong> {values.name} — {values.email} — {values.phone}</p>
          <p className="text-xs text-slate">By submitting, you acknowledge this is a request—not a confirmed appointment.</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {step > 0 && <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded-full border border-brand/20 px-5 py-2 text-sm font-semibold">Back</button>}
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-white">Next</button>
        ) : (
          <button type="submit" disabled={submitting} className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-white disabled:opacity-60">{submitting ? "Submitting..." : "Submit Booking Request"}</button>
        )}
      </div>
    </form>
  );
}
