import DocumentPage from '../pages/documentPage/page';
import LoginPage from '../pages/loginPage/page';
import FactPage from '../pages/factPage/page';
import userData from '../data/common';

describe ('verify that a user can create a new Fact Type of all data types', () => {
    beforeAll(async () => {
        await LoginPage.get();
        await LoginPage.waitForLoginPage();
    });

    it('should display documents pages on successful login', () => {
        LoginPage.enterCredentials(userData.testUser.username, userData.testUser.password); 
        expect(DocumentPage.loaded()).toBe(true);
    });

    it('should display with list items in documents page', () => {
        DocumentPage.waitForListItems();
        expect(DocumentPage.loaded()).toBe(true);
    });
    
    it('should be displayed with fact types page and fact modal', () => {
        FactPage.navigateToFactMenu();
        FactPage.loadFactModal();
        expect(FactPage.loaded()).toBe(true);
    });

    it('should be able to add create and view a String fact types', () => {
        FactPage.navigateToFactMenu();
        FactPage.loadFactModal();
        FactPage.createNewFactType();
        expect(FactPage.searchFactType()).Equal(1);
    });

    it('should be able to add create and view a Number fact types', () => {
        FactPage.createNewFactType(userData.factType);
        expect(FactPage.searchFactType()).Equal(1);
    });

    it('should be able to add create and view a Date fact types', () => {
        FactPage.createNewFactType(userData.factType);
        expect(FactPage.searchFactType()).Equal(1);
    });

    it('should be able to add create and view a Boolean fact types', () => {
        FactPage.createNewFactType(userData.factType);
        expect(FactPage.searchFactType()).Equal(1);
    });

    it('should be able to add create and view a Select fact types', () => {
        FactPage.createNewFactType(userData.factType);
        expect(FactPage.searchFactType()).Equal(1);
    });

});



