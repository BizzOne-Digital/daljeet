import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { getSmtpConfig } from "@/lib/email/transporter";
import { buildContactEmail } from "@/lib/email/templates";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    if (!checkRateLimit(`contact:${ip}`)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors[0]?.message || "Invalid form data" }, { status: 400 });
    }
    if (parsed.data.website) return NextResponse.json({ success: true });

    const { transport, from, to } = getSmtpConfig();
    const email = buildContactEmail(parsed.data);

    await transport.sendMail({
      from,
      to,
      replyTo: parsed.data.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
