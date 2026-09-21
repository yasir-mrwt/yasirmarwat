export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  arrangement: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: readonly Experience[] = [
  {
    company: "Arch Technologies",
    role: "Web Developer / Junior Developer Intern",
    period: "November 2025 — January 2026",
    location: "Islamabad, Pakistan",
    arrangement: "Remote",
    type: "Internship / Junior Development Role",
    responsibilities: [
      "Contributed across multiple web-development tasks and product areas within a junior development environment.",
      "Supported feature implementation, responsive interface work, and debugging across frontend and backend behavior.",
      "Worked with API-connected application logic, testing, issue resolution, and Git-based development workflows.",
    ],
    technologies: [],
  },
  {
    company: "Testsolz",
    role: "Junior Developer Intern",
    period: "January 2026 — July 2026",
    location: "Peshawar, Pakistan",
    arrangement: "On-site · Paid",
    type: "Internship / Junior Development Role",
    responsibilities: [
      "Contributed to multiple web applications and product areas across frontend and backend implementation tasks.",
      "Helped build, maintain, debug, and improve API-connected and data-driven application flows.",
      "Supported responsive behavior, testing, deployment and environment issues through Git-based workflows.",
    ],
    technologies: [],
  },
];
