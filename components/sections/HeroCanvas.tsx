"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { useReducedMotionPreference } from "@/components/motion/useReducedMotionPreference";

export function HeroCanvas() {
  const canvas = useRef<HTMLDivElement>(null);
  const isInView = useInView(canvas, { amount: 0.1 });
  const reducedMotion = useReducedMotionPreference();

  return (
    <div
      ref={canvas}
      className="identity-canvas"
      data-animate={isInView && !reducedMotion}
      onPointerMove={(event) => {
        if (reducedMotion || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        event.currentTarget.style.setProperty("--pointer-x", `${x * 18}px`);
        event.currentTarget.style.setProperty("--pointer-y", `${y * 18}px`);
        event.currentTarget.style.setProperty(
          "--pointer-back-x",
          `${x * -5}px`,
        );
        event.currentTarget.style.setProperty(
          "--pointer-back-y",
          `${y * -5}px`,
        );
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--pointer-x", "0px");
        event.currentTarget.style.setProperty("--pointer-y", "0px");
        event.currentTarget.style.setProperty("--pointer-back-x", "0px");
        event.currentTarget.style.setProperty("--pointer-back-y", "0px");
      }}
      aria-label="A visual representing work across interface, server, data, and production"
    >
      <div className="canvas-head">
        <span>PRODUCT SURFACE / FULL STACK</span>
        <span>YASIR_MARWAT</span>
      </div>
      <div className="canvas-stage" aria-hidden="true">
        <svg className="canvas-paths" viewBox="0 0 600 460" role="presentation">
          <path d="M96 104 C180 104 190 206 300 230" />
          <path d="M504 104 C420 104 410 206 300 230" />
          <path d="M300 230 C410 254 420 356 504 356" />
          <path d="M300 230 C190 254 180 356 96 356" />
        </svg>
        <span className="canvas-orbit canvas-orbit--one" />
        <span className="canvas-orbit canvas-orbit--two" />
        <span className="canvas-signal" />
        <span className="canvas-core">
          <i />
          YM
        </span>
        <span className="canvas-tag canvas-tag--ui">
          <i /> INTERFACE
        </span>
        <span className="canvas-tag canvas-tag--api">
          <i /> API
        </span>
        <span className="canvas-tag canvas-tag--data">
          <i /> DATA
        </span>
        <span className="canvas-tag canvas-tag--ship">
          <i /> SHIP
        </span>
        <span className="canvas-caption">
          ONE PRODUCT / FOUR RESPONSIBILITIES
        </span>
      </div>
      <div className="canvas-foot">
        <span>REACT / NEXT.JS</span>
        <span>NODE.JS / EXPRESS</span>
        <span>POSTGRESQL / REDIS</span>
      </div>
    </div>
  );
}
