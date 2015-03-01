var friendPage = require('../pages/friendPage.js');
var chance = require('../node_modules/chance').Chance();

describe ('friend app tests', function() {

	beforeEach(function() {
        friendPage.goto();
	});

    it('should add a new friend', function() {
        var friendName = chance.string()
        friendPage.addFriend(friendName);

        expect(friendPage.inResults(friendName)).toBeTruthy();
    });

    it('should delete an existing friend', function() {
        friendPage.deleteFriend('Paul');

        expect(friendPage.inResults('Paul')).toBeFalsy();
    });

    it('should not display non-found search terms', function() {
        friendPage.searchFor('poo!!!');

        expect(friendPage.rows.count()).toBe(0);
    });

    it('should display found search terms', function() {
        friendPage.searchFor('Paul');

        expect(friendPage.inResults('Paul')).toBeTruthy();
    });

    it('should display no rows when all friends deleted', function() {
        friendPage.deleteAllFriends();
        friendPage.at(); // protect against false positives...

        expect(friendPage.rows.count()).toBe(0);
    });

    it('should display actual count before saving new friend', function() {
        friendPage.addnameBox.sendKeys('Some text...');

        expect(friendPage.actualCount.getText()).toEqual('(only 3 actually....)');
    });
});
