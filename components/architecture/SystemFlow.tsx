"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useRef, useState } from "react";

export type FlowItem = { label: string; detail: string };

export function SystemFlow({
  items,
  label,
}: {
  items: readonly FlowItem[];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const flow = useRef<HTMLDivElement>(null);
  const isInView = useInView(flow, { amount: 0.15 });

  return (
    <div ref={flow} className="system-flow" aria-label={label}>
      <div className="flow-rail" aria-hidden="true">
        <motion.span
          animate={
            reduceMotion || !isInView
              ? { left: "0%" }
              : { left: [`0%`, `calc(100% - 9px)`] }
          }
          transition={
            reduceMotion || !isInView
              ? { duration: 0 }
              : { duration: 5.5, repeat: Infinity, ease: "linear" }
          }
        />
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={item.label}>
            <button
              type="button"
              className={active === index ? "is-active" : ""}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              onPointerEnter={() => setActive(index)}
            >
              <span className="node-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
              <span className="node-led" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ol>
      <div className="flow-inspector" aria-live="polite">
        <span>ACTIVE NODE / {String(active + 1).padStart(2, "0")}</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={items[active]?.label}
            initial={reduceMotion ? false : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
          >
            <strong>{items[active]?.label}.</strong> {items[active]?.detail}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="sr-only">
        {items.map((item) => `${item.label}: ${item.detail}`).join(" ")}
      </p>
    </div>
  );
}
