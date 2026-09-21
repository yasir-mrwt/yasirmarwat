"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState, useSyncExternalStore } from "react";
import { SuccessSignal } from "@/components/ui/SuccessSignal";
import { contactSchema } from "@/lib/contact";

type Field = "name" | "email" | "message";
type Values = Record<Field, string>;
const initialValues: Values = { name: "", email: "", message: "" };
const subscribeToHydration = () => () => {};

export function ContactForm() {
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  function update(field: Field, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const website = String(form.get("website") ?? "");
    const parsed = contactSchema.safeParse({ ...values, website });
    if (!parsed.success) {
      const fields = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fields.name?.[0],
        email: fields.email?.[0],
        message: fields.message?.[0],
      });
      setStatus("error");
      setMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("pending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as {
        message?: string;
        errors?: Record<string, string[]>;
      };
      if (!response.ok) {
        setErrors({
          name: result.errors?.name?.[0],
          email: result.errors?.email?.[0],
          message: result.errors?.message?.[0],
        });
        setStatus("error");
        setMessage(
          result.message ?? "The message could not be sent. Please try again.",
        );
        return;
      }

      setValues(initialValues);
      setErrors({});
      setStatus("success");
      setMessage("Thanks — I’ll get back to you soon.");
    } catch {
      setStatus("error");
      setMessage(
        "The network request failed. Your message is still here so you can try again.",
      );
    }
  }

  return (
    <div className="contact-workspace">
      <div className="contact-visual" data-status={status} aria-live="polite">
        {status === "success" ? (
          <div className="contact-success">
            <SuccessSignal />
            <div>
              <strong>Message sent.</strong>
              <p>Thanks — I’ll get back to you soon.</p>
            </div>
          </div>
        ) : (
          <div className="contact-idle" aria-hidden="true">
            <span className="contact-idle-node contact-idle-node--one" />
            <span className="contact-idle-node contact-idle-node--two" />
            <span className="contact-idle-node contact-idle-node--three" />
            <svg viewBox="0 0 480 150" role="presentation">
              <path d="M20 76 C100 76 100 28 180 28 S260 124 340 124 S400 76 460 76" />
            </svg>
            <span className="mono-label">
              {status === "pending"
                ? "DELIVERING YOUR MESSAGE"
                : "A CLEAR NOTE / A REAL RESPONSE"}
            </span>
          </div>
        )}
      </div>
      <form
        className="contact-form"
        data-ready={hydrated}
        onSubmit={submit}
        noValidate
      >
        <div className="form-row">
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            {errors.name ? (
              <p id="name-error" className="field-error">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email ? (
              <p id="email-error" className="field-error">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>
        <div className="field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message ? (
            <p id="message-error" className="field-error">
              {errors.message}
            </p>
          ) : null}
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="form-footer">
          <button
            className="button button--primary"
            type="submit"
            disabled={status === "pending"}
          >
            {status === "pending" ? "Sending…" : "Send message"}{" "}
            <ArrowUpRight size={16} />
          </button>
          <div
            className={`form-status form-status--${status}`}
            aria-live="polite"
          >
            {message ? (
              <p>{message}</p>
            ) : (
              <p>Messages are validated before delivery.</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
