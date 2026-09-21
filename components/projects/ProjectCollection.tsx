"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { ProjectSystem } from "@/components/projects/ProjectSystem";
import { projects } from "@/data/projects";

export function ProjectCollection() {
  const collectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const updateActiveProject = useCallback(() => {
    const collection = collectionRef.current;
    if (!collection) return;

    const cards = Array.from(
      collection.querySelectorAll<HTMLElement>(".project-showcase"),
    );
    const collectionLeft = collection.getBoundingClientRect().left;
    const closestIndex = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(
          card.getBoundingClientRect().left - collectionLeft,
        );
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;

    setActiveProject(closestIndex);
  }, []);

  function moveToProject(index: number) {
    const collection = collectionRef.current;
    const cards =
      collection?.querySelectorAll<HTMLElement>(".project-showcase");
    const nextIndex = Math.max(0, Math.min(projects.length - 1, index));
    cards?.[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveProject(nextIndex);
  }

  return (
    <>
      <div
        ref={collectionRef}
        className="project-collection"
        aria-label="Selected project showcases"
        tabIndex={0}
        onScroll={updateActiveProject}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            moveToProject(activeProject + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveToProject(activeProject - 1);
          }
        }}
      >
        {projects.map((project, index) => (
          <ProjectSystem key={project.slug} project={project} index={index} />
        ))}
      </div>

      <nav className="project-carousel-nav" aria-label="Project carousel">
        <button
          type="button"
          aria-label="Show previous project"
          disabled={activeProject === 0}
          onClick={() => moveToProject(activeProject - 1)}
        >
          <ArrowLeft aria-hidden="true" size={17} />
        </button>
        <p aria-live="polite" aria-atomic="true">
          <span>{String(activeProject + 1).padStart(2, "0")}</span>
          <i aria-hidden="true" />
          {String(projects.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          aria-label="Show next project"
          disabled={activeProject === projects.length - 1}
          onClick={() => moveToProject(activeProject + 1)}
        >
          <ArrowRight aria-hidden="true" size={17} />
        </button>
      </nav>
    </>
  );
}
