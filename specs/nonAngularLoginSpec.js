import loginPage from '../pages/nonAngularLoginPage';
import friendPage from '../pages/friendPage';
import userData from '../data/userData';

describe ('Non-Angular Login', () => {
    beforeEach(async () => {
        await loginPage.goto();
    });

    it('should display message for invalid credentials', async () => {
        await loginPage.login('invalid_user', 'invalid_password');

        expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should display message for empty credentials', async () => {
        await loginPage.login('', '');

        expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should goto friend pages on successful login', async () => {
        await loginPage.loginAs(userData.testUser);

        expect(await friendPage.loaded()).toBe(true);
    });
});