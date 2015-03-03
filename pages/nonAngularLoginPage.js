var basePage = require('../pages/basePage.js');

var LoginPage = function() {
    this.__proto__ = basePage; // extend basePage...
    this.url = 'angular/';
    this.pageLoaded = $('div#page');
    this.userInput = element(by.name('user'));
    this.passInput = element(by.name('pass'));
    this.loginButton = $('.login');
    this.errorMessage = $('#errorMessage');

    this.loginAs = function(userMap) {
        this.login(userMap.username, userMap.password);
    };

    this.login = function(user, pass) {
        this.userInput.sendKeys(user);
        this.passInput.sendKeys(pass);
        this.loginButton.click();
    };
};
module.exports = new LoginPage;
