// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.url = 'angular';
        this.userInput = element(by.name('user'));
        this.passInput = element(by.name('pass'));
        this.loginButton = $('.login');
        this.errorMessage = $('div#errorMessage');
        this.pageLoaded = this.and(
            this.isVisible($('div#page'))
        );
    }

    /**
     * convenience wrapper for login that allows you to login via
     * role object. eg. loginAs(admin)
     * @param  {[type]} userObj [description]
     * @return {[type]}         [description]
     */
    loginAs(userObj) {
        this.login(userObj.username, userObj.password);
    }

    /**
     * non-angular login
     * @param  {string} user
     * @param  {string} pass
     * @return {promise}
     */
    login(user, pass) {
        this.userInput.sendKeys(user);
        this.passInput.sendKeys(pass);
        return this.loginButton.click();
    }
}
export default new LoginPage();