var qsPage = require('../pages/qsPage');

describe('Quality Shepherd Home Page', function() {
	beforeEach(function() {
		qsPage.to();
	});

	it('should have 5 posts per page', function() {
		expect(qsPage.posts.count()).toBe(5);
	});
});