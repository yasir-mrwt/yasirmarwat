"use client";

import {
  Braces,
  ChevronDown,
  Code2,
  Container as ContainerIcon,
  Database,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stackGroups } from "@/data/skills";

const icons = [Code2, Braces, Database, ShieldCheck, ContainerIcon, Rocket];

export function Stack() {
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState<number | null>(null);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const activeGroup = stackGroups[active];
  const ActiveIcon = icons[active];

  useEffect(() => {
    const workspace = workspaceRef.current;
    if (!workspace) return;
    workspace.dataset.ready = "false";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) workspace.dataset.ready = "true";
      },
      { threshold: 0.18 },
    );
    observer.observe(workspace);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section stack-section"
      id="stack"
      aria-labelledby="stack-title"
    >
      <Container>
        <SectionHeader
          eyebrow="TECHNICAL STACK"
          title="A working toolkit, not a logo wall."
          intro="Select a responsibility to see the tools and real products behind it."
        />

        <div className="stack-workspace" ref={workspaceRef}>
          <header className="stack-workspace-bar">
            <span>ENGINEERING_WORKSPACE / TOOLKIT</span>
            <div aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span>{stackGroups.length} RESPONSIBILITY AREAS</span>
          </header>

          <div className="stack-desktop">
            <nav className="stack-index" aria-label="Toolkit categories">
              {stackGroups.map((group, index) => {
                const Icon = icons[index];
                return (
                  <button
                    type="button"
                    key={group.title}
                    data-active={active === index}
                    aria-pressed={active === index}
                    onClick={() => setActive(index)}
                    onPointerEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    style={{ "--category-index": index } as CSSProperties}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" size={18} />
                    <strong>{group.title}</strong>
                    <small>{group.items.length} tools</small>
                  </button>
                );
              })}
            </nav>

            <article className="stack-stage" aria-live="polite">
              <div className="stack-stage-title">
                <span className="stack-stage-icon">
                  <ActiveIcon aria-hidden="true" size={27} />
                </span>
                <div>
                  <span>ACTIVE RESPONSIBILITY / 0{active + 1}</span>
                  <h3>{activeGroup.title}</h3>
                  <p>{activeGroup.summary}</p>
                </div>
              </div>

              <ul className="stack-tool-field" key={activeGroup.title}>
                {activeGroup.items.map(([name, use], index) => (
                  <li
                    key={name}
                    style={{ "--tool-index": index } as CSSProperties}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{name}</strong>
                    <p>{use}</p>
                  </li>
                ))}
              </ul>

              <footer className="stack-evidence">
                <span>SEEN IN REAL WORK</span>
                <p>{activeGroup.evidence.join(" / ")}</p>
              </footer>
            </article>
          </div>

          <div className="stack-mobile">
            {stackGroups.map((group, index) => {
              const Icon = icons[index];
              const expanded = mobileActive === index;
              return (
                <article key={group.title} data-active={expanded}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`stack-panel-${index}`}
                    onClick={() =>
                      setMobileActive((current) =>
                        current === index ? null : index,
                      )
                    }
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" size={19} />
                    <strong>{group.title}</strong>
                    <ChevronDown aria-hidden="true" size={18} />
                  </button>
                  <div
                    className="stack-mobile-panel"
                    id={`stack-panel-${index}`}
                    aria-hidden={!expanded}
                  >
                    <p>{group.summary}</p>
                    <ul>
                      {group.items.map(([name, use]) => (
                        <li key={name}>
                          <strong>{name}</strong>
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                    <footer>
                      <span>SEEN IN REAL WORK</span>
                      <p>{group.evidence.join(" / ")}</p>
                    </footer>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
