import { expect, test } from "@playwright/test";

test("homepage presents the personal portfolio in recruiter order", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: /Full-Stack Engineer/ }),
  ).toBeVisible();
  await expect(
    page.getByText("Muhammad Yasir", { exact: true }).first(),
  ).toBeVisible();
  await expect(page.getByText(/also known as Yasir Marwat/i)).toBeVisible();
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
  await expect(close).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    mobileMenu.getByRole("link", { name: /LinkedIn/ }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator("body")).not.toHaveClass(/menu-open/);
  await expect(trigger).toBeFocused();
});

test("selected work stays honest until verified projects are supplied", async ({
  page,
}) => {
  await page.goto("/#work");
  await expect(page.locator(".project-feature")).toHaveCount(1);
  await expect(
    page.getByText("INTERNAL CONTENT TEMPLATE · NOT A SHIPPED PROJECT"),
  ).toBeVisible();
  await expect(page.locator(".project-actions")).toHaveCount(0);
  await expect(page.getByText(/users|revenue|performance gain/i)).toHaveCount(
    0,
  );
});

test("recruiter fast view is polished and keyboard dismissible", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /recruiter fast view/i });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByText("Full-Stack Engineer · Backend-Leaning"),
  ).toBeVisible();
  await expect(dialog).not.toContainText("TODO");
  await expect(dialog.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
    "href",
    "https://github.com/yasir-mrwt",
  );
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("resume and verified social actions resolve", async ({ page }) => {
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
  await page.getByRole("link", { name: "Résumé", exact: true }).first().click();
  await expect(page).toHaveURL(/\/resume$/);
  await expect(
    page.getByRole("heading", { name: "Muhammad Yasir" }),
  ).toBeVisible();
  await expect(page.locator("body")).not.toContainText("TODO");
});

test("contact form validates and preserves values when delivery is unavailable", async ({
  page,
}) => {
  await page.goto("/#contact");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText("Enter at least 2 characters.")).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await page.getByLabel("Name").fill("Test Sender");
  await page.getByLabel("Email").fill("sender@example.com");
  await page
    .getByLabel("Message")
    .fill("This is a valid test message for the portfolio contact form.");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(
    page.getByText(/Contact delivery is not configured yet/),
  ).toBeVisible();
  await expect(page.getByLabel("Message")).toHaveValue(
    "This is a valid test message for the portfolio contact form.",
  );
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
  await page.getByLabel("Name").fill("Test Sender");
  await page.getByLabel("Email").fill("sender@example.com");
  await page
    .getByLabel("Message")
    .fill("This request receives a controlled successful response.");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(
    page.getByText("Message delivered.", { exact: true }),
  ).toBeVisible();
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
  expect(schema).toContain('"alternateName":"Yasir Marwat"');
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

test("page has no obvious horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});
