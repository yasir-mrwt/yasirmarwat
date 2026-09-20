import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { PrintButton } from "@/components/ui/PrintButton";

export const metadata: Metadata = { title: "Résumé | Engineering Portfolio" };

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <Link href="/">← Portfolio</Link>
        <PrintButton />
      </div>
      <article>
        <span className="mono-label">RÉSUMÉ / CONTENT PLACEHOLDER</span>
        <h1>{profile.name ?? "TODO: add name"}</h1>
        <p className="resume-role">{profile.role}</p>
        <p>{profile.bio}</p>
        <section>
          <h2>Contact</h2>
          <p>
            {profile.email ?? "TODO: add email"} ·{" "}
            {profile.location ?? "TODO: add location"} · {profile.timezone}
          </p>
        </section>
        <section>
          <h2>Experience</h2>
          <p>
            TODO: add verified role history, responsibilities, technologies, and
            dates.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>
            TODO: replace the portfolio’s demo system with factual project
            content.
          </p>
        </section>
        <section>
          <h2>Education</h2>
          <p>{profile.education ?? "TODO: add verified education"}</p>
        </section>
        <aside>
          <strong>Why this page is incomplete</strong>
          <p>
            The portfolio brief explicitly prohibits fabricated facts. This
            printable route remains honest until résumé content is supplied.
          </p>
        </aside>
      </article>
    </main>
  );
}
