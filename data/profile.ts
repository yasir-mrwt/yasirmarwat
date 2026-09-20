import { z } from "zod";

const profileSchema = z.object({
  name: z.string().nullable(),
  role: z.string(),
  experience: z.string(),
  location: z.string().nullable(),
  timezone: z.string(),
  email: z.email().nullable(),
  github: z.url().nullable(),
  linkedin: z.url().nullable(),
  availability: z.string(),
  bio: z.string(),
  education: z.string().nullable(),
});

export const profile = profileSchema.parse({
  name: null,
  role: "Backend-leaning full-stack engineer",
  experience: "6–8 months of professional experience",
  location: null,
  timezone: "Asia/Karachi (UTC+5)",
  email: null,
  github: null,
  linkedin: null,
  availability: "TODO: add current availability",
  bio: "I work across interfaces, APIs, data, testing, and deployment, with a particular interest in the behavior of backend systems beyond the happy path.",
  education: null,
});

export type Profile = z.infer<typeof profileSchema>;
