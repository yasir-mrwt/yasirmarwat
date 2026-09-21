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
    summary:
      "Responsive product interfaces, server-rendered experiences, and accessible interaction across real applications.",
    evidence: ["InflowAPM", "Socially AI", "AutoCore", "UniBro"],
    items: [
      ["React", "Product interfaces and application state"],
      ["Next.js", "Server-rendered delivery and App Router workflows"],
      ["TypeScript", "Contracts across UI, SDK, data, and APIs"],
      ["JavaScript", "Browser behavior and full-stack application logic"],
      ["Vite", "Fast React application tooling"],
      ["Tailwind CSS", "Responsive systems and reusable design tokens"],
      ["Responsive UX", "Purpose-built desktop and mobile composition"],
      ["Accessibility", "Semantic, keyboard-friendly interaction"],
    ],
  },
  {
    title: "Backend & APIs",
    summary:
      "Protected HTTP and real-time boundaries with explicit validation, identity, middleware, and operational limits.",
    evidence: ["InflowAPM", "Socially AI", "AutoCore", "UniBro"],
    items: [
      ["Node.js", "Server runtimes, SDKs, and background workers"],
      ["Express", "REST APIs, middleware, and structured errors"],
      ["REST APIs", "Clear resource and workflow contracts"],
      ["JWT", "Protected sessions and role-aware access"],
      ["Google OAuth", "External identity flows"],
      ["Zod", "Input and configuration contracts"],
      ["Rate limiting", "Bounded access for sensitive routes"],
      ["Socket.IO", "Authenticated real-time community behavior"],
    ],
  },
  {
    title: "Data & Async",
    summary:
      "Data persistence, caching, asynchronous processing, and application state across shipped product workflows.",
    evidence: ["InflowAPM", "AutoCore", "UniBro", "Socially AI"],
    items: [
      ["PostgreSQL", "Relational data and query-aware access"],
      ["MongoDB", "Document modeling and application persistence"],
      ["Mongoose", "Schemas and access patterns for MongoDB products"],
      ["Prisma", "Typed PostgreSQL commerce workflows"],
      ["Redis", "Caching with deliberate TTL and invalidation choices"],
      ["BullMQ", "Retryable telemetry and email background work"],
      ["Caching", "Reducing repeated API-key and request work"],
      ["Supabase", "Hosted PostgreSQL and file-storage integration"],
    ],
  },
  {
    title: "Quality",
    summary:
      "Automated checks and systematic debugging used to validate behavior before deployment.",
    evidence: ["InflowAPM", "AutoCore", "UniBro", "Portfolio"],
    items: [
      ["Supertest", "API and integration behavior"],
      ["Integration testing", "Cross-boundary workflow confidence"],
      ["Manual QA", "Responsive and end-to-end product review"],
      ["Debugging", "Reproduction, isolation, and evidence-led fixes"],
      ["Type checking", "Earlier feedback across contracts"],
      ["Linting", "Consistent automated source checks"],
    ],
  },
  {
    title: "Infrastructure",
    summary:
      "Repeatable local environments and automated release checks around application code.",
    evidence: ["InflowAPM", "AutoCore", "UniBro"],
    items: [
      ["Docker", "Consistent build and runtime environments"],
      ["Docker Compose", "Multi-service local development"],
      ["GitHub Actions", "Automated lint, test, build, and audit jobs"],
      ["CI/CD", "Checks integrated into delivery workflows"],
      [
        "Environment config",
        "Server/client boundaries and deployment diagnosis",
      ],
    ],
  },
  {
    title: "Services / Deployment",
    summary:
      "Product deployment and third-party services connected with explicit configuration boundaries.",
    evidence: ["Portfolio", "Socially AI", "AutoCore", "UniBro", "CodeLoop"],
    items: [
      ["Vercel", "Next.js and full-stack web delivery"],
      ["Netlify", "Frontend and serverless application deployment"],
      ["Hostinger", "Production agency-site hosting"],
      ["Stripe", "Checkout and billing integrations"],
      ["Email delivery", "Brevo, Resend, and transactional SMTP workflows"],
    ],
  },
] as const;
