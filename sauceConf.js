// config file for protractor...
exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar",
    chromeDriver: "/usr/bin/chromedriver",
    specs: ['spec/*spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    onPrepare: function(){
        global.dvr = browser.driver; // alias...
    },

    capabilities: {
        'browserName': 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER,
        'name': 'protractor example tests on sauce...',
        'version': '36',
        'platform': 'OS X 10.9',
        'selenium-version': '2.43.1'
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
