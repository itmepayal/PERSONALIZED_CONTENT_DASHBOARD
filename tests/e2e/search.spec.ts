import { test, expect } from "@playwright/test";

test("user can search content", async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard");

  const searchInput = page.getByPlaceholder("Search news, movies...");

  await searchInput.fill("AI");

  await expect(searchInput).toHaveValue("AI");
});
