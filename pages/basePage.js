
var BasePage = function() {

    /**
     * wait and verify that a page is loaded
     * requires the page has a pageLoaded var
     */
    this.at = function() {
        var that = this;
        return browser.wait(function() {
            return that.pageLoaded.call();
        }, 10000);
    };

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via at()
     */
    this.to = function() {
        browser.get(this.url, 5000);
        return this.at();
    };

     /**
     * Wrappers for expected conditions
     *
     * ECs are generally poorly named and clunky. So we wrap them in
     * methods that are 9% more sexy, and allow us to add logging, etc...
     *
     * @type {ExpectedConditions}
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

    this.hasClass = function(locator, klass) {
        browser.sleep(500);
        return locator.getAttribute('class').then(function(classes) {
            return classes.split(' ').indexOf(klass) !== -1;
        });
    };

};
BasePage.prototype = protractor.ExpectedConditions;
module.exports = new BasePage();
