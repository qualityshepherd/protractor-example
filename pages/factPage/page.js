import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'

var EC = protractor.ExpectedConditions;
// browser.ignoreSynchronization = true;

const navigateIcon = element(by.css(SELECTORS.addFactButton));
const factTypeMenuItem = element(by.css(SELECTORS.FactTypesMenuItem));
const setingsIcon = element(by.css(SELECTORS.settingsIcon));
const factModal = element(by.css(SELECTORS.FactModal));
const FactName = element(by.css(SELECTORS.FactName));
const FactDescription = element(by.css(SELECTORS.FactDescription));
const StringDataType = element(by.css(SELECTORS.StringDataType));
const NumberDataType = element(by.css(SELECTORS.NumberDataType));
const DateDataType = element(by.css(SELECTORS.DateDataType));
const BooleanDataType = element(by.css(SELECTORS.BooleanDataType));
const SelectListDataType = element(by.css(SELECTORS.SelectListDataType));
const SaveButton = element(by.css(SELECTORS.SaveButton));
const CancelButton = element(by.css(SELECTORS.CancelButton));
const FactsSearchBox = element(by.css(SELECTORS.FactsSearchBox));
const SearchResultElement = element.all(by.css(SELECTORS.SearchResultElement));

class FactPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://app.thoughttrace.dev/qa/admin/fact-types';
        this.pageLoaded = this.isVisible($(SELECTORS.FactSearch));
        this.settingsMenu = factTypeMenuItem;
        
        
        // Element Clickable
        this.navigateToFactMenu = async () => {
          browser.wait(EC.elementToBeClickable(setingsIcon, 5000));
          await setingsIcon.click();
          browser.wait(EC.elementToBeClickable(factTypeMenuItem, 5000));
          await this.settingsMenu.click(); 
        };

        this.loadFactModal = async () => {
            browser.wait(EC.elementToBeClickable(navigateIcon));
            await navigateIcon.click();
            return browser.wait(EC.visibilityOf(factModal));

        };

        this.createNewFactType = (dataType) => {

          browser.wait(EC.elementToBeClickable(FactName, 5000));
          FactName.click();
          FactName.sendKeys(USERDATA.factType.name);
          browser.wait(EC.elementToBeClickable(FactDescription, 5000));
          FactDescription.click();
          FactDescription.sendKeys(USERDATA.factType.description);

          if( dataType === 'String') {
            browser.wait(EC.elementToBeClickable(StringDataType, 5000));
            StringDataType.click();  
          } else if (dataType === 'Number') {
            browser.wait(EC.elementToBeClickable(NumberDataType, 5000));
            NumberDataType.click();
          } else if (dataType === 'Date') {
            browser.wait(EC.elementToBeClickable(DateDataType, 5000));
            DateDataType.click();
          } else if (dataType === 'Boolean') {
            browser.wait(EC.elementToBeClickable(BooleanDataType, 5000));
            BooleanDataType.click();
          } else if (dataType === 'Select List') {
            browser.wait(EC.elementToBeClickable(SelectListDataType, 5000));
            SelectListDataType.click();
          }

          browser.wait(EC.elementToBeClickable(SaveButton, 5000));
          SaveButton.click();
        };

        this.searchFactType = async () => {
          console.log('Inside Search Fact Type');
          await browser.navigate().refresh();
          browser.wait(EC.elementToBeClickable(FactsSearchBox, 5000));
          await FactsSearchBox.click();
          await FactsSearchBox.sendKeys(USERDATA.factType.name);
          console.log(SearchResultElement.count());
          return SearchResultElement.count();
          // Get Text of Search Result and send it back to the result count
        };

    }
}
export default new FactPage();