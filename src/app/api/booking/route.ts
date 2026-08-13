import { NextRequest, NextResponse } from "next/server";
import { bookingFormSchema } from "@/lib/validation/booking";
import { getSmtpConfig, generateReference } from "@/lib/email/transporter";
import { buildBookingBusinessEmail, buildBookingCustomerEmail } from "@/lib/email/templates";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    if (!checkRateLimit(`booking:${ip}`, 3)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = bookingFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors[0]?.message || "Invalid booking data" }, { status: 400 });
    }
    if (parsed.data.website) return NextResponse.json({ success: true, reference: generateReference("LGCC") });

    const reference = generateReference("LGCC");
    const { transport, from, to } = getSmtpConfig();
    const businessEmail = buildBookingBusinessEmail(parsed.data, reference);
    const customerEmail = buildBookingCustomerEmail(parsed.data, reference);

    await transport.sendMail({
      from,
      to,
      replyTo: parsed.data.email,
      subject: businessEmail.subject,
      html: businessEmail.html,
      text: businessEmail.text,
    });

    await transport.sendMail({
      from,
      to: parsed.data.email,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    });

    return NextResponse.json({
      success: true,
      reference,
      message: "Your booking request was sent. This is not a confirmed appointment until we contact you.",
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to submit your booking request right now." },
      { status: 500 },
    );
  }
}
