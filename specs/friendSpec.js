import documentPage from '../pages/documentPage';
import Chance from 'chance';
const chance = new Chance();
const EXISTING_NAME = 'Paul';

describe ('Angular App', () => {
	beforeEach(async () => {
        await documentPage.goto();
	});

    it('should add a new friend', async () => {
        const FRIEND_NAME = chance.first(); // random first name
        await documentPage.addFriend(FRIEND_NAME);

        expect(await documentPage.inResults(FRIEND_NAME)).toBe(true);
    });

    it('should not display non-found search terms', async () => {
        await documentPage.searchFor('poo!!!');

        expect(await documentPage.rows.count()).toBe(0);
    });

    it('should display found search terms', async () => {
        await documentPage.searchFor(EXISTING_NAME);

        expect(await documentPage.inResults(EXISTING_NAME)).toBe(true);
    });

    it('should display no rows when all friends deleted', async () => {
        await documentPage.deleteAllFriends();
        await documentPage.loaded(); // protect against false positives...

        expect(await friendPage.rows.count()).toBe(0);
    });

    it('should display actual count before saving new friend', async () => {
        await documentPage.addnameBox.sendKeys('Some text...');

        expect(await documentPage.actualCount.getText()).toEqual('(only 3 actually....)');
    });
});
