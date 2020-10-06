import BasePage from './basePage';

class documentPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://app.thoughttrace.dev/qa/documents';
        this.pageLoaded = this.isVisible($("header div .nav-icon clr-icon[shape='tt-logo']"));
    }
}
export default new documentPage();