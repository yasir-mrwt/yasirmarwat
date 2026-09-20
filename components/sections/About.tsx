import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profileData } from "@/data/profile";

const currentFocus = [
  "Backend architecture and API design",
  "Database and caching decisions",
  "Testing, deployment, and production debugging",
];

export function About() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <Container>
        <SectionHeader
          eyebrow="ABOUT"
          title={`${profileData.fullName}, professionally known as ${profileData.alias}.`}
        />
        <div className="about-layout">
          <div className="about-copy">
            <p>{profileData.primaryNiche}</p>
            <p>
              I enjoy work where frontend behavior and backend quality meet:
              clear states, dependable APIs, thoughtful data handling, and
              deployments that behave as expected.
            </p>
          </div>
          <aside className="about-facts">
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{profileData.displayTitle}</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{profileData.location}</dd>
              </div>
              <div>
                <dt>Timezone</dt>
                <dd>{profileData.timezone}</dd>
              </div>
              {profileData.education ? (
                <div>
                  <dt>Education</dt>
                  <dd>{profileData.education}</dd>
                </div>
              ) : null}
            </dl>
            <div className="current-focus">
              <span>CURRENT FOCUS</span>
              <ul>
                {currentFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
