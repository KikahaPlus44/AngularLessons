var gulp = require('gulp');
var server = require('gulp-server-livereload');
 
gulp.task('serve', function() {
  gulp.src('./public')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      fallback: 'public/index.html',
      root: "./publick",
      open: true,
      port: 8000
    }));
});
