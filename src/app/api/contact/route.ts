// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Firebase has been removed; replace with your own DB logic if needed.

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const form = await req.json();

    const { error } = await resend.emails.send({
      from: "Shopify Support Pro <onboarding@resend.dev>",
      to: ["carlliboon12@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${form.firstName} ${form.lastName}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Phone:</strong> ${form.phone || ""}</p>
        <p><strong>Skills:</strong> ${Array.isArray(form.skills) ? form.skills.join(", ") : ""}</p>
        <p><strong>Shopify URL:</strong> ${form.shopifyUrl || ""}</p>
        
        <p><strong>Message:</strong> ${form.message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { message: "Failed to send email.", error },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Message sent!" });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Failed to send message.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
