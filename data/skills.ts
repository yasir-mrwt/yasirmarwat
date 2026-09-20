export const engineeringFocus = [
  {
    title: "Full-stack product features",
    body: "Building across interface, API, data, validation, testing, and deployment so a feature works as one coherent product.",
  },
  {
    title: "Backend and APIs",
    body: "Developing Node.js and Express APIs with authentication, validation, middleware, structured errors, and rate limiting.",
  },
  {
    title: "Data and performance",
    body: "Working with PostgreSQL, MongoDB, Redis caching, query-aware data access, and asynchronous processing.",
  },
  {
    title: "Production and quality",
    body: "Using API tests, Docker, CI/CD, deployment checks, responsive UX, and systematic debugging to ship with confidence.",
  },
] as const;

export const stackGroups = [
  {
    title: "Interface",
    summary: "Accessible, responsive product interfaces.",
    items: [
      [
        "React / Next.js",
        "Component-driven interfaces and server-rendered delivery",
      ],
      ["TypeScript", "Contracts across UI, data, and APIs"],
      ["Tailwind CSS", "Responsive systems and consistent design tokens"],
      ["Accessibility", "Semantic, keyboard-friendly interaction"],
    ],
  },
  {
    title: "Backend & APIs",
    summary: "Clear HTTP contracts and protected boundaries.",
    items: [
      ["Node.js / Express", "REST APIs, middleware, and structured errors"],
      ["Authentication", "Protected routes and identity-aware flows"],
      ["Validation", "Explicit input and configuration contracts"],
      ["Rate limiting", "Bounded access for sensitive endpoints"],
    ],
  },
  {
    title: "Data & Performance",
    summary: "Practical persistence and avoidable-work reduction.",
    items: [
      ["PostgreSQL", "Relational data and query-aware access"],
      ["MongoDB", "Document modeling and application persistence"],
      ["Redis", "Caching with deliberate TTL and invalidation choices"],
      ["Queues / async work", "Moving suitable work outside request latency"],
    ],
  },
  {
    title: "Quality",
    summary: "Confidence in behavior before release.",
    items: [
      ["Supertest", "API and integration behavior"],
      ["Type safety", "Earlier feedback across boundaries"],
      ["Debugging", "Reproduction, isolation, and evidence"],
      ["Linting", "Consistent automated checks"],
    ],
  },
  {
    title: "Infrastructure",
    summary: "Repeatable builds and predictable environments.",
    items: [
      ["Docker", "Consistent build and runtime environments"],
      ["CI/CD", "Automated checks before release"],
      ["Environments", "Configuration and deployment diagnosis"],
    ],
  },
  {
    title: "Deployment",
    summary: "Getting web products into real environments.",
    items: [
      ["Vercel", "Next.js delivery and preview environments"],
      ["Netlify", "Frontend hosting and deployment workflows"],
      ["Render", "Application and service deployment"],
    ],
  },
] as const;
