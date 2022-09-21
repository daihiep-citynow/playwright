import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("User opens Playwright tool url:{string}", async (url) => {
  // Write code here that turns the phrase above into concrete   actions
  await global.page.goto(url);
});

When("website contains menu link {string}", async (link) => {
  // Write code here that turns the phrase above into concrete actions
  const lnkAPI = await global.page.locator(`a:has-text(${link})`);
  expect(lnkAPI).toHaveText("API");
});
Then("website link API can be opened", async () => {
  // Write code here that turns the phrase above into concrete actions
  const lnkAPI = await global.page.locator('a:has-text("API")');
  expect(lnkAPI).toHaveText("API");
});
