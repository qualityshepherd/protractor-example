var loginPage = require('../pages/nonAngularLoginPage');
var friendPage = require('../pages/friendPage');
var userData = require('../data/userData');

describe ('non-angular login', function() {
    beforeEach(function() {
        loginPage.to();

        loginPage.at();
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

        expect(friendPage.at()).toBeTruthy();
    });
});