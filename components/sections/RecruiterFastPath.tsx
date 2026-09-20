"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Container } from "@/components/layout/Container";

export function RecruiterFastPath() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const project = projects[0];

  function open() {
    dialogRef.current?.showModal();
  }

  return (
    <section className="recruiter-section" aria-labelledby="recruiter-title">
      <Container>
        <div>
          <span className="mono-label">RECRUITER_FAST_PATH / 60 SEC</span>
          <h2 id="recruiter-title">Need the short version?</h2>
        </div>
        <p>
          Role, core strengths, project context, and contact details in one
          focused view.
        </p>
        <button className="button button--primary" type="button" onClick={open}>
          Open fast view <ArrowUpRight size={16} />
        </button>
      </Container>
      <dialog
        className="fast-dialog"
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="dialog-panel">
          <header>
            <span>60-SECOND VERSION / PROFILE</span>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close fast view"
            >
              <X />
            </button>
          </header>
          <div className="dialog-intro">
            <p>Role</p>
            <h2>{profile.role}</h2>
            <span>{profile.experience}</span>
          </div>
          <dl>
            <div>
              <dt>Strongest technologies</dt>
              <dd>TypeScript, React / Next.js, Node.js / Express, REST APIs</dd>
            </div>
            <div>
              <dt>Backend strengths</dt>
              <dd>
                Validation, caching, API testing, Docker, CI/CD, production
                debugging
              </dd>
            </div>
            <div>
              <dt>Project</dt>
              <dd>
                {project.title} — placeholder module; real project data is still
                TODO.
              </dd>
            </div>
            <div>
              <dt>Timezone</dt>
              <dd>{profile.timezone}</dd>
            </div>
          </dl>
          <nav aria-label="Profile links">
            <a href="/resume">Résumé</a>
            <span aria-disabled="true">GitHub · TODO</span>
            <span aria-disabled="true">LinkedIn · TODO</span>
            <span aria-disabled="true">Email · TODO</span>
          </nav>
        </div>
      </dialog>
    </section>
  );
}
