import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectSystem({ project }: { project: Project }) {
  return (
    <article
      className="project-feature"
      data-placeholder={project.isPlaceholder}
    >
      <div
        className="project-media"
        aria-label={`${project.title} presentation preview`}
      >
        <div className="project-browser" aria-hidden="true">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>CASE_STUDY / VERIFIED_WORK</span>
          </div>
          <div className="browser-body">
            <aside>
              <span />
              <span />
              <span />
              <span />
            </aside>
            <main>
              <span className="mock-label" />
              <span className="mock-title" />
              <span className="mock-title mock-title--short" />
              <div>
                <span />
                <span />
              </div>
            </main>
          </div>
        </div>
        <span className="project-stamp">
          CONTENT SLOT
          <br />
          READY
        </span>
      </div>
      <div className="project-content">
        <span className="project-label">{project.label}</span>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        {project.contribution ? (
          <p className="project-contribution">
            <strong>My contribution</strong>
            {project.contribution}
          </p>
        ) : null}

        <ul className="project-highlights" aria-label="Case study content">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {project.technicalDecision ? (
          <div className="project-decision">
            <h4>Technical decision</h4>
            <p>
              <strong>Challenge:</strong> {project.technicalDecision.challenge}
            </p>
            <p>
              <strong>Approach:</strong> {project.technicalDecision.approach}
            </p>
            <p>
              <strong>Tradeoff:</strong> {project.technicalDecision.tradeoff}
            </p>
          </div>
        ) : null}

        {project.technologies.length ? (
          <ul className="project-tech">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}
        {project.qualityNote ? (
          <p className="project-quality">{project.qualityNote}</p>
        ) : null}

        {project.links.live || project.links.source ? (
          <div className="project-actions">
            {project.links.live ? (
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live project <ArrowUpRight size={16} />
              </a>
            ) : null}
            {project.links.source ? (
              <a href={project.links.source} target="_blank" rel="noreferrer">
                <Github size={16} /> Source
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
