import BasePage from '../basePage/page';

var EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;

class DocumentPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://app.thoughttrace.dev/qa/documents';
        this.pageLoaded = this.isVisible($("header div .nav-icon clr-icon[shape='tt-logo']"));

        this.waitForListItems = async () => {
            return this.inDom("div[class='datagrid-scrolling-cells']");
        };
    }
}   
export default new DocumentPage();