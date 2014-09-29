
var LoginPage = function() {
    this.url = 'angular/';
    this.userInput = element(by.name('user'));
    this.passInput = element(by.name('pass'));
    this.loginButton = $('.login');
    this.errorMessage = $('#errorMessage');

    this.goto = function() {
        browser.get(this.url);
    };

    this.loginAs = function(userMap) {
        this.login(userMap.username, userMap.password);
    };

    this.login = function(user, pass) {
        this.userInput.sendKeys(user);
        this.passInput.sendKeys(pass);
        this.loginButton.click();
    };

};
module.exports = new LoginPage();
