var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(
        // configuration
        webpackConfig,
        function(err, stats) {
            callback();
        });
});

gulp.task('default', ["webpack"], function() {
    return gulp.src('src/templates/*.html')
        .pipe(nunjucksRender({
            path: ['src/templates/'] // String or Array
        }))
        .pipe(gulp.dest('dist'));
});