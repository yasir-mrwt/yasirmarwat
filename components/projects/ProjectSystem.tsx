import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectSystemProps = {
  project: Project;
  index: number;
};

export function ProjectSystem({ project, index }: ProjectSystemProps) {
  const showDevicePreview = ["lead", "support"].includes(project.variant);

  return (
    <article
      className="project-showcase"
      data-variant={project.variant}
      id={`project-${project.slug}`}
    >
      <header className="project-heading">
        <span className="project-number">
          PROJECT / {String(index + 1).padStart(2, "0")}
        </span>
        <div className="project-heading-copy">
          <p>{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <dl className="project-meta">
          <div>
            <dt>Type</dt>
            <dd>{project.type}</dd>
          </div>
          {project.status ? (
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          ) : null}
          <div>
            <dt>Hosted on</dt>
            <dd>{project.hosting}</dd>
          </div>
        </dl>
      </header>

      <div className="project-layout">
        <a
          className="project-product"
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} live`}
        >
          <span className="project-frame-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{new URL(project.links.live).hostname}</span>
          </span>
          <picture className="project-picture">
            <source
              media="(max-width: 699px)"
              srcSet={project.images.mobile}
              width="804"
              height="1450"
            />
            <Image
              src={project.images.web}
              width={2880}
              height={1720}
              sizes="(max-width: 699px) calc(100vw - 40px), (max-width: 1100px) 88vw, 900px"
              alt={project.images.webAlt}
            />
          </picture>
          <span className="project-open-cue">
            View live <ArrowUpRight aria-hidden="true" size={16} />
          </span>
        </a>

        {showDevicePreview ? (
          <div className="project-device" aria-hidden="true">
            <Image
              src={project.images.mobile}
              width={804}
              height={1450}
              sizes="220px"
              alt=""
            />
          </div>
        ) : null}

        <div className="project-story">
          <p className="project-summary">{project.summary}</p>

          {project.contribution ? (
            <div className="project-contribution">
              <span>MY CONTRIBUTION</span>
              <p>{project.contribution}</p>
            </div>
          ) : null}

          <ol className="project-highlights" aria-label="Technical highlights">
            {project.highlights.map((highlight, highlightIndex) => (
              <li key={highlight}>
                <span>{String(highlightIndex + 1).padStart(2, "0")}</span>
                <p>{highlight}</p>
              </li>
            ))}
          </ol>

          {project.technologies.length ? (
            <div className="project-technology">
              <span>CORE TECHNOLOGY</span>
              <ul aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.qualityNote ? (
            <p className="project-quality">{project.qualityNote}</p>
          ) : null}

          <div className="project-actions">
            <a href={project.links.live} target="_blank" rel="noreferrer">
              View {project.title} live <ArrowUpRight size={16} />
            </a>
            {project.links.source ? (
              <a href={project.links.source} target="_blank" rel="noreferrer">
                <Github size={16} /> View source
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
