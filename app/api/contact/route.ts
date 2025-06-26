import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const msg = {
      to: "alimagdye1@gmail.com",
      from: "alimagdye1@gmail.com", // verified sender
      replyTo: email,
      subject: `${subject}`,
      text: `\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <h2 style="color: #7e22ce;">You have a new message from your portfolio</h2>
      <p><strong>Name:</strong> <span style="color: #9f7aea;">${name}</span></p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #9f7aea; text-decoration: none;">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; background: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
    </div>
  `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error: any) {
    console.error(
      "SendGrid error:",
      error.response?.body || error.message || error
    );
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
