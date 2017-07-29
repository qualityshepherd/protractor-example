/**
 * Exammple tests of non-angular site...
 */
import qsHomePage from '../pages/qsHomePage';
import githubPage from '../pages/githubPage';
const DEFAULTWIN = 0;
const NEWWIN = 1;

describe('Quality Shepherd blog', () =>  {
	beforeEach(() =>  {
		qsHomePage.to();
	});

	it('should display 5 posts per page', () => {
		expect(qsHomePage.posts.count()).toBe(5);
	});

	it('should return search results', () =>  {
		qsHomePage.search.forText('protractor');

		expect(qsHomePage.search.resultsPage.isPresent()).toBe(true);
		expect(qsHomePage.posts.count()).toBeGreaterThan(0);
	});

	it('unfound search term should return no results', () =>  {
		qsHomePage.search.forText('sfdslkjsfkjslkdf');

		expect(qsHomePage.search.noResultsMsg.isDisplayed()).toBe(true);
	});

	it('should open social media link in new window', () =>  {
		qsHomePage.githubLink.click();
		// switch to the new winwow/tab...
		qsHomePage.switchToWindow(NEWWIN, githubPage);

		expect(githubPage.at()).toBe(true);

		// cleanup: close new window and switch back to original window...
        browser.close();
        qsHomePage.switchToWindow(DEFAULTWIN, qsHomePage);
	});

	it('sidebar should have a set width', () =>  {
		expect(qsHomePage.sidebar.getWidth()).toBe(280);
	});

	it('should find an older post by paging', () =>  {
		let postTitle = 'When To Automate';
		qsHomePage.findPostByPaging(postTitle);

		expect(qsHomePage.postTitleExists(postTitle)).toBe(true);
	});
});