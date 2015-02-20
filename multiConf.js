// config file for protractor...
exports.config = {

	//seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.44.0.jar",
	specs: ['specs/*specs.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    onPrepare: function(){
        global.dvr = browser.driver; // alias...
    },

    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
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
