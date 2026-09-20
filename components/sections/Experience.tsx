import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      className="section experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <Container>
        <SectionHeader
          index="08"
          eyebrow="EXPERIENCE"
          title="Work, systems, and what changed because of it."
          intro="This area is intentionally honest while factual role details are being prepared."
        />
        {experience.length ? (
          <ol className="timeline">
            {experience.map((item) => (
              <li key={`${item.context}-${item.period}`}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.context}</p>
              </li>
            ))}
          </ol>
        ) : (
          <div className="empty-state">
            <span>CONTENT STATUS / NEEDS FACTS</span>
            <h3>TODO: add real experience entries</h3>
            <p>
              Roles, companies, dates, responsibilities, systems, testing,
              deployment, debugging, collaboration, and learning will appear
              here only after they are supplied and verified.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
