browser.ignoreSynchronization = true;
var basePage = require('../pages/basePage');

var QsHomePage = function() {
    this.url = 'http://qualityshepherd.com';
    this.posts = $$('div.post');
    this.searchBox = $('input#s');
    this.searchResultsPage = $('body.search');
    this.noSearchResultsMsg = element(by.cssContainingText('h2', 'No posts found. Please try a different search.'));

    this.pageLoaded = this.and(
        this.hasText($('h1.site-title'), 'Quality Shepherd')
    );

    this.searchFor = function(text) {
    	this.searchBox.sendKeys(text);
    	this.hitReturn();
    	browser.wait(this.isVisible(this.searchResultsPage));
    };
};
QsHomePage.prototype = basePage; // extend basePage...
module.exports = new QsHomePage();