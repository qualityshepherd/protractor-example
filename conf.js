var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {

	//seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.44.0.jar",
    chromeDriver: "/usr/bin/chromedriver",
	specs: ['specs/*Specs.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
//    sauceUser: ,
//    sauceKey: ,

    onPrepare: function(){
        // test non-angular sites
        //browser.ignoreSynchronization = true;

        // set implicit wait times in ms...
        //browser.driver.manage().timeouts().pageLoadTimeout(10000);
        //browser.driver.manage().timeouts().implicitlyWait(3000);

        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '/tmp/screenshots'
        }));
    },

    capabilities: {
		browserName: 'chrome'
	},

	params: {
        login: {
            user: 'test',
            pass: 'test'
        }
	},

	jasmineNodeOpts: {
		isVerbose: true,
		includeStackTrace: true,
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};
