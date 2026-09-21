import { ArrowDown, ArrowUpRight, Github, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { HeroCanvas } from "@/components/sections/HeroCanvas";
import { RecruiterFastPath } from "@/components/sections/RecruiterFastPath";
import { Button } from "@/components/ui/Button";
import { profileData } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Container>
        <div className="hero-copy">
          <div className="hero-identity">
            <span>{profileData.fullName}</span>
            <span>{profileData.displayTitle}</span>
          </div>
          <h1 id="hero-title">
            Full-Stack <em>Engineer.</em>
          </h1>
          <p className="hero-role">
            Backend-leaning, product-minded, and comfortable across the stack.
          </p>
          <p className="hero-intro">
            I build modern web products across frontend interfaces, backend
            APIs, data, testing, and deployment—with extra attention to reliable
            server-side behavior.
          </p>
          <div className="hero-actions">
            <Button href="#work" variant="primary">
              View work <ArrowDown size={16} />
            </Button>
            <Button href={profileData.resumeUrl} target="_blank">
              Résumé
            </Button>
            <Button href={profileData.socials.github}>
              GitHub <Github size={16} />
            </Button>
            <Button href="#contact" variant="quiet">
              Contact <ArrowUpRight size={16} />
            </Button>
            <RecruiterFastPath />
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={14} /> {profileData.location}
            </span>
            <span className="availability">
              <i aria-hidden="true" /> {profileData.availability}
            </span>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <HeroCanvas />
      </Container>
    </section>
  );
}
