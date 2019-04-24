const gulp = require('gulp');
// const concat = require("gulp-concat");
const concat = require('gulp-concat-css-import');
const rename = require('gulp-rename');
// const postcss = require('gulp-postcss');
// const order = require("gulp-order");
// const properties = require('postcss-custom-properties');
const sourcemaps = require('gulp-sourcemaps');
// const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
/* const watch = require("gulp-watch");
const color = require("postcss-color-function"); */

gulp.task('concatCoreCss', () =>
  gulp
    .src('./src/css/src/astro.core.css')
    .pipe(sourcemaps.init())
    .pipe(concat({ isCompress: false }))
    .pipe(gulp.dest('src/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(gulp.dest('src/css'))
    .pipe(sourcemaps.write('./')),
);

gulp.task('concatAllCss', () =>
  gulp
    .src('./src/css/src/astro.css')
    .pipe(sourcemaps.init())
    .pipe(concat({ isCompress: false }))
    .pipe(gulp.dest('src/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(gulp.dest('src/css'))
    .pipe(sourcemaps.write('./')),
);

gulp.task('css', gulp.series('concatCoreCss', 'concatAllCss'));
