
var BasePage = function() {

    /**
     * wait and verify that a page is loaded
     * 
     * @requires a page to include `pageLoaded` method
     */
    this.at = function() {
        return browser.wait(this.pageLoaded(), this.timeout.xl);
    };

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via at()
     * 
     * @requires page have both `url` and `pageLoaded` properties
     */
    this.to = function() {
        browser.get(this.url, this.timeout.xl);
        return this.at();
    };

    /**
     * Wrappers for expected conditions
     *
     * I find ECs are generally poorly named, so we wrap them in
     * methods that are 9% more sexy, and allow us to add logging, etc...
     *
     * @returns {ExpectedCondition}
     */
    var EC = protractor.ExpectedConditions;

    this.isVisible = function(locator) {
        return EC.visibilityOf(locator);
    };

    this.isNotVisible = function(locator) {
        return EC.invisibilityOf(locator);
    };

    this.inDom = function(locator) {
        return EC.presenceOf(locator);
    };

    this.notInDom = function(locator) {
        return EC.stalenessOf(locator);
    };

    this.isClickable = function(locator) {
        return EC.elementToBeClickable(locator);
    };

    this.hasText = function(locator, text) {
        return EC.textToBePresentInElement(locator, text);
    };

    this.and = function(arrayOfFunctions) {
        return EC.and(arrayOfFunctions);
    };

    this.titleIs = function(title) {
        return EC.titleIs(title);
    };

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
     * test if an element has a class
     * 
     * @param  {elementFinder} locator - eg. $('div#myId')
     * @param  {string}  klass  - class name
     * @return {Boolean} - does the element have the class?
     */
    this.hasClass = function(locator, klass) {
        return locator.getAttribute('class').then(function(classes) {
            return classes.split(' ').indexOf(klass) !== -1;
        });
    };

    /**
     * Webdriver equivilant to hitting Enter/Return key.
     */
    this.hitReturn = function() {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };

    /**
     * switches to a new window/tab via index
     * Note: call from the page you intend to switch to, we wait 
     * for correct page to load via .at()
     *
     * @param {int} windowHandleIndex - the index of the window to switch to
     */
    this.switchToWindow = function(windowHandleIndex) {
        var that = this;
        // wait for the new window to open...
        var handle = browser.wait(function() {
            return browser.getAllWindowHandles().then(function(handles) {
                console.log('Switching to window ' + windowHandleIndex);
                // wait till handle we want exists...
                return handles[windowHandleIndex];
            }, that.timeout.xl);
        });
        browser.switchTo().window(handle);
        // we're at the new page...
        this.at();
    };

    /**
     * get an element's width
     * extend's protractors ElementFinder
     * 
     * @return {int} - the width of the element
     */
    protractor.ElementFinder.prototype.getWidth = function () {
        return this.getSize().then(function (size) {
            return size.width;
        });
    };

};
module.exports = new BasePage();
