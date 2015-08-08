browser.ignoreSynchronization = true;
var basePage = require('../pages/basePage.js');

var QSPage = function() {
    this.url = 'http://qualityshepherd.com';
    this.posts = $$('div.post');
    this.pageLoaded = this.and(
        this.hasText($('h1.site-title'), 'Quality Shepherd')
    );
};
QSPage.prototype = basePage; // extend basePage...
module.exports = new QSPage();