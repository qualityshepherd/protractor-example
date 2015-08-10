// page is non-angular
browser.ignoreSynchronization = true;
var basePage = require('../pages/basePage');

var GithubPage = function() {
    this.url = 'https://github.com/qualityshepherd';
    this.pageLoaded = this.isVisible($('span.octicon-mark-github'));

};
GithubPage.prototype = basePage; // extend basePage...
module.exports = new GithubPage();