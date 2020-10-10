import BasePage from '../basePage/page';
import SELECTORS from './selectors';
import USERDATA from '../../data/common'
import log4js from '../../utils/log'; 

const AddFilesButton = element(by.css(SELECTORS.AddFilesButton));
const AddTagItem = element(by.css(SELECTORS.AddTagItem));
const FileDropArea = element(by.css(SELECTORS.FileDropArea));
const InputType = element(by.css(SELECTORS.InputType));

var EC = protractor.ExpectedConditions;
const logger = log4js.getLogger("results");

class uploadPage extends BasePage {

    constructor() {
        super();
        this.url = USERDATA.tagUrl;

        this.get = async () => {
          await browser.get(USERDATA.uploadUrl);
          browser.sleep(3000); 
        };

        this.addFiles = async () => {
            logger.info('Action - Adding new files');

            browser.wait(EC.elementToBeClickable(InputType));
            browser.executeAsyncScript(function(callback) {
                document.querySelectorAll(InputType)
                    .style.display = 'in-line';
                callback();
              });
              
            var documentPath = 'data/OGL_DEMO_(10).pdf';
            AddFilesButton.click();
            InputType.sendKeys(documentPath);  
            logger.info('Success  - Added new Files');
        };

    }
      
}
export default new uploadPage();