import { expect, test } from "@playwright/test";
import { createBrevoEmailPayload } from "../lib/server/email-payload";

test("homepage presents the personal portfolio in recruiter order", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: /Full-Stack Engineer/ }),
  ).toBeVisible();
  await expect(
    page.getByText("Yasir Marwat", { exact: true }).first(),
  ).toBeVisible();
  await expect(page.locator("body")).not.toContainText(
    /professionally known|also known as/i,
  );
  const order = await page
    .locator("main > section")
    .evaluateAll((sections) => sections.map((section) => section.id));
  expect(order).toEqual([
    "home",
    "work",
    "experience",
    "focus",
    "stack",
    "about",
    "contact",
  ]);
  await expect(page.locator("body")).not.toContainText("TODO");
  await expect(page.locator("body")).not.toContainText("QUESTIONS_I_ASK");
});

test("navigation follows the page sequence", async ({ page }, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name.startsWith("desktop")) {
    const navigation = page.getByRole("navigation", {
      name: "Primary navigation",
    });
    await expect(
      navigation.getByRole("link").allTextContents(),
    ).resolves.toEqual([
      "Work",
      "Experience",
      "Stack",
      "About",
      "Contact",
      "Résumé",
    ]);
    await navigation.getByRole("link", { name: "Work" }).click();
  } else {
    await page.getByRole("button", { name: /menu/i }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Work" })
      .click();
  }
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();
});

test("mobile menu traps focus, closes with Escape, and restores focus", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.startsWith("desktop"),
    "Mobile-only behavior",
  );
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /menu/i });
  const close = page.getByRole("button", { name: "Close menu" });
  const mobileMenu = page.locator("#mobile-menu");
  await trigger.click();
  await expect(page.locator("body")).toHaveClass(/menu-open/);
  await expect(mobileMenu).toHaveCSS("background-color", "rgb(10, 12, 15)");
  await expect(close).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    mobileMenu.getByRole("link", { name: /LinkedIn/ }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator("body")).not.toHaveClass(/menu-open/);
  await expect(trigger).toBeFocused();
});

test("experience uses the verified companies and junior-level scope", async ({
  page,
}) => {
  await page.goto("/#experience");
  const experience = page.locator("#experience");
  await expect(experience.getByText("Arch Technologies")).toBeVisible();
  await expect(experience.getByText("Testsolz")).toBeVisible();
  await expect(experience).toContainText("Islamabad, Pakistan");
  await expect(experience).toContainText("Remote");
  await expect(experience).toContainText("Peshawar, Pakistan");
  await expect(experience).toContainText("On-site · Paid");
  await expect(experience).toContainText("November 2025 — January 2026");
  await expect(experience).toContainText("January 2026 — July 2026");
  await expect(experience).not.toContainText(
    /senior|led architecture|revenue/i,
  );
});

