import { Given, When, Then } from "@wdio/cucumber-framework";
import cartPage from "../page-objects/cart.page.js";
import productPage from "../page-objects/product.page.js";
import { browser, $ } from "@wdio/globals";

When('I click Proceed to checkout button', async function() {
    await productPage.clickOnProceedToCheckout.waitForClickable();
    await productPage.clickOnProceedToCheckout.click();

    await cartPage.clickOnProceedToCheckout.click();
});

When('I click on item remove button', async function() {
    await cartPage.clickOnItemRemoveButton.click();
});

Then('I see {word} message', async function(word) {
    await expect(cartPage.isEmptyMessage).toHaveText(word); 
});                                                         