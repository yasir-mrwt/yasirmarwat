"use client";

import { useEffect, useRef } from "react";
import type { Experience } from "@/data/experience";

export function ExperienceEntry({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  const element = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const node = element.current;
    if (
      !node ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    node.dataset.motion = "timeline";
    node.dataset.visible = "false";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        node.dataset.visible = "true";
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={element} className="timeline-entry">
      <div className="timeline-rail" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="timeline-meta">
        <span>{item.period}</span>
        <strong>{item.location}</strong>
        <small>{item.arrangement}</small>
      </div>
      <div className="timeline-copy">
        <p className="timeline-company">{item.company}</p>
        <h3>{item.role}</h3>
        <p className="timeline-type">{item.type}</p>
        <ul>
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
        {item.technologies.length ? (
          <ul className="timeline-tech" aria-label="Technologies used">
            {item.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}
