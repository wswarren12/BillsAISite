import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { contactFormSchema } from "@/lib/validators";
import { ContactNotificationHtml } from "@/emails/ContactNotification";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0];
      return NextResponse.json(
        { error: firstError?.message || "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message, honeypot } = result.data;

    // Honeypot check
    if (honeypot) {
      // Silently accept to avoid tipping off bots
      return NextResponse.json({ success: true });
    }

    const contactEmail = process.env.CONTACT_EMAIL || "bill@billsai.club";
    const fromAddress =
      process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    await getResend().emails.send({
      from: fromAddress,
      to: contactEmail,
      replyTo: email,
      subject: `New message from ${name} via billsai.club`,
      html: ContactNotificationHtml({ name, email, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
