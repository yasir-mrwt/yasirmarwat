import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/ui/PrintButton";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Résumé | ${profileData.fullName}`,
  description: `${profileData.fullName} — ${profileData.displayTitle}`,
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <Link href="/">← Portfolio</Link>
        <PrintButton />
      </div>
      <article>
        <span className="mono-label">MUHAMMAD YASIR / RÉSUMÉ</span>
        <h1>{profileData.fullName}</h1>
        <p className="resume-role">{profileData.displayTitle}</p>
        <p>{profileData.primaryNiche}</p>
        <section>
          <h2>Profile</h2>
          <p>
            {profileData.experienceSummary}. Based in {profileData.location} and
            working in {profileData.timezone}.
          </p>
        </section>
        <section>
          <h2>Core technologies</h2>
          <p>
            TypeScript, React, Next.js, Node.js, Express, REST APIs, PostgreSQL,
            MongoDB, Redis, Supertest, Docker, and CI/CD.
          </p>
        </section>
        <section>
          <h2>Engineering focus</h2>
          <p>
            Full-stack product features, backend APIs, validation, data
            handling, testing, deployment, responsive UX, and production
            debugging.
          </p>
        </section>
        <section>
          <h2>Verified profiles</h2>
          <p>
            <a href={profileData.socials.github}>GitHub ↗</a> ·{" "}
            <a href={profileData.socials.linkedin}>LinkedIn ↗</a> ·{" "}
            <a href={profileData.socials.website}>Portfolio ↗</a>
          </p>
        </section>
        <aside>
          <strong>Employment and project record</strong>
          <p>
            Detailed role history and project case studies are excluded until
            the verified source material is added.
          </p>
        </aside>
      </article>
    </main>
  );
}
