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

    loginAs(userObj) {
        this.login(userObj.username, userObj.password);
    }

    login(user, pass) {
        this.userInput.sendKeys(user);
        this.passInput.sendKeys(pass);
        this.loginButton.click();
    }
}
export default new LoginPage();