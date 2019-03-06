const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("work/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("work/scss/*.scss", gulp.series("sass"));
});
