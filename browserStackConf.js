exports.config = {
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',
    framework: 'jasmine2',

    onPrepare: function(){

    },

    multiCapabilities: [{
        'browserName' : 'IE',
        'browser_version' : '11.0',
        'os' : 'Windows',
        'os_version' : '8.1',
        'browserstack.user': '<YOUR USER>',
        'browserstack.key': '<YOUR KEY>'
    }, {
        'browserName' : 'android',
        'platform' : 'ANDROID',
        'device' : 'Google Nexus 4',
        'browserstack.user': '<YOUR USER>',
        'browserstack.key': '<YOUR KEY>'
    }, {
        'browserName': 'Safari',
        'browser_version': '7.0',
        'os': 'OS X',
        'os_version': 'Mavericks',
        'browserstack.user': '<YOUR USER>',
        'browserstack.key': '<YOUR KEY>'
    //}, {
    //    'browserName' : 'iPad',
    //    'platform' : 'MAC',
    //    'device' : 'iPad Air',
    //    'browserstack.user': '<YOUR USER>',
    //    'browserstack.key': '<YOUR KEY>'
    }],

    jasmineNodeOpts: {
        isVerbose: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};

