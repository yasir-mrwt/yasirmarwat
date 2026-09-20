import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className="contact-signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="mono-label">CONTACT / FINAL NODE</span>
        <h2 id="contact-title">
          Have a product or backend problem worth solving?
        </h2>
        <p>
          Start with the constraint, the failure mode, or the behavior that
          needs to improve.
        </p>
        <div className="contact-actions">
          {profile.email ? (
            <Button href={`mailto:${profile.email}`} variant="primary">
              Email me <ArrowUpRight size={16} />
            </Button>
          ) : null}
          <CopyEmail email={profile.email} />
          <Button href="/resume">View résumé</Button>
        </div>
        <dl>
          <div>
            <dt>Email</dt>
            <dd>{profile.email ?? "TODO: add email"}</dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd>{profile.github ?? "TODO: add GitHub"}</dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>{profile.linkedin ?? "TODO: add LinkedIn"}</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>{profile.availability}</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
