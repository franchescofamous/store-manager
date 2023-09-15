const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("./src/styles/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/styles/css"));
});

gulp.task("watch", function () {
  gulp.watch("./src/styles/sass/**/*.scss", gulp.series("sass"));
});
