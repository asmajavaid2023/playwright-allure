const Base =  require('@playwright/test');
const { loginPage } = require('../pages/loginPage');
const { inventoryPage } = require('../pages/inventoryPage');
const { cartPage } = require('../pages/cartPage');
const { infoPage } = require('../pages/infoPage');
const { checkoutOverviewPage } = require('../pages/checkoutOverviewPage');

exports.test = Base.test.extend({
    loginPage: async ({page}, use) => {
        await use(new loginPage(page))
    },
    inventoryPage: async ({page}, use) => {
        await use(new inventoryPage(page))
    },
    cartPage: async ({page}, use) => {
        await use(new cartPage(page))
    },
    infoPage: async ({page}, use) => {
        await use(new infoPage(page))
    },
    checkoutOverviewPage: async ({page}, use) => {
        await use(new checkoutOverviewPage(page))
    }
})

exports.verify = Base.expect
exports.expect = Base.expect
exports.request = Base.request