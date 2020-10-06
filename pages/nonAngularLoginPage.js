// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.submitButton = element(by.css('button[class="auth0-lock-submit"]'));
        this.emailInput = element(by.css('div[class="auth0-lock-input-block auth0-lock-input-email"] input[class="auth0-lock-input"]'));
        this.passwordInput = element(by.css('div[class="auth0-lock-input-block auth0-lock-input-show-password"] input[class="auth0-lock-input"]:nth-of-type(1)'));
        
        this.url = 'https://app.thoughttrace.dev/qa';
        this.pageLoaded = this.inDom($('img[class="auth0-lock-header-logo"]')) ;
    }

    /**
     * convenience wrapper for login that allows you to login via
     * role object. eg. loginAs(admin)
     * @param  {obj} userObj - user data object
     * @return {promise}
     */
    async loginAs(userObj) {
        return await this.login(userObj.username, userObj.password);
    }

    /**
     * non-angular login
     * @param  {string} user
     * @param  {string} pass
     * @return {promise}
     */
    async login(user, pass) {
        await this.emailInput.sendKeys(user);
        await this.passwordInput.sendKeys(pass);
        await this.submitButton.click();
    }
 
}
export default new LoginPage();