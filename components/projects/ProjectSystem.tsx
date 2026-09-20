import { ArrowUpRight } from "lucide-react";
import { ProjectArchitecture } from "./ProjectArchitecture";
import { ProjectDecision } from "./ProjectDecision";
import { ProjectFlow } from "./ProjectFlow";
import { CodeBlock } from "@/components/ui/CodeBlock";
import type { Project } from "@/data/projects";

export function ProjectSystem({ project }: { project: Project }) {
  return (
    <article className="project-system">
      <header className="project-intro">
        <div>
          <span className="mono-label">{project.eyebrow}</span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.tagline}</p>
        <dl>
          <div>
            <dt>Purpose</dt>
            <dd>{project.purpose}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span className="placeholder-badge">DEMONSTRATION DATA</span>
            </dd>
          </div>
        </dl>
      </header>

      <div className="project-architecture-wrap">
        <ProjectArchitecture nodes={project.architecture} />
      </div>

      <div className="project-narrative">
        <ProjectDecision decision={project.decisions[0]} />
        <div className="project-notes">
          <article>
            <span>RELIABILITY NOTE</span>
            <h4>Degrade deliberately</h4>
            <p>{project.reliability}</p>
          </article>
          <article>
            <span>SCALABILITY NOTE</span>
            <h4>Earn the complexity</h4>
            <p>{project.scalability}</p>
          </article>
          <article>
            <span>TEST STRATEGY</span>
            <h4>Exercise behavior</h4>
            <ul>
              {project.testing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        <CodeBlock
          language={project.code.language}
          title="Cache fallback"
          why={project.code.why}
        >
          {project.code.source}
        </CodeBlock>
        <section
          className="project-deployment"
          aria-labelledby="deployment-title"
        >
          <div>
            <span className="mono-label">RELEASE_PATH</span>
            <h4 id="deployment-title">Deployment should be repeatable.</h4>
          </div>
          <ProjectFlow stages={project.deployment} />
        </section>
        <footer className="project-footer">
          <ul aria-label="Demo technology list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <span
            className="button button--secondary button--disabled"
            aria-disabled="true"
          >
            TODO: add project link <ArrowUpRight size={16} />
          </span>
        </footer>
      </div>
    </article>
  );
}
