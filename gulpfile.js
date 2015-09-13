// set up gulp and packages
var gulp				= require('gulp');
    sass				= require('gulp-sass');
    min					= require('gulp-minify-css');
    concat				= require('gulp-concat');
    concatCSS 			= require('gulp-concat-css');
    lint              	= require('gulp-jshint');
    uglify 				= require('gulp-uglify');
    watch 				= require('gulp-watch')
    html_replace		= require('gulp-html-replace');
    notify              = require('gulp-notify');
    del                 = require('del');

// location constants
var DIST_HTML			= './dist';
    DIST_JS				= './dist/assets/js/';
    DIST_JS_LIB			= './dist/assets/js/lib';
    DIST_CSS			= './dist/assets/styles/css/';
    DIST_IMG			= './dist/assets/img/';

	ALL_HTML 			= './src/**/*.html';
	ALL_SCSS 			= './src/assets/styles/sass/*.scss'; 
	ALL_CSS 			= './src/assets/styles/css/*.css';
	DEST_CSS 			= './src/assets/styles/css/';

	ALL_JS_LIB			= './src/assets/js/lib/*.js';
	ALL_JS_CORE			= './src/assets/js/*.js';
	DEST_JS_LIB			= './src/assets/js/lib/';
	DEST_JS_CORE		= './src/assets/js/';

	ALL_IMG				= './src/assets/img/**/**';

// convert sass to css
gulp.task('sass', function(){
	gulp.src(ALL_SCSS)
        .pipe(sass())
        .pipe(gulp.dest(DEST_CSS))
        .pipe(notify({ message: 'sass complete' }));
});

// concat & min css, pipe to dist/css
gulp.task('css', ['sass'],  function(){
	gulp.src(ALL_CSS)
        .pipe(concatCSS('bundle.min.css'))
        .pipe(min())
        .pipe(gulp.dest(DIST_CSS))
        .pipe(notify({ message: 'dist/css complete' }));
});

// lint js
gulp.task('lint', function(){
    gulp.src(ALL_JS_CORE)
        .pipe(lint())
        .pipe(lint.reporter('default'))
        .pipe(notify({ message: 'lint complete' }));
});

// concat & uglify js, pipe to dist/js
gulp.task('js', ['lint',], function(){
	gulp.src(ALL_JS_CORE) 
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(DIST_JS));
    gulp.src(ALL_JS_LIB)
        .pipe(gulp.dest(DIST_JS_LIB))
        .pipe(notify({ message: 'dist/js complete' }));
});

// pipe images to dist/img
gulp.task('img', function(){
	gulp.src(ALL_IMG)
        .pipe(gulp.dest(DIST_IMG));
});


// corrects imports
gulp.task('html-imports', function(){
	gulp.src(ALL_HTML)
    	.pipe(html_replace({
	        'dev_css_index': 'assets/styles/css/bundle.min.css',
	        'dev_js_index': 'assets/js/bundle.min.js',
	    }))
    	.pipe(gulp.dest(DIST_HTML));
});

// empties dist assets
gulp.task('clean', function(cb) {
    del([DIST_CSS, DIST_JS, DIST_JS_LIB, DIST_IMG, DIST_AUDIO, DIST_FONTS], cb);
});

gulp.task('prod', ['css','js','html-imports','img']); 
gulp.task('dev', ['sass','lint']);

gulp.task('default', function(){});