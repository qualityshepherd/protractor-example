// config file for protractor...
exports.config = {
    specs: ['spec/*spec.js'],
    baseUrl: 'http://qualityshepherd.com/angular',

    // add sauceUser and sauceKey to your system's env vars...
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    //sauceUser: "qualityshepherd",
    //sauceKey: "eea4ba85-52c0-4e68-b158-d5f2f8d32b2a",


    onPrepare: function(){

    },

    multiCapabilities: [{
        'browserName': 'internet explorer',
        'platform': 'Windows 7',
        'version': '11',
        'name': 'IE11...',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER
    }, {
        'browserName': 'safari',
        'platform': 'OS X 10.9',
        'version': '7',
        'name': 'Safari...',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER

// more than two tests are currently failing on sauce...
//    }, {
//        'browserName': 'android',
//        'platform': 'Linux',
//        'version': '4.4',
//        'name': 'Protractor example tests on Firefox...',
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
