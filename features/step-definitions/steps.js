const { Given, Then } = require('@cucumber/cucumber');
// const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

// let browser;
// let page;

Given('I open the Playwright website', async function () {
  console.log(this); // Debug: Check the context

  await this.launchBrowser();
  await this.page.goto('https://playwright.dev/');
});

Then('I should see the title {string}', async function (expectedTitle) {
  console.log(this); // Debug: Check the context
  const title = await this.page.title();
  expect(title).toBe(expectedTitle);
  await this.closeBrowser();

});
