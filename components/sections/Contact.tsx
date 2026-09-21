import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { profileData } from "@/data/profile";

export function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className="contact-intro">
          <span className="section-kicker">CONTACT</span>
          <h2 id="contact-title">Let’s talk about the work.</h2>
          <p>
            Have a role, project, or technical problem that fits my experience?
            Send a concise note and I’ll take it from there.
          </p>
          <div className="contact-actions">
            <Button href={profileData.socials.github}>
              <Github size={16} /> GitHub
            </Button>
            <Button href={profileData.socials.linkedin}>
              <Linkedin size={16} /> LinkedIn
            </Button>
            <Button href={profileData.resumeUrl} target="_blank">
              Résumé <ArrowUpRight size={16} />
            </Button>
            {profileData.email ? <CopyEmail email={profileData.email} /> : null}
          </div>
          <dl>
            <div>
              <dt>Availability</dt>
              <dd>{profileData.availability}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profileData.location}</dd>
            </div>
            <div>
              <dt>Timezone</dt>
              <dd>{profileData.timezone}</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
