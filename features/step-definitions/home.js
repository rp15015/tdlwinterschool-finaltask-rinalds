import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import { randomProductQty } from '../utils/utils.js';
import Page from '../page-objects/page.js';
import productPage from '../page-objects/product.page.js';

When('I input {string} in search', async function(element) {
    await homePage.searchForm.setValue(element);
});

When('I click on search button', async function() {
    await homePage.clickOnSearchButton.click();
});