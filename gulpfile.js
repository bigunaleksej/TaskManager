var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var less = require('gulp-less');
var mainBowerFiles = require('main-bower-files');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('libs', function () {
    var jsFilter = gulpFilter('**/*.js', {restore: true});
    var lessFilter = gulpFilter('**/*.less', {restore: true});

    return gulp.src(mainBowerFiles({
        includeDev: true
    }))
        .pipe(jsFilter)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./dist/scripts/libs'))
        .pipe(jsFilter.restore)
        .pipe(lessFilter)
        .pipe(less())
        .pipe(gulp.dest('./dist/styles/libs'))
        .pipe(connect.reload());
});

gulp.task('browserify', function() {
    return browserify('./assets/scripts/app.js', {debug:true})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(connect.reload());
});

gulp.task('templates', function() {
    return gulp.src('./assets/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('./assets/**/*.jpg')
        .pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
    return gulp.src('assets//styles/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(connect.reload());
});

gulp.task('icons', function() {
    return gulp.src('bower_components/bootstrap/fonts/**.*')
        .pipe(gulp.dest('./dist/styles/fonts'));
});

gulp.task('watch', function() {

    gulp.watch('bower.json', ['libs']);
    gulp.watch('assets/scripts/**/*.js', ['browserify']);
    gulp.watch('assets/**/*.html', ['templates']);
    gulp.watch('assets/styles/**/*.less', ['less']);
    gulp.watch('assets/**/*.jpg', ['images']);
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    })
});

gulp.task('default', ['libs', 'browserify', 'templates', 'less', 'icons', 'images', 'watch', 'connect']);