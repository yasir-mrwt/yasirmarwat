"use client";

import { ArrowUpRight, Github, Linkedin, X } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { profileData } from "@/data/profile";

export function RecruiterFastPath() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function close() {
    dialogRef.current?.close();
    triggerRef.current?.focus();
  }

  return (
    <div className="fast-path">
      <div>
        <span className="mono-label">SHORT ON TIME?</span>
        <p>Role, experience, strengths, and links in one focused view.</p>
      </div>
      <button
        ref={triggerRef}
        className="fast-path-trigger"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >
        Recruiter fast view <ArrowUpRight size={16} />
      </button>
      <dialog
        ref={dialogRef}
        className="fast-dialog"
        onClose={() => triggerRef.current?.focus()}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
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
            <h2>
              Building practical web products from interface to deployment.
            </h2>
          </div>
          <p className="dialog-summary">{profileData.primaryNiche}</p>
          <dl>
            <div>
              <dt>Experience</dt>
              <dd>{profileData.experienceSummary}</dd>
            </div>
            <div>
              <dt>Core technologies</dt>
              <dd>
                TypeScript, React, Next.js, Node.js, Express, PostgreSQL,
                MongoDB, Redis
              </dd>
            </div>
            <div>
              <dt>Backend focus</dt>
              <dd>
                REST APIs, validation, caching, testing, Docker, CI/CD,
                deployment debugging
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>
                {profileData.location} · {profileData.timezone}
              </dd>
            </div>
          </dl>
          <nav aria-label="Recruiter links">
            <Link href="/resume">View résumé</Link>
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
