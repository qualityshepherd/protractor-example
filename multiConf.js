// config file for protractor...
exports.config = {

	//seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar",
	specs: ['spec/*spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    onPrepare: function(){
        global.dvr = browser.driver; // alias...
    },

    multiCapabilities: [{
//        'browserName': 'firefox'
//    }, {
        'browserName': 'chrome'
    }, {
        'browserName': 'safari'
    }],

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
