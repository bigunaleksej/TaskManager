var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var less = require('gulp-less');
var mainBowerFiles = require('main-bower-files');
var connect = require('gulp-connect');



gulp.task('libs', function () {
    var jsFilter = gulpFilter('**/*.js', {restore: true});
    var lessFilter = gulpFilter('**/*.less', {restore: true});

    return gulp.src(mainBowerFiles({
        includeDev: true
    }))
        .pipe(jsFilter)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('scripts/libs'))
        .pipe(jsFilter.restore)
        .pipe(lessFilter)
        .pipe(less())
        .pipe(gulp.dest('styles/libs'))
        .pipe(connect.reload());
});

gulp.task('less', function () {
    return gulp.src('./styles/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./styles'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('bower.json', ['libs']);
    gulp.watch('styles/**/*.less', ['less']);
});

gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true
    })
});

gulp.task('default', ['libs', 'less', 'watch', 'connect']);