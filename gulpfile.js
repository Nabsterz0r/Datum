var gulp 				= require('gulp'),
		sass 				= require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat 			= require('gulp-concat'),
		uglify 			= require('gulp-uglifyjs'),
		cssnano 		= require('gulp-cssnano'),
		rename 			= require('gulp-rename'),
		del 				= require('del'),
		imagemin		= require('gulp-imagemin'),
		pngquant 		= require('imagemin-pngquant'),
		cache				= require('gulp-cache'),
		autoprefixer= require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'] , { cascade: true }))
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
				baseDir: 'app'
		},
			notify: false 
	});
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/js/leaflet.js',
		'app/libs/Leaflet.MeasureControl/docs/leaflet-draw/dist/leaflet.draw.js',
		'app/libs/Leaflet.MeasureControl/docs/leaflet.measurecontrol.js',
		'app/libs/Leaflet.Control.MousePosition/L.Control.MousePosition.js',
		'app/libs/js/jquery-3.2.0.js',
		'app/libs/js/bootstrap.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css')
					.pipe(cssnano())
					.pipe(rename({suffix: '.min'}))
					.pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
					.pipe(cache(imagemin({
						interlaced: true,
						progressive: true,
						svgoPlugins: [{removeViewBox: false}],
						use: [pngquant()]
					})))
					.pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
	var buildCss = gulp.src('app/css/**/*')
	.pipe(gulp.dest('dist/css'))

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js/'))

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('clear', function(callback) {
	return cache.clearAll();
});


























