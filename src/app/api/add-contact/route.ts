import { NextResponse } from "next/server";
import { z } from "zod";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_PARAM = process.env.RESEND_AUDIENCE_PARAM;

const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  first_name: z.string().min(2, "First name is required"),
  last_name: z.string().min(2, "First name is required"),
  unsubscribed: z.boolean().default(false),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const response = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_PARAM}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          error: errorData,
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: error.errors,
        },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
