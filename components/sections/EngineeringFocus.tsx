"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { engineeringFocus } from "@/data/skills";

export function EngineeringFocus() {
  const [active, setActive] = useState(0);
  const keywords = [
    "interface · API · data · delivery",
    "authentication · validation · errors",
    "PostgreSQL · Redis · queues",
    "tests · Docker · deployment",
  ] as const;

  return (
    <section
      className="section focus-section"
      id="focus"
      aria-labelledby="focus-title"
    >
      <Container>
        <SectionHeader
          eyebrow="ENGINEERING FOCUS"
          title="Where I contribute across a product."
        />
        <div className="focus-layout">
          <p className="focus-statement">
            A full-stack view with a stronger interest in backend
            implementation, production behavior, and the details that make
            features dependable.
          </p>
          <div className="focus-map">
            <div className="focus-signal" aria-live="polite">
              <span>ACTIVE RESPONSIBILITY</span>
              <strong>{engineeringFocus[active].title}</strong>
              <p>{keywords[active]}</p>
            </div>
            <ol className="focus-list">
              {engineeringFocus.map((area, index) => (
                <li key={area.title} data-active={active === index}>
                  <button
                    type="button"
                    aria-pressed={active === index}
                    onClick={() => setActive(index)}
                    onPointerEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                  >
                    <span>0{index + 1}</span>
                    <span>
                      <strong>{area.title}</strong>
                      <small>{area.body}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
