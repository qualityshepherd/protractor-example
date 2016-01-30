// config file for protractor...
exports.config = {

    seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar",
	specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
    framework: 'jasmine2',

    onPrepare: function(){
        // set implicit wait times in ms...
        browser.manage().timeouts().pageLoadTimeout(10000);
        browser.manage().timeouts().implicitlyWait(5000);
        // set browser size...
        browser.manage().window().setSize(1024, 800);

        // better jasmine 2 reports...
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'spec'}));
    },

    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }],

	jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: function () {},
        defaultTimeoutInterval: 50000
    }
};
