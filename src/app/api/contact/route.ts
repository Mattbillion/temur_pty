import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, interestedIn, message, phone } = await req.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: { name: "Your Website", email: process.env.BREVO_SENDER_EMAIL },
        to: [{ email: process.env.BREVO_RECEIVER_EMAIL, name: "Admin" }],
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

    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
