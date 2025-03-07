"use server";

import { formSchema } from "./schema";
import { z } from "zod";

export async function sendContactEmail(formData: z.infer<typeof formSchema>) {
  try {
    const { email, message, interestedIn, phone, fullName } =
      formSchema.parse(formData);

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          NAME: fullName,
          INTEREST: interestedIn,
          MESSAGE: message,
          PHONE: phone,
        },
        listIds: [parseInt(process.env.BREVO_LIST_ID || "0", 10)],
        updateEnabled: true,
      }),
    });

    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    return { success: true, message: "Request sent successfully!" };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
