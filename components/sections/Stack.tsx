import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stackGroups } from "@/data/skills";

export function Stack() {
  return (
    <section
      className="section stack-section"
      id="stack"
      aria-labelledby="stack-title"
    >
      <Container>
        <SectionHeader
          eyebrow="TECHNICAL STACK"
          title="Tools tied to real responsibilities."
          intro="Grouped by how they contribute to building, testing, and delivering web products."
        />
        <div className="stack-grid">
          {stackGroups.map((group, index) => (
            <Reveal key={group.title}>
              <article>
                <header>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.summary}</p>
                  </div>
                </header>
                <dl>
                  {group.items.map(([name, use]) => (
                    <div key={name}>
                      <dt>{name}</dt>
                      <dd>{use}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
