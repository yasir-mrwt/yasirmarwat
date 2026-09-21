import "server-only";

import type { ContactInput } from "@/lib/contact";
import {
  createBrevoEmailPayload,
  type EmailConfiguration,
} from "@/lib/server/email-payload";

const BREVO_TRANSACTIONAL_EMAIL_URL = "https://api.brevo.com/v3/smtp/email";
const EMAIL_TIMEOUT_MS = 10_000;

export class EmailConfigurationError extends Error {}
export class EmailDeliveryError extends Error {}

function getEmailConfiguration(): EmailConfiguration & { apiKey: string } {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const fromName = process.env.CONTACT_FROM_NAME;

  if (!apiKey || !toEmail || !fromEmail || !fromName) {
    throw new EmailConfigurationError("Contact email is not configured.");
  }

  return { apiKey, toEmail, fromEmail, fromName };
}

export async function sendContactEmail(input: ContactInput) {
  const configuration = getEmailConfiguration();
  const payload = createBrevoEmailPayload(input, configuration);

  let response: Response;
  try {
    response = await fetch(BREVO_TRANSACTIONAL_EMAIL_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": configuration.apiKey,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(EMAIL_TIMEOUT_MS),
    });
  } catch {
    throw new EmailDeliveryError("The email provider request failed.");
  }

  if (!response.ok) {
    throw new EmailDeliveryError("The email provider rejected the request.");
  }
}
