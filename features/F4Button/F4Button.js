/* eslint-disable func-names */
const { expect } = require("@playwright/test");

const { When, Then } = require("@cucumber/cucumber");

When("I visit homepage F4", { timeout: 60 * 1000 }, async function () {
  await this.openUrl("/");
});

Then("I should see a F4 Button", async function () {
  await expect(this.page.locator('[data-test-id="F4"]')).toBeVisible();
});

Then("I press F4 button first", async function () {
  await this.page.keyboard.press("F4");
});

Then("I can see 140 room", async function () {
  const rooms = await this.page.locator('[data-test-id="home-content"] > div');
  await expect(rooms).toHaveCount(140);
});

Then("I press F4 button second", async function () {
  await this.page.keyboard.press("F4");
});

Then("I can't see checkout room", async function () {
  const rooms = await this.page.locator(
    '[data-test-id="home-content"] > div:visible'
  );
  await expect(rooms).not.toContain("rgb(183, 154, 91)");
});
