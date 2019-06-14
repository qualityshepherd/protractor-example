import friendPage from '../pages/friendPage';
import Chance from 'chance';
const chance = new Chance();
const EXISTING_NAME = 'Paul';

describe ('Angular App', () => {
	beforeEach(async () => {
        await friendPage.goto();
	});

    it('should add a new friend', async () => {
        const FRIEND_NAME = chance.first(); // random first name
        await friendPage.addFriend(FRIEND_NAME);

        expect(await friendPage.inResults(FRIEND_NAME)).toBe(true);
    });

    it('should delete an existing friend', async () => {
        await friendPage.deleteFriend(EXISTING_NAME);

        expect(await friendPage.inResults(EXISTING_NAME)).toBe(false);
    });

    it('should not display non-found search terms', async () => {
        await friendPage.searchFor('poo!!!');

        expect(await friendPage.rows.count()).toBe(0);
    });

    it('should display found search terms', async () => {
        await friendPage.searchFor(EXISTING_NAME);

        expect(await friendPage.inResults(EXISTING_NAME)).toBe(true);
    });

    it('should display no rows when all friends deleted', async () => {
        await friendPage.deleteAllFriends();
        await friendPage.loaded(); // protect against false positives...

        expect(await friendPage.rows.count()).toBe(0);
    });

    it('should display actual count before saving new friend', async () => {
        await friendPage.addnameBox.sendKeys('Some text...');

        expect(await friendPage.actualCount.getText()).toEqual('(only 3 actually....)');
    });
});
