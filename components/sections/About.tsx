import { ArrowDown } from "lucide-react";
import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { profileData } from "@/data/profile";

const currentFocus = [
  "Backend architecture and API design",
  "Database, caching, and asynchronous work",
  "Testing, deployment, and production debugging",
];

const productTrace = [
  ["Interface", "A person starts with a clear, responsive interaction"],
  ["API", "Validation and application rules protect the boundary"],
  ["Data", "Persistence, caching, and async work carry the state"],
  ["Deployment", "Real environments reveal the behavior that matters"],
] as const;

export function About() {
  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <Container>
        <span className="section-kicker">ABOUT</span>
        <Reveal>
          <div className="about-layout">
            <div className="about-copy">
              <h2 id="about-title">
                I like understanding how the <em>whole product</em> behaves.
              </h2>
              <p>
                I’m a full-stack engineer based in Peshawar who enjoys building
                complete web products, with most of my technical curiosity
                naturally pulling toward backend systems, APIs, and production
                behavior.
              </p>
              <p>
                I like following a feature beyond the screen—through validation,
                data, background work, testing, and deployment. The most useful
                lessons often arrive while debugging the moments when a system
                behaves differently from what everyone expected.
              </p>
            </div>

            <div className="about-trace" aria-label="Product trace">
              <header>
                <span>PRODUCT_TRACE</span>
                <span>END_TO_END</span>
              </header>
              <ol>
                {productTrace.map(([stage, detail], index) => (
                  <li
                    key={stage}
                    style={{ "--trace-index": index } as CSSProperties}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{stage}</strong>
                      <p>{detail}</p>
                    </div>
                    {index < productTrace.length - 1 ? (
                      <ArrowDown aria-hidden="true" size={16} />
                    ) : null}
                  </li>
                ))}
              </ol>
              <footer>
                <span>CURIOUS</span>
                <i />
                <span>BUILD</span>
                <i />
                <span>DEBUG</span>
                <i />
                <strong>IMPROVE</strong>
              </footer>
            </div>

            <aside className="about-facts" aria-label="Profile facts">
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
        </Reveal>
      </Container>
    </section>
  );
}
