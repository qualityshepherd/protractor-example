// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class QsHomePage extends BasePage {
    constructor() {
        super();

        this.posts = $$('div.post');
        this.postTitleLinks = $$('h2 a');
        this.siteTitle = $('h1');
        // social media links....
        this.githubLink = $('#github-social');
        // pagination
        this.prevPageLink = $('.button.next');

        this.url = 'http://qualityshepherd.com';
        // pageLoaded is used by `.loaded()` to test that we're on a page
        this.pageLoaded = this.and(
            this.hasText(this.siteTitle, 'Quality Shepherd'),
            this.isClickable(this.postTitleLinks.first())
        );
    }

    /**
     * check if a post title exists
     * @param  {string} postTitle
     * @return {bool}
     */
    postTitleExists(postTitle) {
        return element(by.cssContainingText('a', postTitle)).isPresent();
    }

    /**
     * Page back till we find the post title
     * or run out of previous posts
     * @param  {string} postTitle
     * @return {bool}
     */
    async findPostByPaging(postTitle) {
        return await this.postTitleExists(postTitle).then(found => {
            if(found) {
                // found it!
                return true;
            } else {
                // prevPageLink not displayed on first page
                return this.prevPageLink.isPresent().then(async yup => {
                    if(yup) {
                        await this.prevPageLink.click();
                        await this.findPostByPaging(postTitle); // call recursively till found...
                        // wait for page to load...
                        await this.loaded();
                    } else {
                        // post not found
                        return false;
                    }
                });
            }
        });
    }
}
export default new QsHomePage();