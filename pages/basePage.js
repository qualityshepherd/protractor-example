
var BasePage = function() {

    // requires pageLoaded locator...
    this.at = function() {
        var self = this;
        return browser.wait(function() {
            return browser.isElementPresent(self.pageLoaded);
        });
    };

    // requires url locator...
    this.to = function() {
        browser.get(this.url);
    };
};
module.exports = new BasePage;
