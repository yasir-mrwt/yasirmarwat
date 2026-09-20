import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { principles } from "@/data/principles";

export function EngineeringPrinciples() {
  return (
    <section
      className="section principles-section"
      aria-labelledby="principles-title"
    >
      <Container>
        <SectionHeader
          index="05"
          eyebrow="ENGINEERING PRINCIPLES"
          title="Rules that make the next decision clearer."
        />
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <Reveal key={principle.title}>
              <article>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
