
var BasePage = function() {

    // wait and test that we're on the page
    // requires pageLoaded locator promise...
    this.at = function() {
        var self = this;
        return browser.wait(function() {
            return self.pageLoaded;
        });
    };

    // requires url locator...
    this.to = function() {
        browser.get(this.url);
    };
};
BasePage.prototype = protractor.ExpectedConditions;
module.exports = new BasePage();
