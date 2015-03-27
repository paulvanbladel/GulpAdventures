var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var plugin = require('gulp-load-plugins')({lazy: true});
var bowerFiles = require('main-bower-files');
var config = require('./gulp.config')();
var bower = require('gulp-bower');
var nodeJsPort = process.env.PORT || config.defaultNodePort;
var webServerPort = config.defaultWebServerPort;
//TODO Watch when refs added while running....
gulp.task('index', function () {
    return gulp.src(config.clientIndex)
        .pipe(plugin.inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true}))
        .pipe(plugin.inject(gulp.src(config.js, {read: false}), {relative: true}))
        .pipe(plugin.inject(gulp.src(config.css, {read: false}), {relative: true}))
        .pipe(gulp.dest(config.client));
});

gulp.task('build', ['index'], function () {

    var assets = plugin.useref.assets();
    //var templateCache = config.temp + config.templateCache.file;
    var cssFilter = plugin.filter('**/*.css');
    var jsLibFilter = plugin.filter('**/' + config.optimized.lib);
    var jsAppFilter = plugin.filter('**/' + config.optimized.app);
    //from https://github.com/jamesknelson/gulp-rev-replace
    return gulp
        .src(config.clientIndex)
        .pipe(plugin.plumber())
        //.pipe(plugin.inject(
        //    gulp.src(templateCache, {read: false}), {
        //        starttag: '<!-- inject:templates:js -->'
        //    }))
        .pipe(assets)
        .pipe(cssFilter)
        .pipe(plugin.csso())
        .pipe(cssFilter.restore())
        .pipe(jsLibFilter)
        .pipe(plugin.uglify())
        .pipe(jsLibFilter.restore())
        .pipe(jsAppFilter)
        .pipe(plugin.ngAnnotate())
        .pipe(plugin.uglify())
        .pipe(jsAppFilter.restore())
        .pipe(plugin.rev())
        .pipe(assets.restore())
        .pipe(plugin.useref())
        .pipe(plugin.revReplace())
        .pipe(gulp.dest(config.build))
        .pipe(plugin.rev.manifest())
        .pipe(gulp.dest(config.build));
});

var browserSync = require('browser-sync');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
gulp.task('webserver', ['nodejs'], function () {
    browserSync({
        browser: "chrome",
        port: webServerPort,
        server: {
            baseDir: config.client
        },
        files: [
            config.clientApp + '/**/*.*',
            config.clientIndex
        ],
        middleware: function (req, res, next) {
            var url = req.url;

            if (url.substring(0, 5) === "/api/") {
                proxy.web(req, res, {target: 'http://localhost:' + nodeJsPort});
            } else {
                next();
            }
        }
    });
});



gulp.task('nodejs', function () {
    var nodeOptions = {
        script: config.serverIndex,
        delayTime: 1,
        env: {
            'PORT': nodeJsPort
        //    'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.server]
    };
    nodemon(nodeOptions)
        .on('change', function () {
            log('nodemon detected change...!')
        })
        .on('restart', function () {
            log('node application is restarted!')
        })
        .on('restart', function(ev) {
            log('*** nodemon restarted');
            log('files changed on restart:\n' + ev);
            setTimeout(function() {
                browserSync.notify('reloading now ...');
                browserSync.reload({stream: false});
            }, 1000);
        })
});
gulp.task('help', plugin.taskListing);
gulp.task('default', ['webserver']);
// Bower
gulp.task('bower', function () {
    return bower()
        .on('log', function (data) {
        plugin.util.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});
////////////////////////////////////////////////////////////////////
function log(msg) {
    plugin.util.log(plugin.util.colors.green(msg));

}