test("selected work presents five real products with responsive art direction", async ({
  page,
}) => {
  await page.goto("/#work");
  await expect(page.locator("#work")).not.toContainText(
    "Each case study will show the problem",
  );
  await expect(page.locator(".project-showcase")).toHaveCount(5);
  for (const name of [
    "InflowAPM",
    "Socially AI",
    "AutoCore",
    "UniBro",
    "CodeLoop",
  ]) {
    await expect(
      page.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
  }
  await expect(page.locator("#work")).not.toContainText(
    /placeholder|content slot/i,
  );
  await expect(
    page.locator('.project-picture source[media="(max-width: 699px)"]'),
  ).toHaveCount(5);
  const projectImages = page.locator(".project-picture img");
  for (let index = 0; index < (await projectImages.count()); index += 1) {
    const image = projectImages.nth(index);
    await image.scrollIntoViewIfNeeded();
    await image.evaluate(
      (element) =>
        (element as HTMLImageElement).complete ||
        new Promise((resolve) =>
          element.addEventListener("load", resolve, { once: true }),
        ),
    );
  }
  const imageSources = await projectImages.evaluateAll((images) =>
    images.map((image) => (image as HTMLImageElement).currentSrc),
  );
  const mobile = page.viewportSize()!.width <= 699;
  expect(
    imageSources.every((source) =>
      decodeURIComponent(source).includes(
        mobile ? "-mobile.webp" : "-web.webp",
      ),
    ),
  ).toBe(true);
  await expect(
    page.getByRole("link", { name: "View InflowAPM live" }).first(),
  ).toHaveAttribute("href", "https://inflowapm.vercel.app/");
  await expect(
    page.getByRole("link", { name: "View Socially AI live" }).first(),
  ).toHaveAttribute("href", "https://socially-aii.netlify.app/");
});

test("mobile projects use a manual snap carousel with a current indicator", async ({
  page,
}, testInfo) => {
  test.skip(
    page.viewportSize()!.width > 699,
    "The native project carousel is mobile-only",
  );
  await page.goto("/#work");
  const collection = page.locator(".project-collection");
  await expect(collection).toHaveCSS("scroll-snap-type", "x mandatory");
  await expect(page.getByText("01", { exact: true }).last()).toBeVisible();
  const next = page.getByRole("button", { name: "Show next project" });
  await next.click();
  await expect(page.getByText("02", { exact: true }).last()).toBeVisible();
  await expect(collection.locator(".project-showcase").nth(1)).toBeInViewport();
  expect(testInfo.project.name).toMatch(/^mobile-/);
});

test("recruiter fast view is polished and keyboard dismissible", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /60-second profile/i });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("Yasir Marwat", { exact: true })).toBeVisible();
  await expect(
    dialog.getByText("Full-Stack Engineer · Backend-Leaning"),
  ).toBeVisible();
  await expect(dialog).not.toContainText("TODO");
  await expect(dialog.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
    "href",
    "https://github.com/yasir-mrwt",
  );
  await expect(
    dialog.getByRole("link", { name: "View résumé" }),
  ).toHaveAttribute("href", "/muhammad_yasir.pdf");
  const close = dialog.getByRole("button", { name: "Close fast view" });
  await expect(close).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("link", { name: "Contact" })).toBeFocused();
  if (testInfo.project.name.startsWith("desktop")) {
    const viewport = page.viewportSize();
    expect(viewport).not.toBeNull();
    await expect
      .poll(async () => {
        const box = await dialog.boundingBox();
        return box
          ? Math.abs(box.x + box.width / 2 - viewport!.width / 2)
          : Number.POSITIVE_INFINITY;
      })
      .toBeLessThan(3);
    await expect
      .poll(async () => {
        const box = await dialog.boundingBox();
        return box
          ? Math.abs(box.y + box.height / 2 - viewport!.height / 2)
          : Number.POSITIVE_INFINITY;
      })
      .toBeLessThan(3);
  }
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("resume PDF and verified social actions resolve", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: /GitHub/ }).first(),
  ).toHaveAttribute("href", "https://github.com/yasir-mrwt");
  await expect(
    page.getByRole("link", { name: /LinkedIn/ }).first(),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/muhammad-yasir-50b240315/",
  );
  const resume = page
    .getByRole("link", { name: "Résumé", exact: true })
    .first();
  await expect(resume).toHaveAttribute("href", "/muhammad_yasir.pdf");
  await expect(resume).toHaveAttribute("target", "_blank");
  const pdf = await request.get("/muhammad_yasir.pdf");
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()["content-type"]).toContain("application/pdf");
});

test("contact form validates and preserves values when Brevo rejects delivery", async ({
  page,
}) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 502,
      contentType: "application/json",
      body: JSON.stringify({
        message:
          "The message could not be delivered. Your text is still here so you can try again.",
      }),
    }),
  );
  await page.goto("/#contact");
  await expect(page.locator(".contact-form")).toHaveAttribute(
    "data-ready",
    "true",
  );
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText("Enter at least 2 characters.")).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await page.getByLabel("Name").fill("Test Sender");
  await page.getByLabel("Email").fill("sender@example.com");
  await page
    .getByLabel("Message")
    .fill("This is a valid test message for the portfolio contact form.");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText(/message could not be delivered/i)).toBeVisible();
  await expect(page.getByLabel("Message")).toHaveValue(
    "This is a valid test message for the portfolio contact form.",
  );
  await expect(page.locator(".success-signal")).toHaveCount(0);
});

test("contact form shows success only after a successful server response", async ({
  page,
}) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "Message delivered." }),
    }),
  );
  await page.goto("/#contact");
  await expect(page.locator(".contact-form")).toHaveAttribute(
    "data-ready",
    "true",
  );
  await page.getByLabel("Name").fill("Test Sender");
  await page.getByLabel("Email").fill("sender@example.com");
  await page
    .getByLabel("Message")
    .fill("This request receives a controlled successful response.");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText("Message sent.", { exact: true })).toBeVisible();
  await expect(page.locator(".success-signal")).toHaveCount(1);
  await expect(page.getByLabel("Message")).toHaveValue("");
});

