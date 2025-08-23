import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Validate required environment variables
if (!process.env.SENDGRID_API_KEY || !process.env.FROM_EMAIL) {
  throw new Error("Missing SENDGRID_API_KEY or FROM_EMAIL in environment variables.");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  try {
    const { subject, html, recipients } = await request.json();

    // Validate required fields
    if (!subject || !html || !recipients || (Array.isArray(recipients) && recipients.length === 0)) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emails = Array.isArray(recipients) ? recipients : [recipients];
    if (!emails.every(email => emailRegex.test(email))) {
      return NextResponse.json({ error: "Invalid email address(es)." }, { status: 400 });
    }

    const msg = {
      to: emails,
      from: process.env.FROM_EMAIL,
      subject,
      html,
    };

    await sgMail.sendMultiple(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
