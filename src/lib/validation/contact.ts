import { z } from "zod";
import { contactMethods, propertyTypes, serviceInterests } from "@/data/site";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your full name").max(100),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number").max(20),
  preferredContact: z.enum(contactMethods),
  serviceInterest: z.enum(serviceInterests),
  propertyType: z.enum(propertyTypes),
  city: z.string().min(2, "Enter your city").max(80),
  message: z.string().min(10, "Please provide a few details").max(5000),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required" }) }),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const pricingQuoteSchema = contactFormSchema.pick({
  name: true,
  email: true,
  phone: true,
  serviceInterest: true,
  city: true,
  message: true,
  consent: true,
  website: true,
}).extend({
  message: z.string().min(5).max(2000),
});

export type PricingQuoteValues = z.infer<typeof pricingQuoteSchema>;
