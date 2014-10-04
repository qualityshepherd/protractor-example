// config file for protractor...
exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: "/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar",
    specs: ['spec/*spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
//    sauceUser: ,
//    sauceKey: ,

    onPrepare: function(){
        global.dvr = browser.driver; // alias...

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
