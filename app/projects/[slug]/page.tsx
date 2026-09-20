import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Container";
import { ProjectSystem } from "@/components/projects/ProjectSystem";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project
    ? {
        title: `${project.title} | Project system`,
        description: project.tagline,
      }
    : { title: "Project not found" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main id="main" className="project-page">
        <Container>
          <p className="mono-label">PROJECT DETAIL / REUSABLE ROUTE</p>
          <h1>{project.title}</h1>
          <p>
            This route renders the same typed project module used on the
            homepage.
          </p>
          <ProjectSystem project={project} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
