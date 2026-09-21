import { Container } from "@/components/layout/Container";
import { ExperienceEntry } from "@/components/sections/ExperienceEntry";
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
          eyebrow="EXPERIENCE"
          title="Practical experience across real development teams."
          intro="Junior-level work across remote and on-site environments, described through contribution without inflated ownership or invented metrics."
        />
        <ol className="timeline">
          {experience.map((item, index) => (
            <ExperienceEntry
              key={`${item.company}-${item.period}`}
              item={item}
              index={index}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
