export type ArchitectureNode = {
  label: string;
  detail: string;
};

export type ProjectDecision = {
  title: string;
  problem: string;
  decision: string;
  why: string;
  tradeoffs: string[];
  failureConsideration: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  purpose: string;
  role: string;
  architecture: ArchitectureNode[];
  decisions: ProjectDecision[];
  reliability: string;
  scalability: string;
  testing: string[];
  deployment: string[];
  stack: string[];
  code: { language: string; why: string; source: string };
  links: { live?: string; source?: string };
};

// Intentionally one project. Replace this object with factual project data later.
export const projects: readonly Project[] = [
  {
    slug: "demo-system",
    title: "Demo System",
    eyebrow: "PLACEHOLDER PROJECT / SYSTEM DESIGN DEMO",
    tagline:
      "A transparent placeholder used to validate this portfolio system.",
    purpose:
      "Demonstrate how a real project will explain architecture, technical decisions, failure behavior, testing, and deployment without pretending this demo was shipped.",
    role: "TODO: replace with the real project role",
    architecture: [
      {
        label: "Client",
        detail: "Sends a typed request and renders explicit states.",
      },
      { label: "API", detail: "Owns the HTTP contract and response shape." },
      { label: "Validation", detail: "Rejects invalid input at the boundary." },
      {
        label: "Cache",
        detail: "Serves safe repeated reads; bypasses on failure.",
      },
      { label: "Database", detail: "Remains the source of truth." },
      {
        label: "Background work",
        detail: "Moves non-critical work away from the request path.",
      },
      {
        label: "Deployment",
        detail: "Runs checks before a repeatable release.",
      },
    ],
    decisions: [
      {
        title: "Introduce a cache for repeated expensive reads",
        problem:
          "TODO: replace with a measured bottleneck from the real project.",
        decision:
          "Cache eligible reads behind a small adapter with an explicit TTL.",
        why: "The adapter keeps caching policy visible and the main data path testable.",
        tradeoffs: [
          "Cached data can become stale.",
          "Invalidation adds operational complexity.",
          "The database path must remain healthy and observable.",
        ],
        failureConsideration:
          "If the cache is unavailable, log the fault and fall back to the source of truth when the operation is safe.",
      },
    ],
    reliability:
      "Validate early, use structured errors, set dependency timeouts, and keep optional infrastructure from taking down the critical request path.",
    scalability:
      "Start stateless, measure the real constraint, then add shared cache or asynchronous work only when evidence supports it.",
    testing: [
      "Contract validation",
      "API integration path",
      "Cache miss and outage",
      "Deployment smoke check",
    ],
    deployment: [
      "Build",
      "Type check",
      "Test",
      "Container",
      "Deploy",
      "Observe",
    ],
    stack: ["TypeScript", "Node.js", "Redis", "Docker"],
    code: {
      language: "ts",
      why: "Keep a cache outage from breaking a safe read while preserving visibility of the failure.",
      source: `async function readThrough<T>(key: string, load: () => Promise<T>) {\n  try {\n    const hit = await cache.get(key);\n    if (hit) return JSON.parse(hit) as T;\n  } catch (error) {\n    logger.warn({ error, key }, "cache unavailable");\n  }\n\n  return load();\n}`,
    },
    links: {},
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
