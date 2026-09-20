import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { responsibilities } from "@/data/skills";

export function EngineeringIdentity() {
  return (
    <section
      className="section identity-section"
      id="engineering"
      aria-labelledby="identity-title"
    >
      <Container>
        <SectionHeader
          index="01"
          eyebrow="ENGINEERING IDENTITY"
          title="I like the work between “it runs” and “it holds up.”"
          intro="The responsibilities I gravitate toward span the request path, from the first interaction to the production response."
        />
        <div className="responsibility-grid">
          {responsibilities.map((item, index) => (
            <Reveal key={item.name}>
              <details className="responsibility">
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.name}</strong>
                  <span aria-hidden="true">↗</span>
                </summary>
                <p>{item.tools}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
