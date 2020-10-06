import loginPage from '../pages/nonAngularLoginPage';
import documentPage from '../pages/documentPage';
import userData from '../data/userData';

describe ('Login Test', () => {
    beforeEach(async () => {
        await loginPage.goto();
    });

    it('should goto documents pages on successful login', async () => {

        loginPage.loginAs(userData.testUser);
        expect(await documentPage.loaded()).toBe(true);
    });

    
    
});