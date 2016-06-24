const gulp = require("gulp");
const gutil = require("gulp-util");
const gulpif = require("gulp-if");
const streamify = require("gulp-streamify");
const source = require("vinyl-source-stream");
const browserify = require("browserify");
const babelify = require("babelify");
const watchify = require("watchify");
const uglify = require("gulp-uglify");
const mocha = require("gulp-spawn-mocha");

const DEBUG = process.env.NODE_ENV === 'debug';

const dependencies = [
	'react',
	'react-dom',
	'moment'
];

gulp.task('browserify-vendor',function() {
	return browserify()
			.require(dependencies)
			.bundle()
			.pipe(source('vendor.bundle.js'))
			//.pipe(gulpif(!DEBUG,streamify(uglify( {mangle:false}))))
			.pipe(gulp.dest('public/js'));
});

gulp.task('browserify-watch',['browserify-vendor'],function() {
	const bundler = watchify(browserify('client/js/main.js',watchify.args));
	bundler.external(dependencies);
	bundler.transform(babelify,{presets: ['es2015','react']});
	bundler.on('update',rebundle);
	return rebundle();

	function rebundle() {
		var start = Date.now();
		return bundler.bundle()
					  .on('error',function(err) {
					  	gutil.log(gutil.colors.red(err.toString()));
					  })
					  .on('end',function() {
					  	gutil.log(gutil.colors.green('Finished rebundling in ',(Date.now() - start) + 'ms.' ));
					  })
					  .pipe(source('bundle.js'))
					  .pipe(gulp.dest('public/js'));
	}
});

gulp.task('test',function() {
	return gulp.src(['test/client/*.test.js'],{read:false})
			.pipe(mocha({
				compilers:['js:babel-core/register'],
				debugBrk:DEBUG,
				r:'test/client/setup.js',
				istanbul:!DEBUG,
				output:'result.log'
			}))
});

gulp.task('watch',function() {
	gulp.watch('client/**/*.js',['test'])
	gulp.watch('test/client/**/*.js',['test'])
})

gulp.task('default',['browserify-watch','test','watch']);