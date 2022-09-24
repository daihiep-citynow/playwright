/* eslint-disable func-names */
const { expect } = require("@playwright/test");

const { When, Then } = require("@cucumber/cucumber");

When("I visit homepage F3", { timeout: 60 * 1000 }, async function () {
  await this.openUrl("/");
});

Then("I should see a F3 Button", async function () {
  await expect(this.page.locator('[data-test-id="F3"]')).toBeVisible();
});

Then("I press F3 button first", async function () {
  await this.page.keyboard.press("F3");
});

Then("I can see 3 number F3", async function () {
  await expect(this.page.locator('[data-testid="page-number"]')).toHaveText(
    "3"
  );
});

Then("I press F3 button second", async function () {
  await this.page.keyboard.press("F3");
});

Then("I can see 2 number F3", async function () {
  await expect(this.page.locator('[data-testid="page-number"]')).toHaveText(
    "2"
  );
});

Then("I press F3 button third", async function () {
  await this.page.keyboard.press("F3");
});

Then("I can see 1 number F3", async function () {
  await expect(this.page.locator('[data-testid="page-number"]')).toHaveText(
    "1"
  );
});
