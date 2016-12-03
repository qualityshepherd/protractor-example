// page is non-angular
browser.ignoreSynchronization = true;
var basePage = require('./basePage');
var search = require('./searchModule');

var QsHomePage = function() {
    // include modules...
    this.search = search;

    this.posts = $$('div.post');
    this.postTitleLinks = $$('h2 a');
    this.postTitleExists = function(postTitle) { return element(by.cssContainingText('a', postTitle)).isPresent(); };

    // sidebar...
    this.sidebar = $('div#sidebar');
    // social media links....
    this.githubLink = $('a#githubLink');
    // pagination
    this.prevPageLink = element(by.cssContainingText('a', '← Older Entries'));

    this.url = 'http://qualityshepherd.com';    
    // pageLoaded is used by `.at()` to test that we're on a page
    this.pageLoaded = this.and(
        this.hasText($('h1.site-title'), 'Quality Shepherd'),
        this.isClickable(this.postTitleLinks.first())
    );

    /**
     * Page back till we find the post title
     * or run out of previous posts
     * @param  {string} postTitle 
     * @return {[type]}           [description]
     */
    this.findPostByPaging = function(postTitle) {
        var that = this;

        this.postTitleExists(postTitle).then(function(found) {
            if(found) {
                // found it!
                return true;
            } else {
                // prevPageLink not displayed on first page
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