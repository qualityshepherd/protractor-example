
var FriendsPage = function() {
    this.url = 'angular/friends/';
    this.pageLoaded = $('h2.ng-binding');
    this.searchBox = element(by.model('search'));
    this.addnameBox = element(by.model('addName'));
    this.addButton = element(by.buttonText('+ add'));
    this.actualCount = $('em.ng-binding');
    this.deleteButton = $('i.icon-trash');
    this.deleteButtons = $$('i.icon-trash');
    this.friendName = function(text) { return element.all(by.cssContainingText('td.ng-binding', text)) };

    // results...
    this.rows = element.all(by.repeater('row in rows'));
    this.names = element.all(by.repeater('row in rows').column('{{row}}'));

    this.at = function() {
        var that = this;
        return browser.wait(function() {
            return browser.isElementPresent(that.pageLoaded);
        });
    };

    this.goto = function() {
        browser.get(this.url);
    };

    this.searchFor = function(string) {
       this.searchBox.sendKeys(string);
    };

    this.addFriend = function(name) {
        this.addnameBox.sendKeys(name);
        this.addButton.click();
    };

    this.deleteFriend = function(nameString) {
        return this.rows.filter(function(row) {
            // find the row with the name we want...
            return row.$$('td').get(1).getText().then(function(name) {
                return name === nameString;
            });
        }).then(function(filteredRows) {
            filteredRows[0].$('i.icon-trash').click();
        });
    };

    // find friend text in results...
    // use length to avoid element not found err
    this.inResults = function(name) {
        return this.friendName(name).then(function(found) {
            return found.length > 0;
        });
    };

    this.deleteAllFriends = function() {
        //this.deleteButtons.click();
        var buttons = this.deleteButtons;
        buttons.count().then(function(count) {
            while(count > 0) {
                buttons.get(0).click();
                count--;
            }
        });
    };
};
module.exports = new FriendsPage;

