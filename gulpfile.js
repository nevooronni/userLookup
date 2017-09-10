//gulpfile js

//gulp
var gulp = require('gulp');

//browserify
var browserify = require('browserify');
//vinyl-source
var source = require('vinyl-source-stream');

//run browserify
gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/interface-script.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});