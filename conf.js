// config file for protractor...
exports.config = {

	//seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar",
    chromeDriver: "/usr/bin/chromedriver",
	specs: ['spec/*spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
//    sauceUser: ,
//    sauceKey: ,

    onPrepare: function(){
        //global.dvr = browser.driver; // alias...

        // test non-angular sites
        //browser.ignoreSynchronization = true;

        // set implicit wait times in ms...
        //browser.driver.manage().timeouts().pageLoadTimeout(10000);
        //browser.driver.manage().timeouts().implicitlyWait(3000);

        // jasmine-reports...
//        require('/usr/lib/node_modules/jasmine-reporters');
//        jasmine.getEnv().addReporter( new jasmine.JUnitXmlReporter('reports', true, true));
    },

    capabilities: {
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 2
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
