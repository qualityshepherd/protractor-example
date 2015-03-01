// config file for protractor...
exports.config = {

	//seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.44.0.jar",
	specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
    chromeDriver: "/usr/local/bin/chromedriver",

    onPrepare: function(){

    },

    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],

	jasmineNodeOpts: {
		isVerbose: true,
		includeStackTrace: true,
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};
