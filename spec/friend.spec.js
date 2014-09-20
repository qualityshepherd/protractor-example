
describe ('friend app tests', function() {
    var friendPage = require('../page/friend.page.js');

	beforeEach(function() {
        friendPage.goto();
	});

    it('should add a new friend', function() {
        friendPage.addFriend('Jo');

        expect(friendPage.inResults('Jo')).toBe(true);
    });

    it('should delete an existing friend', function() {
        friendPage.deleteFriend('Paul');

        expect(friendPage.inResults('Paul')).toBe(false);
    });

    it('should not display non-found search terms', function() {
        friendPage.searchFor('poo!!!');

        expect(friendPage.rows.count()).toBe(0);
    });

    it('should display found search terms', function() {
        friendPage.searchFor('Paul');

        expect(friendPage.rows.count()).toBe(1);
    });

    it('should display no rows when all friends deleted', function() {
        friendPage.deleteAllFriends();

        expect(friendPage.rows.count()).toBe(0);
    });

    it('should display actual count before saving new friend', function() {
        friendPage.addnameBox.sendKeys('Some text...');

        expect(friendPage.actualCount.getText()).toEqual('(only 3 actually....)');
    });

});