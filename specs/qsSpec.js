/**
 * Exammple tests of non-angular site...
 */
var qsHomePage = require('../pages/qsHomePage');
var githubPage = require('../pages/githubPage');
var DEFAULTWIN = 0;
var NEWWIN = 1;

describe('Quality Shepherd blog', function() {
	beforeEach(function() {
		qsHomePage.to();
	});

	it('should display 5 posts per page', function() {
		expect(qsHomePage.posts.count()).toBe(5);
	});

	it('should return search results', function() {
		qsHomePage.searchFor('protractor');

		expect(qsHomePage.searchResultsPage.isPresent()).toBe(true);
		expect(qsHomePage.posts.count()).toBeGreaterThan(0);
	});

	it('unfound search term should return no results', function() {
		qsHomePage.searchFor('sfdslkjsfkjslkdf');

		expect(qsHomePage.noSearchResultsMsg.isDisplayed()).toBe(true);
	});

	it('should open social media link in new window', function() {
		qsHomePage.githubLink.click();
		// switch to the new winwow/tab... 
		qsHomePage.switchToWindow(NEWWIN, githubPage);

		expect(githubPage.at()).toBe(true);

		// cleanup: close new window and switch back to original window...
        browser.close(); 
        qsHomePage.switchToWindow(DEFAULTWIN, qsHomePage);
	});

	it('sidebar should have a set width', function() {
		expect(qsHomePage.sidebar.getWidth()).toBe(280);
	});

	it('should find an older post by paging', function() {
		var postTitle = 'When To Automate';
		qsHomePage.findPostByPaging(postTitle);

		expect(qsHomePage.postTitleExists(postTitle)).toBe(true);
	});
});