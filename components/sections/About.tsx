import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <Container>
        <SectionHeader
          index="12"
          eyebrow="ABOUT"
          title="A full-stack view, with a backend center of gravity."
        />
        <div className="about-layout">
          <p className="about-lead">{profile.bio}</p>
          <dl>
            <div>
              <dt>Current role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{profile.experience}</dd>
            </div>
            <div>
              <dt>Current focus</dt>
              <dd>Reliable APIs, scalable request flow, production behavior</dd>
            </div>
            <div>
              <dt>Timezone</dt>
              <dd>{profile.timezone}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location ?? "TODO: add location"}</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>{profile.education ?? "TODO: add education"}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
