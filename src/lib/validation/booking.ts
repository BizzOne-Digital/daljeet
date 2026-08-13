import { z } from "zod";
import { bookingTimeWindows, contactMethods, propertyTypes, serviceInterests } from "@/data/site";

export const bookingFormSchema = z.object({
  serviceType: z.enum(serviceInterests),
  propertyScope: z.enum(["Residential", "Commercial"]),
  propertyType: z.enum(propertyTypes),
  roomsOrItems: z.string().min(1, "Describe rooms or items").max(200),
  approximateArea: z.string().max(120).optional().or(z.literal("")),
  stainNotes: z.string().max(1000).optional().or(z.literal("")),
  city: z.string().min(2, "Enter your city").max(80),
  address: z.string().min(5, "Enter your address").max(200),
  accessNotes: z.string().max(500).optional().or(z.literal("")),
  preferredDate: z.string().min(1, "Select a preferred date"),
  preferredTime: z.enum(bookingTimeWindows),
  alternateDate: z.string().optional().or(z.literal("")),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  preferredContact: z.enum(contactMethods),
  message: z.string().max(3000).optional().or(z.literal("")),
  offerInterest: z.boolean(),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required" }) }),
  website: z.string().max(0).optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export const bookingStepSchemas = [
  bookingFormSchema.pick({ serviceType: true, propertyScope: true, propertyType: true, roomsOrItems: true, approximateArea: true, stainNotes: true }),
  bookingFormSchema.pick({ city: true, address: true, accessNotes: true }),
  bookingFormSchema.pick({ preferredDate: true, preferredTime: true, alternateDate: true }),
  bookingFormSchema.pick({ name: true, email: true, phone: true, preferredContact: true, message: true, offerInterest: true, consent: true }),
];
