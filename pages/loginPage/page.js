import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'
import log4js from '../../utils/log'; 

var EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;

const logger = log4js.getLogger("results");
const emailInput = element(by.css(SELECTORS.emailInput));
const passwordInput = element(by.css(SELECTORS.passwordInput));

class LoginPage extends BasePage {
  
  constructor() {

      super();
        this.get = async () => {
            await browser.get(USERDATA.baseUrl);
          };
          
          this.waitForLoginPage = async () => {
            return await browser.wait(EC.presenceOf($(SELECTORS.launchIcon)));
          };

          this.enterCredentials = async (userName, password) => {
            logger.info("Logging in Started");
            browser.wait(EC.elementToBeClickable(emailInput, 5000));
            browser.wait(EC.elementToBeClickable(passwordInput, 5000));
            await emailInput.click();
            await emailInput.sendKeys(userName);

            await passwordInput.click();
            await passwordInput.sendKeys(password);
        
            element(by.css(SELECTORS.submitButton)).click();
            logger.info("Logging in completed");
          };
    }
}
export default new LoginPage();