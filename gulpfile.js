var gulp = require('gulp');
var webserver = require('gulp-webserver');
var nodemon = require('gulp-nodemon');
var plugin = require('gulp-load-plugins')({lazy: true});
var bowerFiles = require('main-bower-files');
var config = require('./gulp.config')();

gulp.task('index', function () {
    return gulp.src(config.clientIndex)
        .pipe(plugin.inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true}))
        .pipe(plugin.inject(gulp.src(config.js, {read: false}), {relative: true}))
        .pipe(plugin.inject(gulp.src(config.css, {read: false}), {relative: true}))
        .pipe(gulp.dest(config.clientApp));
});

gulp.task('webserver', ['nodejs'], function () {
    return gulp.src([config.clientApp])
        .pipe(webserver({
            livereload: true,
            port: 8001,
            proxies: [
                {
                    source: '/api',
                    target: 'http://localhost:3007/api'
                }
            ],
            directoryListing: false,
            open: true
        }));

});

gulp.task('nodejs', function () {
    nodemon({script: config.serverIndex})
        .on('change', function () {
            log('nodemon detected change...!')
        })
        .on('restart', function () {
            log('node application is restarted!')
        })
});
gulp.task('help', plugin.taskListing);
gulp.task('default', ['webserver']);

////////////////////////////////////////////////////////////////////
function log(msg) {
    var date = new Date();
    plugin.util.log( plugin.util.colors.green( msg));

}