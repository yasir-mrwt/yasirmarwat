export type ProjectLink = {
  live: string;
  source?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;
  status?: string;
  hosting: string;
  summary: string;
  contribution?: string;
  technologies: readonly string[];
  highlights: readonly string[];
  qualityNote?: string;
  links: ProjectLink;
  images: {
    web: string;
    mobile: string;
    webAlt: string;
    mobileAlt: string;
  };
  variant: "lead" | "lead-reverse" | "support" | "support-reverse" | "compact";
};

export const projects: readonly Project[] = [
  {
    slug: "inflowapm",
    title: "InflowAPM",
    category: "Application Performance Monitoring / Developer Tooling",
    type: "Open-source project",
    hosting: "Vercel",
    summary:
      "An application performance monitoring platform that turns project-scoped website and API telemetry into useful request, error, latency, throughput, and route analytics.",
    contribution:
      "Built the telemetry API, asynchronous processing path, analytics layer, Node/Express SDK, authentication and project workflows, and the Next.js product experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Redis",
      "BullMQ",
    ],
    highlights: [
      "Project-scoped API keys with Redis-backed lookup caching and rate limits",
      "Bounded telemetry batches processed asynchronously through BullMQ",
      "PostgreSQL analytics for requests, errors, latency, throughput, and routes",
      "Typed Node/Express SDK with retries, backoff, batching, and fail-open behavior",
    ],
    qualityNote:
      "Backend, frontend, and SDK workflows include automated tests and CI checks; Docker Compose reproduces the local service stack.",
    links: {
      live: "https://inflowapm.vercel.app/",
      source: "https://github.com/yasir-mrwt/inflowAPM",
    },
    images: {
      web: "/projects/inflowapm/inflowapm-web.webp",
      mobile: "/projects/inflowapm/inflowapm-mobile.webp",
      webAlt:
        "InflowAPM desktop landing page showing an API monitoring dashboard preview",
      mobileAlt:
        "InflowAPM mobile landing page introducing project-scoped API telemetry",
    },
    variant: "lead",
  },
  {
    slug: "socially-ai",
    title: "Socially AI",
    category: "LinkedIn Automation / AI Content Platform",
    type: "Professional product",
    status: "Beta testing",
    hosting: "Netlify",
    summary:
      "A LinkedIn workflow platform for creating posts in a consistent voice, automating publishing, and bringing content performance and comment sentiment into one product.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    highlights: [
      "Content creation informed by previous writing and tone context",
      "LinkedIn posting workflows and centralized activity management",
      "Performance analytics with comment-sentiment insight",
      "User and admin experiences with Stripe payment and billing integration",
    ],
    links: { live: "https://socially-aii.netlify.app/" },
    images: {
      web: "/projects/socially-ai/socially-ai-web.webp",
      mobile: "/projects/socially-ai/socially-ai-mobile.webp",
      webAlt:
        "Socially AI desktop landing page with LinkedIn writing and analytics product preview",
      mobileAlt:
        "Socially AI mobile landing page for creating LinkedIn posts in a consistent voice",
    },
    variant: "lead-reverse",
  },
  {
    slug: "autocore",
    title: "AutoCore",
    category: "Automotive E-Commerce",
    type: "Side project",
    hosting: "Netlify",
    summary:
      "A full-stack automotive spare-parts commerce application with customer shopping flows and administrator tools built around a generated demonstration catalog.",
    contribution:
      "Implemented the storefront and API workflows spanning the catalog, customer account, checkout, order lifecycle, and administrator operations.",
    technologies: [
      "React",
      "Vite",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Stripe",
    ],
    highlights: [
      "Catalog, cart, wishlist, reviews, checkout, and customer order tracking",
      "Admin catalog, fulfillment, shipping, and delivery-confirmation workflows",
      "Stripe Checkout in test mode for the complete purchase flow",
      "Transactional email for password reset and order lifecycle messages",
    ],
    qualityNote:
      "Docker Compose supports the local stack, while GitHub Actions checks builds, validation, and backend smoke behavior.",
    links: {
      live: "https://autocorestore.netlify.app/",
      source: "https://github.com/yasir-mrwt/autocore",
    },
    images: {
      web: "/projects/autocore/autocore-web.webp",
      mobile: "/projects/autocore/autocore-mobile.webp",
      webAlt:
        "AutoCore desktop storefront landing page for automotive spare parts",
      mobileAlt:
        "AutoCore mobile storefront landing page with shopping actions and product messaging",
    },
    variant: "support",
  },
  {
    slug: "unibro",
    title: "UniBro",
    category: "Digital Campus / Academic Workspace",
    type: "Academic and community project",
    hosting: "Vercel",
    summary:
      "A digital campus workspace that organizes notes, assignments, past papers, projects, presentations, quizzes, faculty information, and community discussion by department and semester.",
    contribution:
      "Built the student and administrator product flows, moderated resource system, authenticated community experience, and supporting API integrations.",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Supabase Storage",
      "Resend",
    ],
    highlights: [
      "Department and semester onboarding with searchable, filterable resources",
      "Moderated uploads with student submission status and role-protected administration",
      "Authenticated Socket.IO rooms with presence, typing, replies, and reconnect behavior",
      "Google OAuth, email verification, profile security, and faculty discovery",
    ],
    qualityNote:
      "CI runs linting, tests, builds, dependency auditing, and Docker validation across the frontend and backend.",
    links: {
      live: "https://unibro-web.vercel.app/",
      source: "https://github.com/yasir-mrwt/unibro-web",
    },
    images: {
      web: "/projects/unibro/unibro-web.webp",
      mobile: "/projects/unibro/unibro-mobile.webp",
      webAlt:
        "UniBro desktop landing page presenting a department and semester academic workspace",
      mobileAlt:
        "UniBro mobile landing page explaining its department and semester resource system",
    },
    variant: "support-reverse",
  },
  {
    slug: "codeloop",
    title: "CodeLoop",
    category: "Agency Website",
    type: "Agency and professional website",
    hosting: "Hostinger",
    summary:
      "A responsive production website presenting CodeLoop’s product, engineering, design, and quality-assurance services through a polished agency experience.",
    technologies: [],
    highlights: [
      "Responsive service and product presentation",
      "Clear project, methodology, and contact journeys",
      "Production deployment on Hostinger",
    ],
    links: { live: "https://codeloop.uk/" },
    images: {
      web: "/projects/codeloop/codeloop-web.webp",
      mobile: "/projects/codeloop/codeloop-mobile.webp",
      webAlt:
        "CodeLoop desktop agency website with its Design Loop Innovate message",
      mobileAlt:
        "CodeLoop mobile agency website with responsive service calls to action",
    },
    variant: "compact",
  },
] as const;
