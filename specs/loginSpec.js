import DocumentPage from '../pages/documentPage/page';
import LoginPage from '../pages/loginPage/page';
import FactPage from '../pages/factPage/page';
import userData from '../data/common';

describe ('verify that a user can create a new Fact Type of all data types', () => {
    beforeAll(async () => {
        await LoginPage.get();
        await LoginPage.waitForLoginPage();
    });

    it('should display documents pages on successful login', async () => {
        await LoginPage.enterCredentials(userData.testUser.username, userData.testUser.password); 
        expect(DocumentPage.loaded()).toBe(true);
    });

    it('should display with list items in documents page', async () => {
        await DocumentPage.waitForListItems();
        expect(DocumentPage.loaded()).toBe(true);
    });

    it('should be displayed with fact types page and fact modal', async () => {
        await FactPage.navigateToFactMenu();
        expect(FactPage.loaded()).toBe(true);
    });

    it('should be able to add create and view a String fact types', async () => {
        await FactPage.loadFactModal();
        await FactPage.createNewFactType('String');
        expect(FactPage.searchFactType()).toBeGreaterThan(1);
    });

    it('should be able to add create and view a Number fact types', async () => {
        await FactPage.loadFactModal();
        await FactPage.createNewFactType('Number');
        expect(FactPage.searchFactType()).toBeGreaterThan(1);
    });

    it('should be able to add create and view a Date fact types', async () => {
        await FactPage.loadFactModal();
        await FactPage.createNewFactType('Date');
        expect(FactPage.searchFactType()).toBeGreaterThan(1);
    });

    it('should be able to add create and view a Boolean fact types', async () => {
        await FactPage.loadFactModal();
        await FactPage.createNewFactType('Boolean');
        expect(FactPage.searchFactType()).toBeGreaterThan(1);
    });

    it('should be able to add create and view a Select List fact types', async () => {
        await FactPage.loadFactModal();
        await FactPage.createNewFactType('Select List');
        expect(FactPage.searchFactType()).toBeGreaterThan(1);
    });

});



