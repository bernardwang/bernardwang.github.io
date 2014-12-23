var gulp = require('gulp'),
	sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifycss = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	del = require('del');

gulp.task('default', ['clean'], function() {
    gulp.start('style', 'script');
});

gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js'], cb)
});

gulp.task('style', function() {
	gulp.src('assets/style/sass/*.scss')
   		.pipe(sass())
		.pipe(rename({suffix: '.min'}))
	    .pipe(gulp.dest('dist/assets/css'))
		.pipe(minifycss())
	    .pipe(gulp.dest('dist/assets/css'))
		.pipe(notify({ message: 'style complete' }));
});

gulp.task('script', function() {
	return gulp.src('assets/js/*.js')
		.pipe(jshint('.jshintrc'))
	    .pipe(jshint.reporter('default'))
	   	//.pipe(concat('script.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/assets/js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets/js'))
		.pipe(notify({ message: 'script complete' }));
});
