import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SystemFlow } from "@/components/architecture/SystemFlow";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { StatusIndicator } from "@/components/ui/StatusIndicator";

const requestFlow = [
  { label: "User", detail: "Intent begins at a human interaction." },
  {
    label: "Interface",
    detail: "The UI communicates state and shapes the request.",
  },
  { label: "API", detail: "A stable contract accepts the request." },
  { label: "Validation", detail: "Invalid data stops at the boundary." },
  { label: "Logic", detail: "Business rules stay explicit and testable." },
  {
    label: "Cache / Data",
    detail: "Fast paths never obscure the source of truth.",
  },
  { label: "Tests", detail: "Critical paths and failures are exercised." },
  { label: "Container", detail: "The runtime becomes reproducible." },
  { label: "CI/CD", detail: "Checks gate a predictable release." },
  {
    label: "Production",
    detail: "Behavior is observed where users experience it.",
  },
] as const;

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Container>
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span>FULL-STACK ENGINEERING / BACKEND-LEANING / 2026</span>
            <StatusIndicator label="OPEN TO THE RIGHT FIT" state="active" />
          </div>
          <h1 id="hero-title">
            Building web products from <em>interface</em> to infrastructure.
          </h1>
          <p className="hero-intro">
            I think about the whole request: responsive React and Next.js
            interfaces, typed APIs, validation, Redis, tests, Docker, CI/CD,
            deployment, and what happens when a dependency fails.
          </p>
          <div className="hero-actions">
            <Button href="#work" variant="primary">
              Explore work <ArrowDown size={16} />
            </Button>
            <Button href="/resume">View résumé</Button>
            <Button href="#contact" variant="quiet">
              Contact <ArrowUpRight size={16} />
            </Button>
            <span
              className="button button--quiet button--disabled"
              aria-disabled="true"
            >
              GitHub · TODO
            </span>
          </div>
        </div>
        <div className="hero-system">
          <div className="panel-heading">
            <span>REQUEST_LIFECYCLE</span>
            <span>INTERACTIVE / 10 NODES</span>
          </div>
          <SystemFlow
            items={requestFlow}
            label="Request lifecycle from user to production"
          />
        </div>
        <div className="hero-foot">
          <span>React / Next.js</span>
          <span>TypeScript</span>
          <span>Node.js / Express</span>
          <span>APIs / validation</span>
          <span>Redis</span>
          <span>Supertest</span>
          <span>Docker / CI</span>
        </div>
      </Container>
    </section>
  );
}
