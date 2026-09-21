import { contactSchema } from "@/lib/contact";
import {
  EmailConfigurationError,
  EmailDeliveryError,
  sendContactEmail,
} from "@/lib/server/email";

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

  try {
    await sendContactEmail(parsed.data);
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      return Response.json(
        {
          message:
            "Contact delivery is not configured yet. Please use LinkedIn for now.",
          code: "CONTACT_NOT_CONFIGURED",
        },
        { status: 503 },
      );
    }

    if (error instanceof EmailDeliveryError) {
      return Response.json(
        {
          message:
            "The message could not be delivered. Your text is still here so you can try again.",
        },
        { status: 502 },
      );
    }

    return Response.json(
      {
        message:
          "The message could not be delivered. Your text is still here so you can try again.",
      },
      { status: 500 },
    );
  }

  return Response.json({
    message: "Message delivered. I’ll get back to you as soon as I can.",
  });
}
