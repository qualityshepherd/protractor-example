
export default class BasePage {
    constructor() {
        /**
         * wrap this.timeout. (ms) in t-shirt sizes
         */
        this.timeout = {
            'xs': 420,
            's' : 1000,
            'm' : 2000,
            'l' : 5000,
            'xl': 9000,
            'xxl': 15000
        };

        /**
         * get an element's width
         * extends protractor's ElementFinder
         * @return {int} - the width of the element
         */
        protractor.ElementFinder.prototype.getWidth = function() {
            return this.getSize().then(size => {
                return size.width;
            });
        };
    }

    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    at() {
        return browser.wait(this.pageLoaded(), this.timeout.xl);
    }

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via at()
     * @requires page have both `url` and `pageLoaded` properties
     */
    to() {
        browser.get(this.url, this.timeout.xl);
        return this.at();
    }

    /**
     * Wrappers for expected conditions
     * I find ECs to be poorly named, so we wrap them in methods
     * that are 9% more sexy, and allow us to add logging, etc...
     * @returns {ExpectedCondition}
     */
    isVisible(locator) {
        return protractor.ExpectedConditions.visibilityOf(locator);
    }

    isNotVisible(locator) {
        return protractor.ExpectedConditions.invisibilityOf(locator);
    }

    inDom(locator) {
        return protractor.ExpectedConditions.presenceOf(locator);
    }

    notInDom(locator) {
        return protractor.ExpectedConditions.stalenessOf(locator);
    }

    isClickable(locator) {
        return protractor.ExpectedConditions.elementToBeClickable(locator);
    }

    hasText(locator, text) {
        return protractor.ExpectedConditions.textToBePresentInElement(locator, text);
    }

    and(arrayOfFunctions) {
        return protractor.ExpectedConditions.and(arrayOfFunctions);
    }

    titleIs(title) {
        return protractor.ExpectedConditions.titleIs(title);
    }

    /**
     * test if an element has a class
     * @param  {elementFinder} locator - eg. $('div#myId')
     * @param  {string}  klass  - class name
     * @return {Boolean} - does the element have the class?
     */
    hasClass(locator, klass) {
        return locator.getAttribute('class').then(classes => {
            return classes.split(' ').indexOf(klass) !== -1;
        });
    }

    /**
     * Webdriver equivalent to hitting Enter/Return key.
     */
    hitEnter() {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    /**
     * switches focus to a new window
     * @param  {int} windowHandleIndex - the nth window to switch to
     * @param  {pageObject} targetPage - the page we'll be on after the switch
     * @return {promise}
     */
    switchToWindow(windowHandleIndex, targetPage) {
        // wait for new page to open...
        let handle = browser.wait(() => {
            return browser.getAllWindowHandles().then(handles => {
                // make sure window we're switching to exists...
                if(handles.length > windowHandleIndex) {
                    return handles[windowHandleIndex];
                } else {
                    throw new Error('window index ' + windowHandleIndex + ' does not exist');
                }
            });
        }, this.timeout.xxl);
        console.log('switching to window ' + windowHandleIndex);
        browser.switchTo().window(handle);
        // test that we're at the new page...
        return targetPage.at();
    }

}