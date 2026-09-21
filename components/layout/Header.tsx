"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profileData } from "@/data/profile";

const navigation = [
  ["Work", "work"],
  ["Experience", "experience"],
  ["Stack", "stack"],
  ["About", "about"],
  ["Contact", "contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const closeButton = useRef<HTMLButtonElement>(null);
  const openButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const sections = navigation
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70%", threshold: [0, 0.1, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    let frame: number | undefined;
    if (open) {
      frame = window.requestAnimationFrame(() => closeButton.current?.focus());
      wasOpen.current = true;
    } else if (wasOpen.current) {
      frame = window.requestAnimationFrame(() => openButton.current?.focus());
      wasOpen.current = false;
    }
    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (!open) return;
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menu.current) return;
      const focusable = Array.from(
        menu.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="header-inner">
        <Link className="wordmark" href="#home">
          <span aria-hidden="true">YM</span>
          <span className="wordmark-copy">YASIR MARWAT</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, id]) => (
            <Link
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </Link>
          ))}
          <a href={profileData.resumeUrl} target="_blank" rel="noreferrer">
            Résumé
          </a>
        </nav>
        <div className="header-socials">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={17} />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={17} />
          </a>
        </div>
        <button
          ref={openButton}
          className="menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden="true" size={20} /> Menu
        </button>
      </div>

      <div
        ref={menu}
        id="mobile-menu"
        className="mobile-menu"
        data-open={open}
        aria-hidden={!open}
      >
        <div className="mobile-menu-top">
          <span className="mono-label">YASIR MARWAT / NAVIGATION</span>
          <button
            ref={closeButton}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map(([label, id]) => (
            <Link
              key={id}
              href={`#${id}`}
              tabIndex={open ? 0 : -1}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Résumé
          </a>
        </nav>
        <div className="mobile-menu-socials">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
          >
            GitHub ↗
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
          >
            LinkedIn ↗
          </a>
        </div>
        <p>
          {profileData.location} · {profileData.timezone}
        </p>
      </div>
    </header>
  );
}
