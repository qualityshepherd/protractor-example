// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class GithubPage extends BasePage {
    constructor() {
        super();
        this.username = $('.vcard-names');

        this.url = 'https://github.com/qualityshepherd';
        this.pageLoaded = this.isVisible(this.username);
    }
}
export default new GithubPage();