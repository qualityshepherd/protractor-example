
describe ('non-angular login test', function() {
    var loginPage = require('../pages/nonAngularLoginPage.js');
    var friendPage = require('../pages/friendPage.js');
    var userData = require('../data/userData.js');

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        loginPage.goto();
    });

    it('should display message for invalid credentials', function() {
        loginPage.login('invalid_user', 'invalid_password');

        expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should display message for empty credentials', function() {
        loginPage.login('', '');

        expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should goto friend pages on successful login', function() {
        loginPage.loginAs(userData.testUser);

        expect(browser.getTitle()).toContain('Angular JS Demo');
    });
});