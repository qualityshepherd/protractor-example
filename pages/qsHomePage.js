// page is non-angular
browser.ignoreSynchronization = true;
var basePage = require('../pages/basePage');

var QsHomePage = function() {
    this.url = 'http://qualityshepherd.com';
    this.posts = $$('div.post');
    // sidebar...
    this.sidebar = $('div#sidebar');
    // search...
    this.searchBox = $('input#s');
    this.searchResultsPage = $('body.search');
    this.noSearchResultsMsg = element(by.cssContainingText('h2', 'No posts found. Please try a different search.'));
    // social media links....
    this.githubLink = $('a#githubLink');
    
    // pageLoaded is used by `.at()` to test that we're on a page
    this.pageLoaded = this.and(
        this.hasText($('h1.site-title'), 'Quality Shepherd')
    );

    /**
     * Search blog posts
     * 
     * @param  {string}
     */
    this.searchFor = function(text) {
    	this.searchBox.sendKeys(text);
    	this.hitReturn();
    	browser.wait(this.isVisible(this.searchResultsPage));
    };
};
QsHomePage.prototype = basePage; // extend basePage...
module.exports = new QsHomePage();