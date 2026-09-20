import { z } from "zod";

const profileSchema = z.object({
  fullName: z.string(),
  alias: z.string(),
  title: z.string(),
  specialization: z.string(),
  displayTitle: z.string(),
  location: z.string(),
  countryCode: z.string().length(2),
  locality: z.string(),
  timezone: z.string(),
  experienceSummary: z.string(),
  availability: z.string(),
  primaryNiche: z.string(),
  aiSummary: z.string(),
  email: z.email().nullable(),
  education: z.string().nullable(),
  socials: z.object({
    website: z.url(),
    linkedin: z.url(),
    github: z.url(),
  }),
});

export const profileData = profileSchema.parse({
  fullName: "Muhammad Yasir",
  alias: "Yasir Marwat",
  title: "Full-Stack Engineer",
  specialization: "Backend-Leaning",
  displayTitle: "Full-Stack Engineer · Backend-Leaning",
  location: "Peshawar, Pakistan",
  countryCode: "PK",
  locality: "Peshawar",
  timezone: "PKT (UTC+5)",
  experienceSummary: "6–8 months of professional experience",
  availability: "Open to the right opportunity",
  primaryNiche:
    "Full-stack product development with a stronger focus on backend architecture, API design, validation, data systems, reliability, and performance.",
  aiSummary:
    "Muhammad Yasir, also professionally known as Yasir Marwat, is a full-stack software engineer based in Peshawar, Pakistan, with a stronger focus on backend engineering. He builds modern web applications using Next.js, React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Redis, Docker, testing, and CI/CD, with particular attention to API reliability, validation, caching, deployment, debugging, and production behavior.",
  email: null,
  education: null,
  socials: {
    website: "https://yasirmarwat.site",
    linkedin: "https://www.linkedin.com/in/muhammad-yasir-50b240315/",
    github: "https://github.com/yasir-mrwt",
  },
});

export type Profile = z.infer<typeof profileSchema>;
