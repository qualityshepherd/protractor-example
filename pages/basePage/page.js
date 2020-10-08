var EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;

import SELECTORS from './selectors';

const setingsIcon = element(by.css(SELECTORS.settingsIcon));

export default class BasePage {
    constructor() {
        /**
         * wrap this.timeout. (ms)
         */
        this.timeout = {
            'xs': 420,
            's' : 1000,
            'm' : 2000,
            'l' : 5000,
            'xl': 9000,
            'xxl': 15000,
            'xxxl': 25000
        };

        /**
         * get an element's width
         * extends protractor's ElementFinder
         * @return {int} - the width of the element
         */
        protractor.ElementFinder.prototype.getWidth = async function() {
            return await this.getSize().then(size => {
                return size.width;
            });
        };
    }


    // NOTICING LOOPING --- > HELP HERE !!

    // async navigateToMenuItem() {
    //     return browser.wait(async () => {
    //         await setingsIcon.click();
    //         return await this.settingsMenu.click(); 
    //     }, this.timeout.xl, 'timeout: on waiting to click. The menu item is: ' + this.settingsMenu);
    // }

    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    async loaded() {
        return browser.wait(async () => {
            return await this.pageLoaded();
        }, this.timeout.xxl, 'timeout: waiting for page to load. The url is: ' + this.url);
    }

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via loaded()
     * @requires page have both `url` and `pageLoaded` properties
     */
    async goto() {
        await browser.get(this.url, this.timeout.xl);
        return this.loaded(); // wait for the url to change to new url and then return
    }

    /**
     * Wrappers for expected conditions
     * Created for Readability
     * @returns {ExpectedCondition}
     */
    isVisible(locator) {
        return EC.visibilityOf(locator);
    }

    isNotVisible(locator) {
        return EC.invisibilityOf(locator);
    }

    inDom(locator) {
        return browser.wait(EC.presenceOf($(locator, 5000)));
    }

    notInDom(locator) {
        return EC.stalenessOf(locator);
    }

    isClickable(locator) {
        return EC.elementToBeClickable(locator);
    }

    hasText(locator, text) {
        return EC.textToBePresentInElement(locator, text);
    }

    and(arrayOfFunctions) {
        return EC.and(arrayOfFunctions);
    }

    titleIs(title) {
        return EC.titleIs(title);
    }

}