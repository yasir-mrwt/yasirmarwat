"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

export function HeroCanvas() {
  const canvas = useRef<HTMLDivElement>(null);
  const isInView = useInView(canvas, { amount: 0.1 });
  const reducedMotion = useReducedMotion();

  return (
    <div
      ref={canvas}
      className="identity-canvas"
      data-animate={isInView && !reducedMotion}
      aria-label="A visual representing work across interface, server, data, and production"
    >
      <div className="canvas-head">
        <span>PRODUCT SURFACE / FULL STACK</span>
        <span>YASIR_MARWAT</span>
      </div>
      <div className="canvas-stage" aria-hidden="true">
        <span className="canvas-orbit canvas-orbit--one" />
        <span className="canvas-orbit canvas-orbit--two" />
        <span className="canvas-signal" />
        <span className="canvas-core">YM</span>
        <span className="canvas-tag canvas-tag--ui">INTERFACE</span>
        <span className="canvas-tag canvas-tag--api">API</span>
        <span className="canvas-tag canvas-tag--data">DATA</span>
        <span className="canvas-tag canvas-tag--ship">SHIP</span>
      </div>
      <div className="canvas-foot">
        <span>REACT / NEXT.JS</span>
        <span>NODE.JS / EXPRESS</span>
        <span>POSTGRESQL / REDIS</span>
      </div>
    </div>
  );
}
