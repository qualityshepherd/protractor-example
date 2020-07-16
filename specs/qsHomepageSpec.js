/**
 * Exammple tests of non-angular site...
 */
import qsHomePage from '../pages/qsHomePage';
import githubPage from '../pages/githubPage';

describe('QS Homepage', () =>  {
	beforeEach(async () =>  {
		await qsHomePage.goto();
	});

	it('should display 7 posts per page', async () => {
		expect(await qsHomePage.posts.count()).toBe(7);
	});

	it('should find an older post by paging', async () =>  {
		const POSTTITLE = 'When To Automate';
		await qsHomePage.findPostByPaging(POSTTITLE);

		expect(await qsHomePage.postTitleExists(POSTTITLE)).toBe(true);
	});

	it('should open social media link in new window', async () =>  {
		await qsHomePage.waitAndClick(qsHomePage.githubLink);
		await qsHomePage.switchToNewWindow();

		expect(await githubPage.loaded()).toBe(true);

		// cleanup: close new window and switch back to original window...
    await qsHomePage.closeNewWindow();
	});
});