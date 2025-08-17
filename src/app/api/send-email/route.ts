import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { subject, html, recipients } = await request.json();

    const msg = {
      to: recipients, // recipients can be a single email or an array of emails
      from: process.env.FROM_EMAIL!,
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
