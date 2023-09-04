//const { test, expect } = require('@playwright/test');


const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google');
});

test.only('Login functionality', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Google');
});