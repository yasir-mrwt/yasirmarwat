"use client";

import { ArrowUpRight, Github, Linkedin, X } from "lucide-react";
import { useRef, type KeyboardEvent } from "react";
import { profileData } from "@/data/profile";

export function RecruiterFastPath() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function close() {
    dialogRef.current?.close();
    triggerRef.current?.focus();
  }

  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusableElements = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  }

  return (
    <div className="fast-path">
      <button
        ref={triggerRef}
        className="fast-path-trigger"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >
        60-second profile <ArrowUpRight size={16} />
      </button>
      <dialog
        ref={dialogRef}
        className="fast-dialog"
        onClose={() => triggerRef.current?.focus()}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        onKeyDown={trapFocus}
      >
        <article className="dialog-panel">
          <header>
            <div>
              <span className="mono-label">PROFILE SUMMARY</span>
              <strong>{profileData.fullName}</strong>
            </div>
            <button type="button" onClick={close} aria-label="Close fast view">
              <X />
            </button>
          </header>
          <div className="dialog-title">
            <p>{profileData.displayTitle}</p>
            <h2>Across the product. Curious about the backend.</h2>
          </div>
          <p className="dialog-summary">{profileData.primaryNiche}</p>
          <dl>
            <div>
              <dt>Current focus</dt>
              <dd>
                End-to-end product features, APIs, data, and production behavior
              </dd>
            </div>
            <div>
              <dt>Core technologies</dt>
              <dd>
                TypeScript, React, Next.js, Node.js, Express, PostgreSQL,
                MongoDB, Redis
              </dd>
            </div>
            <div>
              <dt>Backend strengths</dt>
              <dd>
                REST APIs, validation, caching, testing, Docker, CI/CD,
                deployment debugging
              </dd>
            </div>
            <div>
              <dt>Experience snapshot</dt>
              <dd>{profileData.experienceSummary}</dd>
            </div>
            <div>
              <dt>Selected work</dt>
              <dd>
                Five published product showcases spanning monitoring, AI,
                commerce, education, and agency work
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                {profileData.location} · {profileData.timezone}
              </dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>{profileData.availability}</dd>
            </div>
          </dl>
          <nav aria-label="Recruiter links">
            <a href={profileData.resumeUrl} target="_blank" rel="noreferrer">
              View résumé
            </a>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="#contact" onClick={close}>
              Contact
            </a>
          </nav>
        </article>
      </dialog>
    </div>
  );
}
