"use strict";

let gulp = require("gulp");
let browserify = require("browserify");
let source = require("vinyl-source-stream");

gulp.task("default", function() {
  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"))
});
