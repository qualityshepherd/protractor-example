import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'
import log4js from '../../utils/log'; 

var EC = protractor.ExpectedConditions;
const logger = log4js.getLogger("results");

const NavigateIcon = element(by.css(SELECTORS.addFactButton));
const FactTypeMenuItem = element(by.css(SELECTORS.FactTypesMenuItem));
const SettingsIcon = element(by.css(SELECTORS.SettingsIcon));
const FactModal = element(by.css(SELECTORS.FactModal));
const FactName = element(by.css(SELECTORS.FactName));
const FactDescription = element(by.css(SELECTORS.FactDescription));
const StringDataType = element(by.css(SELECTORS.StringDataType));
const NumberDataType = element(by.css(SELECTORS.NumberDataType));
const DateDataType = element(by.css(SELECTORS.DateDataType));
const BooleanDataType = element(by.css(SELECTORS.BooleanDataType));
const SelectListDataType = element(by.css(SELECTORS.SelectListDataType));
const SelectListInputBox = element(by.css(SELECTORS.SelectListInputBox));
const SaveButton = element(by.css(SELECTORS.SaveButton));
const FactsSearchBox = element(by.css(SELECTORS.FactsSearchBox));
const SearchResultElement = element.all(by.css(SELECTORS.SearchResultElement));

class FactPage extends BasePage {
    constructor() {
        super();
        this.url = USERDATA.factUrl;
        this.pageLoaded = this.isVisible($(SELECTORS.FactSearch));
        
        this.get = async () => {
          await browser.get(USERDATA.factUrl);
        };
        

        this.navigateToFactMenu = async () => {
          logger.info("Action - Navigating to Fact Menu");
          browser.wait(EC.elementToBeClickable(SettingsIcon, 5000));
          await SettingsIcon.click();

          browser.wait(EC.elementToBeClickable(FactTypeMenuItem, 5000));
          await FactTypeMenuItem.click();
          browser.sleep(2000);
          logger.info("Success - Navigation complete to Fact Menu");
        };

        this.loadFactModal = async () => {
            logger.info("Action - Loading Fact Modal");
            browser.wait(EC.elementToBeClickable(NavigateIcon));
            await NavigateIcon.click();
            browser.wait(EC.visibilityOf(FactModal));
            logger.info("Success - Loading of Fact Modal Complete");
            return await FactModal.click();
        };

        this.createNewFactType = async (dataType) => {
          logger.info("Action - Creating New Fact Type");
          await browser.wait(EC.elementToBeClickable(FactName, 5000));
          await FactName.click();
          await FactName.sendKeys(USERDATA.factType.name);
          await browser.wait(EC.elementToBeClickable(FactDescription, 5000));
          await FactDescription.click();
          await FactDescription.sendKeys(USERDATA.factType.description);

          if( dataType === 'String') {
            await StringDataType.click();
          } else if (dataType === 'Number') {
            await NumberDataType.click();
          } else if (dataType === 'Date') {
            await browser.wait(EC.elementToBeClickable(DateDataType, 5000));
            await DateDataType.click();
          } else if (dataType === 'Boolean') {
            await BooleanDataType.click();
          } else if (dataType === 'Select List') {

            await SelectListDataType.click();
            await SelectListInputBox.click();
            await SelectListInputBox.sendKeys('Hello');
            
          }

          await browser.wait(EC.elementToBeClickable(SaveButton, 5000));
          SaveButton.click();
          logger.info("Success - Fact Type Creation Complete");
        };

        this.searchFactType = async () => {
          logger.info("Action - Search Fact Type");
          await browser.wait(EC.elementToBeClickable(FactsSearchBox, 5000));
          await FactsSearchBox.clear();
          await FactsSearchBox.click();
          await FactsSearchBox.sendKeys(USERDATA.factType.name);
          logger.info("Success - Success Searching Fact Type");
          return await SearchResultElement.count();
        };

    }
}
export default new FactPage();