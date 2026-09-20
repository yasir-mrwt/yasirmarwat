import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { engineeringFocus } from "@/data/skills";

export function EngineeringFocus() {
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
          <ol className="focus-list">
            {engineeringFocus.map((area, index) => (
              <li key={area.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
