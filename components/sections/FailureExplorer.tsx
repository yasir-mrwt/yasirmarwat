"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const failures = [
  {
    id: "invalid",
    label: "Invalid request",
    affected: "Validation",
    response:
      "Reject at the boundary with field-level, structured errors. Do not begin business work.",
  },
  {
    id: "auth",
    label: "Auth failure",
    affected: "Authentication",
    response:
      "Return a consistent 401/403 response, reveal no sensitive detail, and record useful context safely.",
  },
  {
    id: "redis",
    label: "Redis unavailable",
    affected: "Cache",
    response:
      "For safe reads, bypass the cache and observe the fault. Do not let an optimization become a hard dependency.",
  },
  {
    id: "database",
    label: "Database unavailable",
    affected: "Database",
    response:
      "Fail within a bounded timeout, return a stable error contract, and avoid uncontrolled retries.",
  },
  {
    id: "third-party",
    label: "Third-party timeout",
    affected: "Integration",
    response:
      "Time out cleanly. Retry only idempotent work with limits; move optional work off the critical path.",
  },
  {
    id: "config",
    label: "Environment / config",
    affected: "Startup",
    response:
      "Validate required configuration before serving traffic so failure is immediate, explicit, and diagnosable.",
  },
] as const;

const services = [
  "Client",
  "Validation",
  "Authentication",
  "Logic",
  "Cache",
  "Database",
  "Response",
];

export function FailureExplorer() {
  const [active, setActive] = useState<(typeof failures)[number]>(failures[2]);
  const reduceMotion = useReducedMotion();
  return (
    <section
      className="section failure-section"
      aria-labelledby="failure-title"
    >
      <Container>
        <SectionHeader
          index="04"
          eyebrow="FAILURE MODE EXPLORER"
          title="How I think about reliability."
          intro="An interactive engineering-thinking demo. These patterns are not claims about every project."
          light
        />
        <div className="failure-layout">
          <div
            className="failure-controls"
            role="group"
            aria-label="Choose a failure scenario"
          >
            {failures.map((failure, index) => (
              <button
                key={failure.id}
                className={active.id === failure.id ? "is-active" : ""}
                type="button"
                aria-pressed={active.id === failure.id}
                onClick={() => setActive(failure)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {failure.label}
              </button>
            ))}
          </div>
          <div className="failure-system">
            <div
              className="failure-map"
              aria-label={`System diagram. ${active.affected} is affected.`}
            >
              {services.map((service) => (
                <span
                  key={service}
                  className={service === active.affected ? "is-failed" : ""}
                >
                  {service}
                </span>
              ))}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                className="failure-response"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                aria-live="polite"
              >
                <span>RESPONSE PATTERN / {active.affected.toUpperCase()}</span>
                <h3>{active.label}</h3>
                <p>{active.response}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
