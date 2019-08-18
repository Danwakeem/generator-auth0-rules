const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('default', () =>
  gulp
    .src(['rules/*.js'])
    .pipe(replace('module.exports = { rule };', ''))
    .pipe(gulp.dest('dist'))
);
