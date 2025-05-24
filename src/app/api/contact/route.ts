// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { db } from "../../../lib/firebase";

import { collection, setDoc, doc, serverTimestamp } from "firebase/firestore";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
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

    // Firestore log
    try {
      const contactsRef = collection(db, "contacts");
      const newDocRef = doc(contactsRef);
      const newId = newDocRef.id;

      const contactData: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        createdAt: ReturnType<typeof serverTimestamp>;
        shopifyUrl?: string;
        subject?: string;
        phone?: string;
      } = {
        id: newId,
        firstName,
        lastName,
        email,
        message,
        createdAt: serverTimestamp(),
      };

      // Add optional fields if they exist
      if (shopifyUrl) contactData.shopifyUrl = shopifyUrl;
      if (subject) contactData.subject = subject;
      if (phone) contactData.phone = phone;

      await setDoc(newDocRef, contactData);
    } catch (firestoreErr: unknown) {
      console.error(
        "🔥 Firestore write failed:",
        JSON.stringify(firestoreErr, null, 2)
      );
      return NextResponse.json(
        {
          error: "Database write failed",
          details:
            typeof firestoreErr === "object" &&
            firestoreErr !== null &&
            "message" in firestoreErr
              ? (firestoreErr as { message?: string }).message
              : String(firestoreErr),
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unhandled server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
