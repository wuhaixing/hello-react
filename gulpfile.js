const gulp = require("gulp");
const mocha = require("gulp-spawn-mocha");

const DEBUG = process.env.NODE_ENV === 'debug';

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

gulp.task('default',['test','watch']);