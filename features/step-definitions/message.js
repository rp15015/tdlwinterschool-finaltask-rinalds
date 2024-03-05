import { Given, When, Then } from '@wdio/cucumber-framework';
import cartPage from '../page-objects/cart.page.js';

// REVIEW: The name of the step implies that it's more generic than it's actually is.
// I name it to somehting more specific to creating account message.
Then('I see {string} message', async function(message) {
    await expect(cartPage.createAnAccountMessage).toHaveText(message.toUpperCase());
});