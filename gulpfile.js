var gulp = require('gulp');
var config = require('./gulp.config.js')();
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', [], function () {

    browserSync.init({
        server: {
            baseDir: paths.src,
            routes: {
                "/bower_components": "bower_components"
            }
        },
        port: 3020
    });
    gulp.watch(config.filesToWatch).on('change', reload);

});