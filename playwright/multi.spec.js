import { test, firefox } from "@playwright/test";

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test("test", async ({ page }) => {
  const context = await firefox.launch();

  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");

  // new page
  const page1 = await context.newPage();

  // Go to https://www.google.com/search?q=acasjsad&oq=acasjsad&aqs=chrome..69i57.1009j0j1&sourceid=chrome&ie=UTF-8
  await page1.goto(
    "https://www.google.com/search?q=acasjsad&oq=acasjsad&aqs=chrome..69i57.1009j0j1&sourceid=chrome&ie=UTF-8"
  );

  // new page
  const page2 = await context.newPage();

  // Go to https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j5l3.1178j0j1&sourceid=chrome&ie=UTF-8
  await page2.goto(
    "https://www.google.com/search?q=a&oq=a&aqs=chrome..69i57j5l3.1178j0j1&sourceid=chrome&ie=UTF-8"
  );

  // Go to https://www.google.com/search?q=acasjsad&oq=acasjsad&aqs=chrome..69i57.1009j0j1&sourceid=chrome&ie=UTF-8
  await page1.goto(
    "https://www.google.com/search?q=acasjsad&oq=acasjsad&aqs=chrome..69i57.1009j0j1&sourceid=chrome&ie=UTF-8"
  );
});
