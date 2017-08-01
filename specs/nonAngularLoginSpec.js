import loginPage from '../pages/nonAngularLoginPage';
import friendPage from '../pages/friendPage';
import userData from '../data/userData';

describe ('non-angular login', () => {
    beforeEach(() => {
        loginPage.goto();
    });

    it('should display message for invalid credentials', () => {
        loginPage.login('invalid_user', 'invalid_password');

        expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should display message for empty credentials', () => {
        loginPage.login('', '');

        expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should goto friend pages on successful login', () => {
        loginPage.loginAs(userData.testUser);

        expect(friendPage.loaded()).toBe(true);
    });
});