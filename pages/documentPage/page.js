import { element } from 'protractor';
import USERDATA from '../../data/common'
import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import log4js from '../../utils/log'; 

var EC = protractor.ExpectedConditions;
const logger = log4js.getLogger("results");

const ListItems = element(by.css(SELECTORS.ListItems));
const DocumentMenuItem = element(by.css(SELECTORS.DocumentMenuItem));
const SettingsIcon = element(by.css(SELECTORS.SettingsIcon));
const AddDocumentButton = element(by.css(SELECTORS.AddDocumentButton));
const DocumentModal = element(by.xpath(SELECTORS.DocumentModal));
const DocumentName = element(by.css(SELECTORS.DocumentName));
const DocumentDescription = element(by.css(SELECTORS.DocumentDescription));
const SaveButton = element(by.css(SELECTORS.SaveButton));
const ThoughtExtraction = element(by.css(SELECTORS.ThoughtExtraction));
const DocumentSearch = element(by.css(SELECTORS.DocumentSearch));
const SearchResultElement = element.all(by.css(SELECTORS.SearchResultElement));
const OGLThoughtExtraction = element(by.cssContainingText(ThoughtExtraction, 'OGL'));

class DocumentPage extends BasePage {
    constructor() {
        super();
        this.url = USERDATA.documentUrl;
        this.pageLoaded = this.isVisible($(SELECTORS.DocumentIcon));

        this.waitForListItems = async () => {
            return this.inDom(ListItems);
        };

        // Common helper required 
        this.navigateToDocumentMenu = async () => { 
            logger.info("Action - navigate To Document Menu");
            browser.wait(EC.elementToBeClickable(SettingsIcon, 5000));
            await SettingsIcon.click();
  
            browser.wait(EC.elementToBeClickable(DocumentMenuItem, 5000));
            await DocumentMenuItem.click();
            browser.sleep(2000);
            logger.info("Success - Navigating to Document Menu");
          };

        this.loadDocumentModal = async () => {
            logger.info("Action - load Document Modal");
            browser.wait(EC.elementToBeClickable(AddDocumentButton));
            await AddDocumentButton.click();
            browser.wait(EC.visibilityOf(DocumentModal));
            logger.info("Success - load Document Modal");
            return await this.inDom(DocumentModal);

        };

        this.createNewDocType = async (dataType) => {
            logger.info("Action - creating New Document Type");
            await browser.wait(EC.elementToBeClickable(DocumentName, 5000));
            await DocumentName.click();
            await DocumentName.sendKeys(USERDATA.docName.name);

            await browser.wait(EC.elementToBeClickable(DocumentDescription, 5000));
            await DocumentDescription.click();
            await DocumentDescription.sendKeys(USERDATA.docName.description);

            await this.inDom(ListItems);
            await OGLThoughtExtraction.click();
            await browser.wait(EC.elementToBeClickable(SaveButton, 5000));
            logger.info("Success - Creating New Document Type");
            SaveButton.click();
          };

          this.searchDocType = async () => {
            logger.info("Action - Creating new Search Doc Type");
            await browser.wait(EC.elementToBeClickable(DocumentSearch, 5000));
            await DocumentSearch.clear();
            await DocumentSearch.click();
            await DocumentSearch.sendKeys(USERDATA.docName.name);
            await this.inDom(SearchResultElement);
            logger.info("Success - Creating new Search Doc Type");
            return await SearchResultElement.count();
          };

    }
}   
export default new DocumentPage();