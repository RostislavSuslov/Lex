var gulp = require('gulp');

    concatCSS = require('gulp-concat-css');
    minifyCSS = require('gulp-minify-css');
    rename = require('gulp-rename');
    autoprefixer = require('gulp-autoprefixer');
    notify = require("gulp-notify");

gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCSS('bundle.css'))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(rename('boundle.min.css'))
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(notify('Done!'))

    .pipe(gulp.dest('app/css'));

});

gulp.task('watch', function(){
    gulp.watch('css/*.css', ['default'])
})