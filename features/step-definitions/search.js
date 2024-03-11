import { Given, When, Then } from '@wdio/cucumber-framework';
import searchPage from '../page-objects/search.page.js';

// REVIEW: This should be a Then step
When('I see confirmation about search {string} element', async function(element) {
    await expect(searchPage.receivedSearchElement).toHaveText(expect.stringContaining(element.toUpperCase()));
});

Then('I see only {string} products on search page', async function(productKeyWord) {
    // REVIEW: You are only validating the first product
    await expect(searchPage.receivedProductName).toHaveText(expect.stringContaining(productKeyWord));
});