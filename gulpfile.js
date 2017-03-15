'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      clean = require('gulp-clean');

gulp.task('sass', function() {
  return gulp.src('./src/sass/main.sass')
    .pipe(sass.sync({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass']);
