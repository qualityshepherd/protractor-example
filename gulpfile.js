var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;

// Setting up the test task
gulp.task('test', function(cb) {
    gulp.src(['spec/*spec.js']).pipe(protractor({
        configFile: 'sauceConf.js'
    })).on('error', function(e) {
        console.log(e)
    }).on('end', cb);
});

