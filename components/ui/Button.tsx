import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  download?: boolean;
  className?: string;
  target?: string;
};

export function Button({
  href,
  children,
  variant = "secondary",
  download,
  className = "",
  target,
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`;
  const external = href.startsWith("http");

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        target={target ?? "_blank"}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} download={download} target={target}>
      {children}
    </Link>
  );
}
