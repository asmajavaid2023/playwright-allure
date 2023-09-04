//const { test, expect } = require('@playwright/test');

/*const { test, expect} =  require('../fixtures/base')
//const { test, expect } = require('@playwright/test');
//const { loginPage} =  require('../pages/loginPage');

const data = require('../data/config.json');

test.describe("e2e Test", () => {

    test.beforeEach(async ({page, loginPage}, testinfo) => {
        await loginPage
    });
    

});
*/
const { test, expect } = require('../fixtures/base');
const data = require("../data/config.json");

test.describe("e2e Test", () => {

    test.beforeEach(async ({ page, loginPage }, testInfo) => {
        await loginPage.goToLoginPage(data.url)
    })

    test('Login functionality', async ({ page, loginPage, inventoryPage, cartPage, infoPage, checkoutOverviewPage }) => {

        await loginPage.loginToWebsite(data.username, data.password);
        const itemrTitle = page.locator('#item_4_title_link');
        await expect(itemrTitle).toHaveText('Sauce Labs Backpack');
        await inventoryPage.addProductAndCartButton();
        const itemrCart = page.locator('//*[@id="header_container"]/div[2]/span');
        await expect(itemrCart).toHaveText('Your Cart');
        await cartPage.clickCheckOutButton();
        const itemrInfoPage = page.locator('//*[@id="header_container"]/div[2]/span');
        await expect(itemrInfoPage).toHaveText('Checkout: Your Information');
        await infoPage.enterPersonalInfo(data.first_name, data.last_name, data.postal_code);
        const itemCheckoutOverView = page.locator('//*[@id="header_container"]/div[2]/span');
        await expect(itemCheckoutOverView).toHaveText('Checkout: Overview');
        await checkoutOverviewPage.clickFinishButton();
        const itemOrderComplete = page.locator('//*[@id="checkout_complete_container"]/h2');
        await expect(itemOrderComplete).toHaveText('Thank you for your order!');

    })
})

/*
test('basic test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google');
});

test.only('Login functionality', async ({ page }) => {
    const Login = new loginPage(page);
    await Login.loginToWebsite(data.url,data.username,data.password);
    const itemrTitle = page.locator('#item_4_title_link');
    await expect(itemrTitle).toHaveText('Sauce Labs Backpack');
  });*/
