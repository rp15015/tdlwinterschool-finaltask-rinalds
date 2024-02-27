import { Given, When, Then } from '@wdio/cucumber-framework';
import searchPage from '../page-objects/search.page.js';

When('I see confirmation about search {string} element', async function(element) {
    await expect(searchPage.receivedSearchElement).toHaveText(expect.stringContaining(element.toUpperCase()));
});

Then('I see only {string} products on search page', async function(productKeyWord) {
    await expect(searchPage.receivedProductName).toHaveText(expect.stringContaining(productKeyWord));
});