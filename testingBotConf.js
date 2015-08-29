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
        client_key: 'fdb1499e416c406a313f01d14afab728',
        client_secret: '685f5d0b8008bd5e1b7aa085b230d732'
    }, {
        'name' : 'firefox-latest',
        'browserName' : 'firefox',
        'platform' : 'LINUX',
        'version' : '',
        client_key: 'fdb1499e416c406a313f01d14afab728',
        client_secret: '685f5d0b8008bd5e1b7aa085b230d732'
    }, {
        'name' : 'IE11',
        'browserName' : 'iexplore',
        'platform' : 'WIN8',
        'version' : '11.0',
        client_key: 'fdb1499e416c406a313f01d14afab728',
        client_secret: '685f5d0b8008bd5e1b7aa085b230d732'
    }, {
        'name' : 'Safari8',
        'browserName' : 'safari',
        'platform' : 'YOSEMITE',
        'version' : '8.0',
        client_key: 'fdb1499e416c406a313f01d14afab728',
        client_secret: '685f5d0b8008bd5e1b7aa085b230d732'
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
