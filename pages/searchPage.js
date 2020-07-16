import BasePage from './basePage';

class SearchPage extends BasePage {
    constructor() {
        super();
        this.siteTitle = $('h2 a')
        this.searchInput = $('#search_input');
        this.results = $$('.search-result');
        this.noResultsMsg = $('#no-results');

        this.url = '?search';
        this.pageLoaded = this.and(
            this.hasText(this.siteTitle, 'Search'),
            this.isClickable(this.searchInput)
        );
    }

    /**
     * Search blog posts
     * @param  {string}
     * @return {promise}
     */
    async searchFor(text) {
        await this.searchInput.sendKeys(text);
        this.hitEnter();
    }
}
export default new SearchPage();