"use strict";

var FriendsPage = function() {

    this.url = 'http://qualityshepherd.com/angular/friends/';
    this.header = $('h2');
    this.searchBox = element(by.model('search'));
    this.addnameBox = element(by.model('addName'));
    this.addButton = element(by.buttonText('+ add'));
    this.actualCount = $('em.ng-binding')
    this.deleteButton = $('i.icon-trash');
    this.deleteButtons = $$('i.icon-trash');

    // results...
    this.rows = element.all(by.repeater('row in rows'));
    this.names = element.all(by.repeater('row in rows').column('{{row}}'));

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

    // find string in friend table...
    this.inResults = function(nameString) {
        // filter out elements that don't match nameString...
        return this.names.filter(function(name) {
            return name.getText().then(function(text) {
                return text === nameString;
            });
        }).then(function(filteredElements) {
            // promise array with elements that pass filter...
            return filteredElements.length > 0; // return true...
        });
    };

    this.deleteAllFriends = function() {
        var buttons = this.deleteButtons;
        buttons.count().then(function(count) {
            while(count > 0) {
                buttons.get(0).click();
                count--;
            }
        })
    };
};

module.exports = new FriendsPage();