test("contact API rejects invalid submissions", async ({ request }) => {
  const response = await request.post("/api/contact", {
    data: { name: "", email: "bad", message: "short" },
  });
  expect(response.status()).toBe(400);
  await expect(response.json()).resolves.toMatchObject({
    message: "Please correct the highlighted fields.",
  });
});

test("contact API reports missing server configuration without false success", async ({
  request,
}) => {
  const response = await request.post("/api/contact", {
    data: {
      name: "Test Sender",
      email: "sender@example.com",
      message:
        "This valid request must not report success without configuration.",
      website: "",
    },
  });
  expect(response.status()).toBe(503);
  await expect(response.json()).resolves.toMatchObject({
    code: "CONTACT_NOT_CONFIGURED",
  });
});

test("Brevo payload uses visitor Reply-To and escapes message HTML", () => {
  const payload = createBrevoEmailPayload(
    {
      name: "Sarah Ahmed",
      email: "sarah@company.com",
      message: "Hello <script>alert('unsafe')</script> from the hiring team.",
      website: "",
    },
    {
      fromName: "Yasir Marwat",
      fromEmail: "contact@yasirmarwat.site",
      toEmail: "portfolio@example.com",
    },
  );

  expect(payload.sender).toEqual({
    name: "Yasir Marwat",
    email: "contact@yasirmarwat.site",
  });
  expect(payload.replyTo).toEqual({
    name: "Sarah Ahmed",
    email: "sarah@company.com",
  });
  expect(payload.to).toEqual([{ email: "portfolio@example.com" }]);
  expect(payload.htmlContent).not.toContain("<script>");
  expect(payload.htmlContent).toContain("&lt;script&gt;");
});

test("identity metadata and crawler endpoints are available", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://yasirmarwat.site",
  );
  const schema = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(schema).toContain('"name":"Yasir Marwat"');
  expect(schema).toContain('"alternateName":"Muhammad Yasir"');
  expect(schema).toContain('"@type":"ProfilePage"');
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("https://yasirmarwat.site/sitemap.xml");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("https://yasirmarwat.site");
  expect(sitemap).not.toContain("case-study-template");
});

test("reduced motion preserves the complete story", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Evidence belongs here." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Where I contribute across a product." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Let’s talk about the work." }),
  ).toBeVisible();
});

test("stack workspace is grouped and keyboard or touch interactive", async ({
  page,
}, testInfo) => {
  await page.goto("/#stack");
  await expect(page.locator(".contact-form")).toHaveAttribute(
    "data-ready",
    "true",
  );
  const workspace = page.locator(".stack-workspace");
  await expect(workspace).toHaveAttribute("data-ready", "true");
  if (testInfo.project.name.startsWith("desktop")) {
    const desktop = workspace.locator(".stack-desktop");
    await expect(desktop.getByRole("button")).toHaveCount(6);
    await desktop.getByRole("button", { name: /Data & Async/ }).focus();
    await expect(desktop.locator(".stack-stage")).toContainText("Data & Async");
    await expect(desktop.locator(".stack-stage")).toContainText("BullMQ");
    await expect(desktop.locator(".stack-stage")).toContainText("InflowAPM");
  } else {
    const mobile = workspace.locator(".stack-mobile");
    await expect(mobile.locator('button[aria-expanded="true"]')).toHaveCount(0);
    const trigger = mobile.getByRole("button", { name: /Data & Async/ });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(mobile.locator("#stack-panel-2")).toContainText("BullMQ");
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(mobile.locator('button[aria-expanded="true"]')).toHaveCount(0);
  }
});

test("about uses a balanced product trace composition", async ({ page }) => {
  await page.goto("/#about");
  const about = page.locator("#about");
  await expect(about.getByText("PRODUCT_TRACE")).toBeVisible();
  for (const stage of ["Interface", "API", "Data", "Deployment"]) {
    await expect(about.getByText(stage, { exact: true })).toBeVisible();
  }
  await expect(about).toContainText("CURIOUS");
  await expect(about).toContainText("IMPROVE");
});

test("smooth scrolling is declared and the browser console stays clean", async ({
  page,
}) => {
  const issues: string[] = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      issues.push(message.text());
    }
  });
  page.on("pageerror", (error) => issues.push(error.message));
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute(
    "data-scroll-behavior",
    "smooth",
  );
  await expect(page.locator(".contact-form")).toHaveAttribute(
    "data-ready",
    "true",
  );
  const pdf = await page.request.get("/muhammad_yasir.pdf");
  expect(pdf.status()).toBe(200);
  expect(issues).toEqual([]);
});

test("page has no obvious horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});
