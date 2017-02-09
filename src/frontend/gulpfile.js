var gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');
    concatVendor = require('gulp-concat-vendor');

var outputPath = '../public';

gulp.task('default', ['js', 'html', 'vendorJs', 'css', 'images']);

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

gulp.task('css', function () {
    return gulp.src('code/css/**/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(outputPath + '/css'))
});

gulp.task('images', function () {
    return gulp.src('code/img/**/*.png')
        .pipe(gulp.dest(outputPath + '/img'))
});

var vendorJsPath = [
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js'
];

gulp.task('vendorJs', function () {
    return gulp.src(vendorJsPath)
        .pipe(concatVendor('vendor.min.js'))
        .pipe(gulp.dest(outputPath + '/js'))
});

gulp.task('watch', function () {
    gulp.watch('code/**/*.html', ['html']);
    gulp.watch('code/**/*.js', ['js']);
    gulp.watch('code/css/**/*.css', ['css']);
});