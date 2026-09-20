export const responsibilities = [
  {
    name: "Backend architecture",
    tools: "Node.js · Express · service boundaries",
  },
  { name: "API reliability", tools: "REST · structured errors · timeouts" },
  { name: "Boundary validation", tools: "Zod · contracts · configuration" },
  { name: "Caching", tools: "Redis · TTLs · invalidation thinking" },
  { name: "Testing", tools: "Supertest · integration paths · failure states" },
  {
    name: "Production delivery",
    tools: "Docker · CI/CD · deployment debugging",
  },
  { name: "Responsive product UI", tools: "React · Next.js · accessibility" },
  { name: "Performance", tools: "measurement · bundle care · request cost" },
] as const;

export const stackGroups = [
  {
    title: "Interface",
    items: [
      ["React / Next.js", "Product interfaces and server-rendered delivery"],
      ["TypeScript", "Contracts across UI, data, and APIs"],
      ["Tailwind CSS", "Responsive systems with consistent tokens"],
      ["Motion", "State and sequence—not decoration"],
    ],
  },
  {
    title: "Backend",
    items: [
      ["Node.js / Express", "HTTP APIs, middleware, and error handling"],
      ["FastAPI", "Typed Python services where appropriate"],
      ["REST APIs", "Clear resources, status codes, and contracts"],
      ["Auth / validation", "Protected boundaries and explicit inputs"],
    ],
  },
  {
    title: "Data / performance",
    items: [
      ["MongoDB", "Data modeling and query-aware persistence"],
      ["Redis", "Deliberate caching and shared ephemeral state"],
      ["Caching", "TTLs, fallbacks, and invalidation tradeoffs"],
    ],
  },
  {
    title: "Quality",
    items: [
      ["Supertest", "API integration behavior"],
      ["Type safety", "Earlier feedback across boundaries"],
      ["Debugging", "Reproduction, isolation, and evidence"],
      ["CI checks", "Repeatable lint, type, and test gates"],
    ],
  },
  {
    title: "Infrastructure",
    items: [
      ["Docker", "Consistent build and runtime environments"],
      ["CI/CD", "Automated confidence before deployment"],
      ["Vercel", "Web delivery and preview environments"],
      ["Environments", "Explicit configuration and deployment diagnosis"],
    ],
  },
] as const;
