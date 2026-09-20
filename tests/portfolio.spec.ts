import { expect, test } from "@playwright/test";

test("homepage loads the complete engineering narrative", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "interface",
  );
  await expect(
    page.getByRole("heading", { name: "Demo System" }),
  ).toBeVisible();
  await expect(page.getByText("DEMONSTRATION DATA")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "How I think about reliability." }),
  ).toBeVisible();
  await expect(page.locator("article.project-system")).toHaveCount(1);
});

test("navigation reaches the expected sections", async ({ page }, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name.startsWith("desktop")) {
    await page
      .getByRole("navigation", { name: "Primary navigation" })
      .getByRole("link", { name: "Work" })
      .click();
  } else {
    await page.getByRole("button", { name: /menu/i }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: /Work/ })
      .click();
  }
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();
});

test("mobile menu opens, closes, and locks scrolling", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name.startsWith("desktop"),
    "Mobile-only behavior",
  );
  await page.goto("/");
  const menuTrigger = page.getByRole("button", { name: /menu/i });
  const closeButton = page.getByRole("button", { name: "Close menu" });
  const mobileNavigation = page.getByRole("navigation", {
    name: "Mobile navigation",
  });
  await menuTrigger.click();
  await expect(page.locator("body")).toHaveClass(/menu-open/);
  await expect(mobileNavigation).toBeVisible();
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    mobileNavigation.getByRole("link", { name: /Résumé/ }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();
  await closeButton.click();
  await expect(page.locator("body")).not.toHaveClass(/menu-open/);
  await expect(menuTrigger).toBeFocused();
});

test("recruiter fast path opens and closes accessibly", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /open fast view/i }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByText("Backend-leaning full-stack engineer"),
  ).toBeVisible();
  await dialog.getByRole("button", { name: "Close fast view" }).click();
  await expect(dialog).not.toBeVisible();
});

test("project and failure interactions expose details", async ({ page }) => {
  await page.goto("/");
  const architecture = page.locator(".project-architecture");
  await architecture.getByRole("button", { name: /Database/ }).click();
  await expect(architecture.getByText(/source of truth/)).toBeVisible();
  await page.getByRole("button", { name: /Database unavailable/ }).click();
  await expect(page.getByText(/Fail within a bounded timeout/)).toBeVisible();
});

test("resume route and contact actions remain honest", async ({ page }) => {
  await page.goto("/");
  await page
    .locator("#contact")
    .getByRole("link", { name: "View résumé" })
    .click();
  await expect(page).toHaveURL(/\/resume$/);
  await expect(
    page.getByRole("heading", { name: "TODO: add name" }),
  ).toBeVisible();
  await page.goto("/#contact");
  await expect(
    page.getByRole("button", { name: "TODO: add email" }),
  ).toBeDisabled();
});

test("reduced motion preserves content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Demo System" }),
  ).toBeVisible();
  await expect(
    page.getByText("REQUEST_LIFECYCLE", { exact: true }).first(),
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

test("expandable responsibility works with keyboard", async ({ page }) => {
  await page.goto("/");
  const summary = page.locator(".responsibility summary").first();
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".responsibility").first()).toHaveAttribute(
    "open",
    "",
  );
});
