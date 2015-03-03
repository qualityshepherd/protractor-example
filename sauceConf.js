// config file for protractor...
exports.config = {
    specs: ['specs/*Spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    // add sauceUser and sauceKey to your system's env vars...
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    onPrepare: function(){

    },

    multiCapabilities: [{
        'browserName': 'internet explorer',
        'platform': 'Windows 8.1',
        'version': '11',
        'name': 'Win8.1/IE11...',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER
    }, {
    //    'browserName': 'safari', // safari is failing on selenium 45...
    //    'platform': 'OS X 10.9',
    //    'version': '7',
    //    'name': 'Mavericks/Safari...',
    //    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    //    'build': process.env.TRAVIS_BUILD_NUMBER
    //}, {
        'browserName': 'firefox',
        'platform': 'Linux',
        'version': '33',
        'name': 'Linux/Firefox...',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER
//// sauce's mobile no worky with protractor currently...
//    }, {
//        'browserName': 'Browser',
//        'platformVersion': '5.0',
//        'platformName': 'Android',
//        'appiumVersion': '1.3.4',
//        'version': '8.0',
//        'deviceName': 'Android Emulator',
//        'device-orientation': 'portrait',
//        'name': 'iPad... ',
//        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
//        'build': process.env.TRAVIS_BUILD_NUMBER
//    }, {
//        'browserName': 'Safari',
//        'platformVersion': '8.1',
//        'platformName': 'iOS',
//        'appiumVersion': '1.3.4',
//        'version': '8.0',
//        'deviceName': 'iPad Simulator',
//        'device-orientation': 'portrait',
//        'name': 'iPad... ',
//        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
//        'build': process.env.TRAVIS_BUILD_NUMBER
    }],

    jasmineNodeOpts: {
        isVerbose: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
