var basePage = require('./basePage');
/**
 * search exists on multiple pages so we make it a module 
 * that we can then require on multiple pages
 */
var SearchModule = function() {
    this.box = $('input#s');
    this.resultsPage = $('body.search');
    this.noResultsMsg = element(by.cssContainingText('h2', 'No posts found. Please try a different search.'));

    /**
     * Search blog posts
     * @param  {string}
     */
    this.forText = function(text) {
        this.box.sendKeys(text);
        this.hitEnter();
        browser.wait(this.isVisible(this.resultsPage), this.timeout.l);
    };
};
SearchModule.prototype = basePage;
module.exports = new SearchModule();