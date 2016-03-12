var basePage = require('./basePage.js');

var FriendsPage = function() {
    this.url = 'angular/friends/';
    this.pageLoaded = this.inDom($('h2.ng-binding'));
    this.searchBox = element(by.model('search'));
    this.addnameBox = element(by.model('addName'));
    this.addButton = element(by.buttonText('+ add'));
    this.actualCount = $('em.ng-binding');
    this.deleteButton = $('i.icon-trash');
    this.deleteButtons = $$('i.icon-trash');
    this.friendName = function(text) { return element.all(by.cssContainingText('td.ng-binding', text)); };
    // results...
    this.rows = element.all(by.repeater('row in rows'));
    this.names = element.all(by.repeater('row in rows').column('{{row}}'));

    /**
     * search for a friend
     * 
     * @param  {string} string 
     */
    this.searchFor = function(string) {
       this.searchBox.sendKeys(string);
    };

    /**
     * add a friend
     * 
     * @param {string} name
     */
    this.addFriend = function(name) {
        this.addnameBox.sendKeys(name);
        this.addButton.click();
    };

    /**
     * delete a friend by name
     * 
     * @param  {string} nameString
     */
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

    /**
     * find a friend in search results
     * 
     * @param {string} name - name to find
     * @return {bool}
     */
    this.inResults = function(name) {
        return this.friendName(name).then(function(found) {
            return found.length > 0;
        });
    };

    /**
     * delete all friends
     * 
     * @return {[type]}
     */
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
FriendsPage.prototype = basePage; // extend basePage...
module.exports = new FriendsPage();

