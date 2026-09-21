import type { ContactInput } from "@/lib/contact";

export type EmailConfiguration = {
  fromEmail: string;
  fromName: string;
  toEmail: string;
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

export function createBrevoEmailPayload(
  input: ContactInput,
  configuration: EmailConfiguration,
) {
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return {
    sender: {
      name: configuration.fromName,
      email: configuration.fromEmail,
    },
    to: [{ email: configuration.toEmail }],
    replyTo: { name, email },
    subject: `Portfolio message from ${name}`,
    textContent: `New portfolio message\n\nName:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
    htmlContent: `<h2>New portfolio message</h2><p><strong>Name:</strong><br />${safeName}</p><p><strong>Email:</strong><br />${safeEmail}</p><p><strong>Message:</strong><br />${safeMessage}</p>`,
  };
}
