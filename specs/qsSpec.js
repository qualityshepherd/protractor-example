/**
 * Exammple tests of non-angular site...
 */
import qsHomePage from '../pages/qsHomePage';
import githubPage from '../pages/githubPage';

describe('Qualityshepherd.com', () =>  {
	beforeEach(async () =>  {
		await qsHomePage.goto();
	});

	it('should display 5 posts per page', async () => {
		expect(await qsHomePage.posts.count()).toBe(5);
	});

	it('should return search results', async () =>  {
		await qsHomePage.search.forText('protractor');

		expect(await qsHomePage.search.resultsPage.isPresent()).toBe(true);
		expect(await qsHomePage.posts.count()).toBeGreaterThan(0);
	});

	it('unfound search term should return no results', async () =>  {
		await qsHomePage.search.forText('sfdslkjsfkjslkdf');

		expect(await qsHomePage.search.noResultsMsg.isDisplayed()).toBe(true);
	});

	it('sidebar should have a set width', async () =>  {
		expect(await qsHomePage.sidebar.getWidth()).toBe(280);
	});

	it('should find an older post by paging', async () =>  {
		const POSTTITLE = 'When To Automate';
		await qsHomePage.findPostByPaging(POSTTITLE);

		expect(await qsHomePage.postTitleExists(POSTTITLE)).toBe(true);
	});

	it('should open social media link in new window', async () =>  {
		await qsHomePage.githubLink.click();
		await qsHomePage.switchToNewWindow();

		expect(await githubPage.loaded()).toBe(true);

		// cleanup: close new window and switch back to original window...
    await qsHomePage.closeNewWindow();
	});
});