import BasePage from './basePage';

/**
 * search exists on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
class SearchModule extends BasePage {
    constructor() {
        super();
        this.box = $('input#s');
        this.resultsPage = $('body.search');
        this.noResultsMsg = element(by.cssContainingText('h2', 'No posts found. Please try a different search.'));
    }

    /**
     * Search blog posts
     * @param  {string}
     * @return {promise}
     */
    forText(text) {
        this.box.sendKeys(text);
        this.hitEnter();
        return browser.wait(this.isVisible(this.resultsPage), this.timeout.l);
    }
}
export default new SearchModule();