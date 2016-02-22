var gulp = require('gulp');
var webpack = require('gulp-webpack');
var watch = require('gulp-watch');
var runseq = require('run-sequence');
var less = require('gulp-less');
var path = require('path');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('less', function() {
  gulp.src('src/assets/less/**/theme.config')
  .pipe(gulp.dest('node_modules/semantic-ui-less/'));

  gulp.src('src/assets/less/**/*.less')
    .pipe(less({
      plugins: [autoprefix, cleancss],
      paths: [ path.join(__dirname, 'node_modules') ]
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copyhtml', function() {
   gulp.src('src/**/*.html')
   .pipe(gulp.dest('dist/'));
});

gulp.task('webpack', function() {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.less', function() {
    runseq('less');
  });

  gulp.watch('src/**/*.js', function() {
    runseq('webpack');
  });
  gulp.watch('src/**/*.html',  function() {
       runseq('copyhtml');
  });
});

gulp.task('default', ['copyhtml', 'webpack', 'less']);
