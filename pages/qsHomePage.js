// page is non-angular
browser.ignoreSynchronization = true;
var basePage = require('../pages/basePage');

var QsHomePage = function() {
    this.url = 'http://qualityshepherd.com';
    this.posts = $$('div.post');
    this.postTitleLinks = $$('h2 a');
    this.postTitleExists = function(postTitle) { return element(by.cssContainingText('a', postTitle)).isPresent(); };

    // sidebar...
    this.sidebar = $('div#sidebar');
    // search...
    this.searchBox = $('input#s');
    this.searchResultsPage = $('body.search');
    this.noSearchResultsMsg = element(by.cssContainingText('h2', 'No posts found. Please try a different search.'));
    // social media links....
    this.githubLink = $('a#githubLink');
    // pagination
    this.prevPageLink = element(by.cssContainingText('a', '← Older Entries'));
    
    // pageLoaded is used by `.at()` to test that we're on a page
    this.pageLoaded = this.and(
        this.hasText($('h1.site-title'), 'Quality Shepherd')
    );

    /**
     * Search blog posts
     * @param  {string}
     */
    this.searchFor = function(text) {
    	this.searchBox.sendKeys(text);
    	this.hitEnter();
    	browser.wait(this.isVisible(this.searchResultsPage), this.timeout.l);
    };

    /**
     * Page back till we find the post title
     * or run out of previous posts
     * @param  {string} postTitle 
     * @return {[type]}           [description]
     */
    this.findPostByPaging = function(postTitle) {
        var that = this;

        that.postTitleExists(postTitle).then(function(found) {
            if(found) {
                // found it!
                return true;
            } else {
                that.prevPageLink.isPresent().then(function(yup) {
                    if(yup) {
                        that.prevPageLink.click();
                        that.findPostByPaging(postTitle); // call recursively till found...
                        // wait for page to load...
                        that.at();
                    } else {
                        // post not found
                        return false;
                    }
                });
            }
        });
    };
};
QsHomePage.prototype = basePage; // extend basePage...
module.exports = new QsHomePage();