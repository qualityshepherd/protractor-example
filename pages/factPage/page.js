import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'
import { WebDriver } from 'protractor';

var EC = protractor.ExpectedConditions;
// browser.ignoreSynchronization = true;

const navigateIcon = element(by.css(SELECTORS.addFactButton));
const factTypeMenuItem = element(by.css(SELECTORS.FactTypesMenuItem));
const settingsIcon = element(by.css(SELECTORS.settingsIcon));
const factModal = element(by.css(SELECTORS.FactModal));
const FactName = element(by.css(SELECTORS.FactName));
const FactDescription = element(by.css(SELECTORS.FactDescription));
const StringDataType = element(by.css(SELECTORS.StringDataType));
const NumberDataType = element(by.css(SELECTORS.NumberDataType));
const DateDataType = element(by.css(SELECTORS.DateDataType));
const BooleanDataType = element(by.css(SELECTORS.BooleanDataType));
const SelectListDataType = element(by.css(SELECTORS.SelectListDataType));
const SelectListInputBox = element(by.css(SELECTORS.SelectListInputBox));
const SaveButton = element(by.css(SELECTORS.SaveButton));
const CancelButton = element(by.css(SELECTORS.CancelButton));
const FactsSearchBox = element(by.css(SELECTORS.FactsSearchBox));
const FactTypeText = element(by.css(SELECTORS.FactTypeText));
const SearchResultElement = element.all(by.css(SELECTORS.SearchResultElement));

class FactPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://app.thoughttrace.dev/qa/admin/fact-types';
        this.pageLoaded = this.isVisible($(SELECTORS.FactSearch));
        this.settingsMenu = factTypeMenuItem;
        
        this.get = async () => {
          await browser.get(USERDATA.factUrl);
        };
        
        // Element Clickable
        this.navigateToFactMenu = async () => {
          browser.wait(EC.elementToBeClickable(settingsIcon, 5000));
          await settingsIcon.click();

          browser.wait(EC.elementToBeClickable(factTypeMenuItem, 5000));
          await this.settingsMenu.click(); 
        };

        this.loadFactModal = async () => {
            browser.wait(EC.elementToBeClickable(navigateIcon));
            await navigateIcon.click();
            browser.wait(EC.visibilityOf(factModal));
            return await factModal.click();
        };

        this.createNewFactType = async (dataType) => {

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
        };

        this.searchFactType = async () => {
          await browser.wait(EC.elementToBeClickable(FactsSearchBox, 5000));
          await FactsSearchBox.clear();
          await FactsSearchBox.click();
          await FactsSearchBox.sendKeys(USERDATA.factType.name);
          return await SearchResultElement.count();
        };

    }
}
export default new FactPage();