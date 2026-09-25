import { z } from "zod";
import { SITE_URL } from "@/data/site";

const profileSchema = z.object({
  fullName: z.string(),
  alternateName: z.string(),
  alternateNames: z.array(z.string()),
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
  resumeUrl: z.string(),
  socials: z.object({
    website: z.url(),
    linkedin: z.url(),
    github: z.url(),
  }),
});

export const profileData = profileSchema.parse({
  fullName: "Yasir Marwat",
  alternateName: "Muhammad Yasir",
  alternateNames: ["Muhammad Yasir", "Yasir Muhammad", "Muhammad Yasir Marwat"],
  title: "Full-Stack Engineer",
  specialization: "Backend-Leaning",
  displayTitle: "Full-Stack Engineer · Backend-Leaning",
  location: "Peshawar, Pakistan",
  countryCode: "PK",
  locality: "Peshawar",
  timezone: "PKT (UTC+5)",
  experienceSummary:
    "Practical junior development experience across remote and on-site roles",
  availability: "Open to the right opportunity",
  primaryNiche:
    "I build web products end to end, with most of my technical curiosity pulling toward backend architecture, APIs, data, reliability, and performance.",
  aiSummary:
    "Yasir Marwat (Muhammad Yasir) is a backend-leaning full-stack engineer based in Peshawar, Pakistan. He specializes in TypeScript, Node.js, Express, PostgreSQL, Redis, BullMQ, and Next.js, building scalable APIs, distributed workflows, and modern web products like InflowAPM and AutoCore.",
  email: null,
  education: null,
  resumeUrl: "/muhammad_yasir.pdf",
  socials: {
    website: SITE_URL,
    linkedin: "https://www.linkedin.com/in/muhammad-yasir-50b240315/",
    github: "https://github.com/yasir-mrwt",
  },
});

export type Profile = z.infer<typeof profileSchema>;
