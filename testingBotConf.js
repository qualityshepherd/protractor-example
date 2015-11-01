exports.config = {
    seleniumAddress: 'http://hub.testingbot.com/wd/hub',
    specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
    framework: 'jasmine2',

    onPrepare: function () {
        // set implicit wait times in ms...
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().window().setSize(1024, 800);

        // better jasmine 2 reports...
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
    },

    multiCapabilities: [{
        'name' : 'chrome-latest',
        'browserName' : 'googlechrome',
        'platform' : 'LINUX',
        client_key: '<YOUR KEY HERE>',
        client_secret: '<YOUR SECRET HERE>'
    }, {
        'name' : 'firefox-latest',
        'browserName' : 'firefox',
        'platform' : 'LINUX',
        'version' : '',
        client_key: '<YOUR KEY HERE>',
        client_secret: '<YOUR SECRET HERE>'
    }, {
        'name' : 'IE11',
        'browserName' : 'iexplore',
        'platform' : 'WIN8',
        'version' : '11.0',
        client_key: '<YOUR KEY HERE>',
        client_secret: '<YOUR SECRET HERE>'
    }, {
        'name' : 'Safari8',
        'browserName' : 'safari',
        'platform' : 'YOSEMITE',
        'version' : '8.0',
        client_key: '<YOUR KEY HERE>',
        client_secret: '<YOUR SECRET HERE>'
    }],

    shardTestFiles: true,
    maxInstances: 2,

    suites: {
        errthing: 'specs/*Spec.js'
    },

    jasmineNodeOpts: {
        showColors: true,
        print: function () {
        },
        defaultTimeoutInterval: 30000
    }
};
