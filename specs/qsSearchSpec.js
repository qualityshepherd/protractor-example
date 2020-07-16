/**
 * Exammple tests of non-angular site...
 */
import searchPage from '../pages/searchPage';
import githubPage from '../pages/githubPage';

describe('QS Search', () =>  {
	beforeEach(async () =>  {
		await searchPage.goto();
	});

	it('should return search results', async () =>  {
		await searchPage.searchFor('protractor');

		expect(await searchPage.results.count()).toBeGreaterThan(0);
	});

	it('unfound search term should return no results', async () =>  {
		await searchPage.searchFor('sfdslkjsfkjslkdf');

		expect(await searchPage.noResultsMsg.isDisplayed()).toBe(true);
	});
});