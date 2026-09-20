import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter at least 2 characters.")
    .max(80, "Keep your name under 80 characters."),
  email: z.email("Enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(20, "Please include at least 20 characters.")
    .max(2000, "Keep your message under 2,000 characters."),
  website: z.string().max(0, "Submission rejected.").optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
