export type ProjectLink = {
  live?: string;
  source?: string;
};

export type Project = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  contribution?: string;
  role?: string;
  technologies: string[];
  highlights: string[];
  technicalDecision?: {
    challenge: string;
    approach: string;
    tradeoff: string;
  };
  qualityNote?: string;
  links: ProjectLink;
  isPlaceholder: boolean;
};

// The single internal placeholder is intentionally not represented as shipped work.
export const projects: readonly Project[] = [
  {
    slug: "case-study-template",
    title: "Case study template",
    label: "INTERNAL CONTENT TEMPLATE · NOT A SHIPPED PROJECT",
    summary:
      "A reserved project format for presenting verified work clearly once project details and media are supplied.",
    technologies: [],
    highlights: [
      "Project context and personal contribution",
      "Two or three implementation highlights",
      "Testing, deployment, and verified project links",
    ],
    links: {},
    isPlaceholder: true,
  },
] as const;
