/**
 * Example tests of an Angular site
 */
import friendPage from '../pages/friendPage';
import Chance from 'chance';
const chance = new Chance();
const EXISTING_NAME = 'Paul';

describe ('angular app', () => {
	beforeEach(() => {
        friendPage.goto();
	});

    it('should add a new friend', () => {
        const FRIEND_NAME = chance.first(); // random first name
        friendPage.addFriend(FRIEND_NAME);

        expect(friendPage.inResults(FRIEND_NAME)).toBe(true);
    });

    it('should delete an existing friend', () => {
        friendPage.deleteFriend(EXISTING_NAME);

        expect(friendPage.inResults(EXISTING_NAME)).toBe(false);
    });

    it('should not display non-found search terms', () => {
        friendPage.searchFor('poo!!!');

        expect(friendPage.rows.count()).toBe(0);
    });

    it('should display found search terms', () => {
        friendPage.searchFor(EXISTING_NAME);

        expect(friendPage.inResults(EXISTING_NAME)).toBe(true);
    });

    it('should display no rows when all friends deleted', () => {
        friendPage.deleteAllFriends();
        friendPage.loaded(); // protect against false positives...

        expect(friendPage.rows.count()).toBe(0);
    });

    it('should display actual count before saving new friend', () => {
        friendPage.addnameBox.sendKeys('Some text...');

        expect(friendPage.actualCount.getText()).toEqual('(only 3 actually....)');
    });
});
