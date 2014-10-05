module.exports = function(grunt) {
    protractor: {
        saucelabs: {
            options: {
                configFile: "sauceConf.js"
                }
        }
    }
};