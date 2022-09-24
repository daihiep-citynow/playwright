/* eslint-disable func-names */
const { expect } = require("@playwright/test");

const { When, Then } = require("@cucumber/cucumber");

When("I visit homepage F12", { timeout: 60 * 1000 }, async function () {
  await this.openUrl("/");
});

Then("I should see a F12 Button", async function () {
  await expect(this.page.locator('[data-test-id="F12"]')).toBeVisible();
});

Then("I press F12 button first", async function () {
  await this.page.keyboard.press("F12");
});

Then("I can see EN in F12 button", async function () {
  await expect(this.page.locator('[data-test-id="F12"]')).toContainText("EN");
});

Then("I press F12 button second", async function () {
  await this.page.keyboard.press("F12");
});

Then("I can see VN in F12 button", async function () {
  await expect(this.page.locator('[data-test-id="F12"]')).toContainText("VN");
});
