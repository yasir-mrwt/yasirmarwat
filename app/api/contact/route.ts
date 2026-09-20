import { contactSchema } from "@/lib/contact";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { message: "The request body was not valid JSON." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      {
        message: "Please correct the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return Response.json(
      {
        message:
          "Contact delivery is not configured yet. Please use LinkedIn for now.",
        code: "CONTACT_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const { name, email, message } = parsed.data;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return Response.json(
      {
        message:
          "The message could not be delivered. Your text is still here so you can try again.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    message: "Message delivered. I’ll get back to you as soon as I can.",
  });
}
