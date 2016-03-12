// page is non-angular
browser.ignoreSynchronization = true;
var basePage = require('./basePage');

var GithubPage = function() {
    this.username = $('div.vcard-username');

    this.url = 'https://github.com/qualityshepherd';
    this.pageLoaded = this.isVisible(this.username);
};
GithubPage.prototype = basePage; // extend basePage...
module.exports = new GithubPage();