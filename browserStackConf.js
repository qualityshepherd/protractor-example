exports.config = {
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    specs: ['specs/*Specs.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    onPrepare: function(){

    },

    multiCapabilities: [{
        'browserName' : 'IE',
        'browser_version' : '11.0',
        'os' : 'Windows',
        'os_version' : '8.1',
        'browserstack.user': 'brine3',
        'browserstack.key': 'jwmsfRFuXiYNTx7x1Jcz'
    }, {
        'browserName' : 'android',
        'platform' : 'ANDROID',
        'device' : 'Google Nexus 4',
        'browserstack.user': 'brine3',
        'browserstack.key': 'jwmsfRFuXiYNTx7x1Jcz'
    }, {
        'browserName': 'Safari',
        'browser_version': '7.0',
        'os': 'OS X',
        'os_version': 'Mavericks',
        'browserstack.user': 'brine3',
        'browserstack.key': 'jwmsfRFuXiYNTx7x1Jcz'
    //}, {
    //    'browserName' : 'iPad',
    //    'platform' : 'MAC',
    //    'device' : 'iPad Air',
    //    'browserstack.user': 'brine3',
    //    'browserstack.key': 'jwmsfRFuXiYNTx7x1Jcz'
    }],

    jasmineNodeOpts: {
        isVerbose: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};

