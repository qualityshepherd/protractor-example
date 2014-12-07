// config file for protractor...
exports.config = {
    seleniumServerJar: "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.43.1.jar",
    chromeDriver: "/usr/bin/chromedriver",
	specs: ['spec/*spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    onPrepare: function(){
    },

    capabilities: {
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 2
	},

	jasmineNodeOpts: {
		isVerbose: true,
		includeStackTrace: true,
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};
