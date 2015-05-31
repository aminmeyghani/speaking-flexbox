var gulp = require("gulp");
var rename = require("gulp-rename");

gulp.task('autoprefixer', function () {
  var postcss      = require('gulp-postcss');
  // var sourcemaps   = require('gulp-sourcemaps');
  var autoprefixer = require('autoprefixer-core');

  return gulp.src('./public/main.css')
  // .pipe(sourcemaps.init())
  .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
  // .pipe(sourcemaps.write('.'))
  .pipe(rename("compiled.css"))
  .pipe(gulp.dest('./public'));
});

gulp.task("watch", function () {
  gulp.watch("public/main.css", ["autoprefixer"]);
})

gulp.task("default", ["watch"]);
