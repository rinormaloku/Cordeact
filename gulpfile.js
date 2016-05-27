var gulp = require('gulp');
var inject = require('gulp-inject');
var webpack = require('gulp-webpack');
var ripple = require('ripple-emulator');
var o = require('open');

gulp.task('update', function () {
    return gulp
        .src('./www/index.html')
        //.pipe(wiredep())
        .pipe(inject(gulp.src('./www/js/app.bundle.js'), {relative: true}))
        .pipe(gulp.dest('./www/'));
});

gulp.task('rebundle', function () {
    return gulp
        .src('./app/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./www/js/'));
});

gulp.task('serve', function () {
    var options = {
        keepAlive: false,
        open: true,
        port: 4400
    };

    gulp.watch('./app/**', function (evt) {
        gulp.run('rebundle');
    });

    gulp.watch('./www/js/**', function (evt) {
        gulp.run('update');
    });

    ripple.emulate.start(options);
    
    if (options.open) {
        o('http://localhost:' + options.port + '?enableripple=cordova-3.0.0');
    }
});
