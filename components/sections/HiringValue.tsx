import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const value = [
  [
    "Build a feature end-to-end",
    "UI → API → data → validation → tests → deployment",
  ],
  [
    "Improve backend reliability",
    "Routes → errors → caching → integration testing",
  ],
  [
    "Debug production issues",
    "Reproduce → isolate → inspect environment → verify",
  ],
  [
    "Improve meaningful performance",
    "Measure → find constraint → reduce work → compare",
  ],
  [
    "Make deployment repeatable",
    "Build → checks → container → environment → release",
  ],
  [
    "Improve user experience",
    "Responsive → accessible → understandable → resilient",
  ],
] as const;

export function HiringValue() {
  return (
    <section className="section value-section" aria-labelledby="value-title">
      <Container>
        <SectionHeader
          index="10"
          eyebrow="HOW I HELP"
          title="Practical contribution across the product path."
        />
        <div className="value-list">
          {value.map(([title, path], index) => (
            <Reveal key={title}>
              <article>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{path}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
