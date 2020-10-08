import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'

var EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;
const navigateIcon = element(by.css(SELECTORS.addFactButton));
const factTypeMenuItem = element(by.css(SELECTORS.FactTypesMenuItem));
const setingsIcon = element(by.css(SELECTORS.settingsIcon));
const factModal = element(by.css(SELECTORS.FactModal));
const FactName = element(by.css(SELECTORS.FactName));
const FactDescription = element(by.css(SELECTORS.FactDescription)); //input[name="fact-field-type-data-type"]
// const FactDataType = element(by.css(SELECTORS.FactDataType)).all(by.taName('input'));
const FactDataType = element.all(by.css(SELECTORS.FactDataType)).first();

// element.all(locator).first();
//element(By.id('shortcuts')).all(By.tagName('a')).get(1).click();
// element.all(locator).get(index);
// // First and last.
// element.all(locator).first();
const SaveButton = element(by.css(SELECTORS.SaveButton));
// CancelButton : 'div.modal-footer > button.btn.btn-link',
// FactsSearchBox : 'div > ttc-fact-type-management > ttc-search-input > input',
// SearchResultElement : 'div.datagrid-row-scrollable > div > clr-dg-cell.fact-type-column.datagrid-cell.ng-star-inserted'

class FactPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://app.thoughttrace.dev/qa/admin/fact-types';
        this.pageLoaded = this.isVisible($(SELECTORS.FactSearch));
        this.settingsMenu = factTypeMenuItem;
        
        
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
        this.createNewFactType = async () => {
          browser.wait(EC.elementToBeClickable(FactName, 5000));
          await FactName.click();
          await FactName.sendKeys(USERDATA.factType.name);
          browser.wait(EC.elementToBeClickable(FactDescription, 5000));
          await FactDescription.click();
          await FactDescription.sendKeys(USERDATA.factType.description);
          console.log('---------------');
          // console.log(FactDataType);
          // console.log('---------------');
          // console.log(FactDataType.get(3));
          browser.wait(EC.elementToBeClickable(FactDataType, 5000));
          await FactDataType.get(3).click();
          browser.wait(EC.elementToBeClickable(SaveButton, 5000));
          await SaveButton.click();
        };

        this.searchFactType = async () => {

        };

    }
}
export default new FactPage();