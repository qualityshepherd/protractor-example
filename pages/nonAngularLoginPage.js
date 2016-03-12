browser.ignoreSynchronization = true;
var basePage = require('./basePage.js');

var LoginPage = function() {
    this.url = 'angular';
    this.userInput = element(by.name('user'));
    this.passInput = element(by.name('pass'));
    this.loginButton = $('.login');
    this.errorMessage = $('div#errorMessage');
    this.pageLoaded = this.and(
        this.isVisible($('div#page'))
    );

    this.loginAs = function(userObj) {
        this.login(userObj.username, userObj.password);
    };

    this.login = function(user, pass) {
        this.userInput.sendKeys(user);
        this.passInput.sendKeys(pass);
        this.loginButton.click();
    };
};
LoginPage.prototype = basePage; // extend basePage...
module.exports = new LoginPage();