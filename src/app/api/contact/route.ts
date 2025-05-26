// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Firebase has been removed; replace with your own DB logic if needed.

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const { firstName, lastName, email, shopifyUrl, message, subject, phone } =
      body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      console.error("Missing required fields", {
        firstName,
        lastName,
        email,
        message,
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Determine email subject
    const emailSubject = subject
      ? `New Contact: ${subject}`
      : "New Contact Submission";

    // Send email
    try {
      await resend.emails.send({
        from: "Shopify Support Pro <support@shopifysupportpro.com>",
        to: "carlliboon12@gmail.com",
        subject: emailSubject,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2 style="color: #10b981;">${emailSubject}</h2>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
              ${shopifyUrl ? `<p><strong>Store:</strong> ${shopifyUrl}</p>` : ""}
              ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
              <p><strong>Message:</strong><br/>${message}</p>
            </div>
          `,
      });
    } catch (emailErr) {
      console.error("Email sending failed:", emailErr);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    // TODO: Persist contact data to MySQL (phpMyAdmin) here if required.

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unhandled server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
