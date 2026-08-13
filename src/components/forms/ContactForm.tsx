"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation/contact";
import { contactMethods, propertyTypes, serviceInterests } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass = "w-full rounded-xl border border-brand/15 bg-white px-4 py-3 text-sm outline-none focus:border-brand/40";

export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      preferredContact: "Either",
      serviceInterest: (defaultInterest as ContactFormValues["serviceInterest"]) || serviceInterests[0],
      propertyType: propertyTypes[0],
      consent: true,
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      toast.success("Message sent. We'll get back to you soon.");
      reset();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Unable to send message");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Full name</label>
          <input className={fieldClass} {...register("name")} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input type="email" className={fieldClass} {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Phone</label>
          <input className={fieldClass} {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Preferred contact</label>
          <select className={fieldClass} {...register("preferredContact")}>{contactMethods.map((m) => <option key={m}>{m}</option>)}</select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Service interest</label>
          <select className={fieldClass} {...register("serviceInterest")}>{serviceInterests.map((s) => <option key={s}>{s}</option>)}</select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Property type</label>
          <select className={fieldClass} {...register("propertyType")}>{propertyTypes.map((p) => <option key={p}>{p}</option>)}</select>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">City</label>
        <input className={fieldClass} {...register("city")} />
        {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Message</label>
        <textarea rows={5} className={cn(fieldClass, "resize-y")} {...register("message")} />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <label className="flex items-start gap-2 text-sm text-slate">
        <input type="checkbox" className="mt-1" {...register("consent")} />
        I agree to be contacted about my inquiry.
      </label>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}
      <button type="submit" disabled={submitting} className="rounded-full bg-brand px-8 py-3 text-sm font-bold text-white disabled:opacity-60">
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
