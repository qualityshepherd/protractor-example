// config file for protractor...
exports.config = {

	//seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar",
	specs: ['spec/*spec.js'],
	baseUrl: 'http://localhost',
//    sauceUser: ,
//    sauceKey: ,

	capabilities: {
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 1
	},

	params: {
		login: {
		  user: 'Jane',
		  password: '1234'
		}
	},

	jasmineNodeOpts: {
		isVerbose: true,
		includeStackTrace: true,
		showColors: true,
		defaultTimeoutInterval: 30000
	}
}
