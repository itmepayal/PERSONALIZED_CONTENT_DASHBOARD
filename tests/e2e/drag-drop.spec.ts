import { test, expect } from "@playwright/test";

test("user can reorder content cards", async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard");

  const cards = page.locator('[data-testid="content-card"]');

  await cards.first().waitFor({ state: "visible" });

  const firstCard = cards.nth(0);
  const secondCard = cards.nth(1);

  const firstCardId = await firstCard.getAttribute("data-id");
  const secondCardId = await secondCard.getAttribute("data-id");

  await firstCard.dragTo(secondCard);

  await page.waitForTimeout(600);

  const newFirstCardId = await cards.nth(0).getAttribute("data-id");
  const newSecondCardId = await cards.nth(1).getAttribute("data-id");

  expect(newFirstCardId).toBe(secondCardId);
  expect(newSecondCardId).toBe(firstCardId);
});
