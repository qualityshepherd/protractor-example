// config file for protractor...
exports.config = {

	//seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.45.0.jar",
	specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
    framework: 'jasmine2',

    onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(2000);

        // better jasmine 2 reports...
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
    },

    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }],

	jasmineNodeOpts: {
		isVerbose: true,
		includeStackTrace: true,
		showColors: true,
		defaultTimeoutInterval: 30000,
        print: function() {}
	}
};
