'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      clean = require('gulp-clean'),
      pug = require('gulp-pug');

gulp.task('sass', function() {
  return gulp.src('./src/assets/sass/main.sass')
    .pipe(sass.sync({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/assets/sass/**/*.sass', ['sass']);
});

gulp.task('pug', function() {
  return gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'pug']);
