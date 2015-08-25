exports.config = {
    seleniumAddress: 'http://hub.testingbot.com/wd/hub',
    specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
    framework: 'jasmine2',

    onPrepare: function () {
        // set implicit wait times in ms...
        browser.manage().timeouts().pageLoadTimeout(15000);
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().window().setSize(1024, 800);

        // better jasmine 2 reports...
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
    },

    multiCapabilities: [{
        name : 'IE11',
        browserName : 'iexplore',
        platform : 'WIN7',
        version : '9.0',
        client_key: 'fdb1499e416c406a313f01d14afab728',
        client_secret: '685f5d0b8008bd5e1b7aa085b230d732'
    }, {
        name : 'chrome',
        browserName : 'googlechrome',
        platform : 'MAVERICKS',
        client_key : 'fdb1499e416c406a313f01d14afab728',
        client_secret : '685f5d0b8008bd5e1b7aa085b230d732'
    }, {
        name : 'firefox linux',
        browserName : 'firefox',
        platform : 'LINUX',
        //version : '39.0',
        client_key : 'fdb1499e416c406a313f01d14afab728',
        client_secret : '685f5d0b8008bd5e1b7aa085b230d732'
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
