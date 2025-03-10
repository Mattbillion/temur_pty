import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: `"no-reply ${process.env.RESEND_COMPANY_MAIL}>"`,
      to: "muugiiyep0722@gmail.com",
      subject: "Test",
      react: EmailTemplate({ firstName: "Testman" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
