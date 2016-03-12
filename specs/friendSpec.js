/**
 * Example tests of an Angular site
 */
var friendPage = require('../pages/friendPage');
var chance = require('chance').Chance();

describe ('angular app', function() {

	beforeEach(function() {
        friendPage.to();

        expect(friendPage.at()).toBeTruthy();
	});

    it('should add a new friend', function() {
        var friendName = chance.string();
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
