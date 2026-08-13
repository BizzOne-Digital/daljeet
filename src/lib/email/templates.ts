import { escapeHtml } from "@/lib/email/transporter";
import type { BookingFormValues } from "@/lib/validation/booking";
import type { ContactFormValues } from "@/lib/validation/contact";

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#071526;vertical-align:top;width:180px;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#526273;">${escapeHtml(value)}</td></tr>`;
}

export function buildContactEmail(data: ContactFormValues) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;">
      <h2 style="color:#0077E6;">New Contact Inquiry</h2>
      <table style="width:100%;border-collapse:collapse;">${[
        row("Name", data.name),
        row("Email", data.email),
        row("Phone", data.phone || "Not provided"),
        row("Preferred contact", data.preferredContact),
        row("Service interest", data.serviceInterest),
        row("Property type", data.propertyType),
        row("City", data.city),
        row("Message", data.message),
      ].join("")}</table>
    </div>`;

  const text = [
    "New Contact Inquiry",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Preferred contact: ${data.preferredContact}`,
    `Service interest: ${data.serviceInterest}`,
    `Property type: ${data.propertyType}`,
    `City: ${data.city}`,
    "",
    data.message,
  ].join("\n");

  return { html, text, subject: `Contact Inquiry — ${data.serviceInterest}` };
}

export function buildBookingBusinessEmail(data: BookingFormValues, reference: string) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:720px;">
      <h2 style="color:#0077E6;">New Booking Request</h2>
      <p style="color:#526273;"><strong>Reference:</strong> ${escapeHtml(reference)}</p>
      <table style="width:100%;border-collapse:collapse;">${[
        row("Service", data.serviceType),
        row("Property scope", data.propertyScope),
        row("Property type", data.propertyType),
        row("Rooms/items", data.roomsOrItems),
        row("Approximate area", data.approximateArea || "Not provided"),
        row("Stain/odour notes", data.stainNotes || "None noted"),
        row("City", data.city),
        row("Address", data.address),
        row("Parking/access", data.accessNotes || "Not provided"),
        row("Preferred date", data.preferredDate),
        row("Preferred time", data.preferredTime),
        row("Alternate date", data.alternateDate || "Not provided"),
        row("Name", data.name),
        row("Email", data.email),
        row("Phone", data.phone),
        row("Preferred contact", data.preferredContact),
        row("Offer interest", data.offerInterest ? "Yes" : "No"),
        row("Additional message", data.message || "None"),
      ].join("")}</table>
      <p style="color:#526273;margin-top:16px;">This is a booking request—not a confirmed appointment until you reply.</p>
    </div>`;

  const text = [
    `Booking Request ${reference}`,
    `Service: ${data.serviceType}`,
    `Property: ${data.propertyScope} / ${data.propertyType}`,
    `Rooms/items: ${data.roomsOrItems}`,
    `City: ${data.city}`,
    `Address: ${data.address}`,
    `Preferred: ${data.preferredDate} — ${data.preferredTime}`,
    `Contact: ${data.name} | ${data.email} | ${data.phone}`,
    data.message || "",
  ].join("\n");

  return { html, text, subject: `Booking Request ${reference} — ${data.serviceType}` };
}

export function buildBookingCustomerEmail(data: BookingFormValues, reference: string) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;">
      <h2 style="color:#0077E6;">We Received Your Booking Request</h2>
      <p>Hi ${escapeHtml(data.name)},</p>
      <p>Thank you for contacting Let's Get Carpet Clean. Your booking request has been received and is <strong>not yet confirmed</strong>.</p>
      <p><strong>Reference:</strong> ${escapeHtml(reference)}</p>
      <p><strong>Requested service:</strong> ${escapeHtml(data.serviceType)}</p>
      <p><strong>Preferred date/time:</strong> ${escapeHtml(data.preferredDate)} — ${escapeHtml(data.preferredTime)}</p>
      <p>Our team will review availability and contact you at ${escapeHtml(data.email)} or ${escapeHtml(data.phone)} to confirm details.</p>
      <p style="color:#526273;">If you need immediate assistance, call 647-298-3190.</p>
    </div>`;

  const text = [
    `Hi ${data.name},`,
    "",
    "Thank you for your booking request with Let's Get Carpet Clean.",
    `Reference: ${reference}`,
    "Your request is NOT confirmed until we reply.",
    "",
    `Service: ${data.serviceType}`,
    `Preferred: ${data.preferredDate} — ${data.preferredTime}`,
    "",
    "We will contact you shortly.",
  ].join("\n");

  return {
    html,
    text,
    subject: `Booking Request Received — ${reference}`,
  };
}
