import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stackGroups } from "@/data/skills";

export function Stack() {
  return (
    <section className="section stack-section" aria-labelledby="stack-title">
      <Container>
        <SectionHeader
          index="07"
          eyebrow="TECHNICAL STACK"
          title="Tools organized by responsibility."
          intro="No percentages or expert labels—just what each tool is used to do."
        />
        <div className="stack-grid">
          {stackGroups.map((group, index) => (
            <Reveal key={group.title}>
              <article>
                <header>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
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
