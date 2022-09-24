const { setWorldConstructor } = require("@cucumber/cucumber");
const playwright = require("playwright");

class CustomWorld {
  async openUrl(url) {
    const browser = await playwright.chromium.launch({
      headless: true
    });
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      baseURL: "http://localhost:3000"
    });
    this.page = await context.newPage();
    await this.page.goto(url);
  }
}

setWorldConstructor(CustomWorld);
