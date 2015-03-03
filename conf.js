var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.45.0.jar",
    chromeDriver: "/usr/bin/chromedriver",
	specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    onPrepare: function(){
        // test non-angular sites
        //browser.ignoreSynchronization = true;

        // set implicit wait times in ms...
        //browser.manage().timeouts().pageLoadTimeout(10000);
        browser.manage().timeouts().implicitlyWait(2000);

        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        //jasmine.getEnv().addReporter(new HtmlReporter({
        //    baseDirectory: '/tmp/screenshots'
        //}));
    },

    capabilities: {
		browserName: 'chrome'
	},

	jasmineNodeOpts: {
		isVerbose: true,
		includeStackTrace: true,
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};
