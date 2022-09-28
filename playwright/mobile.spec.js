// @ts-check
const { test } = require("@playwright/test");

test("homepage has", async ({ page }) => {
  await page.goto("https://www.lazada.vn");
});
