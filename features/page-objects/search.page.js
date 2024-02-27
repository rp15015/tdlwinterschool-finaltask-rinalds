import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SearchPage extends Page {
    get receivedSearchElement() { return $('.lighter'); }
    get receivedProductName() { return $('[itemprop=name] a') }
}

export default new SearchPage();