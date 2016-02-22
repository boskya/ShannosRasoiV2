var gulp = require('gulp');
var webpack = require('gulp-webpack');
var watch = require('gulp-watch');
var runseq = require('run-sequence');

gulp.task('copyhtml', function() {
   gulp.src('src/**/*.html')
   .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', function() {
    runseq('webpack');
  });
  gulp.watch('src/**/*.html',  function() {
       runseq('copyhtml');
  });
});

gulp.task('webpack', function() {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['copyhtml', 'webpack']);
