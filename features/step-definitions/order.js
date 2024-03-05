import { Given, When, Then } from '@wdio/cucumber-framework'
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import cartPage from '../page-objects/cart.page.js';
import { randomProductPosition } from '../utils/utils.js';
import { randomProductQty } from '../utils/utils.js';

When('I select random product', async function() {
    const productPos = randomProductPosition();
    await productsPage.clickOnProduct(productPos).click();
});

When('I select quantity, size and color', async () => {
    // REVIEW: Why no page objects used?
    // const quantityInput = await $('#quantity_wanted');
    // await quantityInput.setValue('1');

    // Handling different size or color if applicable
    // REVIEW: Why no page objects used?
    // const sizeDropdown = await $('#group_1');
    // const sizeOptions = await sizeDropdown.$$('option');
    // const randomSizeIndex = Math.floor(Math.random() * sizeOptions.length);
    // await sizeOptions[randomSizeIndex].click();

    // REVIEW: Why no page objects used?
    // const colorOption = await $('//*[@id="color_to_pick_list"]//a');
    // await colorOption.click();
    await browser.debug();
});

When('I click Add to cart button', async function() {
    await browser.debug();
    // await productPage.clickOnAddToCart.waitForDisplayed();
    // await productPage.clickOnAddToCart.click();
});

When('I close the confirmation window', async function() {
    await productPage.clickOnClosingWindow.waitForDisplayed();
    await productPage.clickOnClosingWindow.click();
});


Then('I see correct number of items in the cart', async function() {
    await browser.debug();
    await expect(productPage.productQtyInCart).toHaveText(await productPage.addedProductQty.getText())
});