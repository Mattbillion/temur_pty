import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  fullName: string;
  email: string;
  interestedIn: string;
  message: string;
  phone: string;
}

export async function POST(req: NextRequest) {
  try {
    // Validate request body
    const body: ContactFormData = await req.json();
    const { fullName, email, interestedIn, message, phone } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate required environment variables
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const receiverEmail = process.env.BREVO_RECEIVER_EMAIL;

    if (!apiKey || !senderEmail || !receiverEmail) {
      console.error("Missing required environment variables.");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration. Contact support." },
        { status: 500 },
      );
    }

    // Send email using Brevo API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Your Website", email: senderEmail },
        to: [{ email: receiverEmail, name: "Admin" }],
        subject: `New Contact Form Submission from ${fullName}`,
        htmlContent: `
          <p><strong>Full name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Interested in:</strong> ${interestedIn}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get API error message
      console.error(`Brevo API Error: ${errorText}`);
      throw new Error(`Brevo API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json<{ success: boolean; data: unknown }>(
      { success: true, data },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
