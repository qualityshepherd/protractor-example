var gulp = require('gulp');
var gp = require('gulp-protractor');

gulp.task('webdriver-update', gp.webdriver_update);

// Setting up the test task
gulp.task('e2e:all', function(done) {
    gulp.src(['specs/*Spec.js']).pipe(gp.protractor({
        configFile: 'conf.js'
    })).on('error', function(e) {
        console.log(e)
    }).on('end', done);        
});
