var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

var outputPath = '../main/resources/frontend';

gulp.task('default', ['js', 'html']);

gulp.task('html', function () {
    return gulp.src('code/**/*.html')
        .pipe(gulp.dest(outputPath + '/views'));
});

gulp.task('js', function () {
    return gulp.src('code/**/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(outputPath + '/js'))
});