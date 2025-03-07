import { z } from "zod";

export const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  interestedIn: z.string().min(1, { message: "Please select an option" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});
