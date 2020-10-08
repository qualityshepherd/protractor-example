import USERDATA from '../../data/common'
import BasePage from '../basePage/page';
import SELECTORS from './selectors';

var EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;

const documentIcon = element(by.css(SELECTORS.documentIcon));
const listItems = element(by.css(SELECTORS.listItems));

class DocumentPage extends BasePage {
    constructor() {
        super();
        this.url = USERDATA.documentUrl;
        this.pageLoaded = this.isVisible($(SELECTORS.documentIcon));

        this.waitForListItems = async () => {
            return this.inDom(listItems);
        };
    }
}   
export default new DocumentPage();