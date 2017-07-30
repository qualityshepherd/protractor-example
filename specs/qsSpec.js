/**
 * Exammple tests of non-angular site...
 */
import qsHomePage from '../pages/qsHomePage';
import githubPage from '../pages/githubPage';

describe('Quality Shepherd blog', () =>  {
	beforeEach(() =>  {
		qsHomePage.goto();
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
		const NEW_WIN_INDEX = 1;
		qsHomePage.githubLink.click();
		// switch to the new winwow/tab...
		qsHomePage.switchToWindow(NEW_WIN_INDEX, githubPage);

		expect(githubPage.loaded()).toBe(true);

		// cleanup: close new window and switch back to original window...
        qsHomePage.closeCurrentWindowAndLoadParent(qsHomePage);
	});

	it('sidebar should have a set width', () =>  {
		expect(qsHomePage.sidebar.getWidth()).toBe(280);
	});

	it('should find an older post by paging', () =>  {
		const POSTTITLE = 'When To Automate';
		qsHomePage.findPostByPaging(POSTTITLE);

		expect(qsHomePage.postTitleExists(POSTTITLE)).toBe(true);
	});
});