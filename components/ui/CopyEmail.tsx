"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email }: { email: string | null }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      className="button button--secondary"
      type="button"
      onClick={copy}
      disabled={!email}
    >
      {copied ? (
        <Check size={16} aria-hidden="true" />
      ) : (
        <Copy size={16} aria-hidden="true" />
      )}
      {email ? (copied ? "Copied" : "Copy email") : "TODO: add email"}
    </button>
  );
}
