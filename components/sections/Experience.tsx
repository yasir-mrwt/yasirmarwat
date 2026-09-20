import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";
import { profileData } from "@/data/profile";

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
          title="Work described through contribution."
          intro={`${profileData.experienceSummary}. Role-by-role details will be published only from verified records.`}
        />
        {experience.length ? (
          <ol className="timeline">
            {experience.map((item) => (
              <li key={`${item.context}-${item.period}`}>
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <span>{item.context}</span>
                </div>
                <div className="timeline-copy">
                  <h3>{item.title}</h3>
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                  <p>{item.technologies.join(" · ")}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="experience-pending">
            <span>VERIFIED HISTORY PENDING</span>
            <p>
              Company names, dates, responsibilities, and project context are
              intentionally withheld until the factual employment record is
              added.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
