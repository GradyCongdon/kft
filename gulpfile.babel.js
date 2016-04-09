'use strict'

import gulp from 'gulp'
import watch from 'gulp-watch'
import babel from 'gulp-babel'
import jshint from 'gulp-jshint'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import autoprefixer from 'gulp-autoprefixer'

const dirs = {
    src: 'src',
    dest: 'assets'
};

const files = {
    scss: '*.scss',
    js: '*.js'
};

gulp.task('default', ['js', 'sass'], () => {
  gulp.watch('./src/js.js', ['js']);
  gulp.watch('./src/scss.scss', ['sass'])
});

gulp.task('test', () => {
  console.log('ok!')
});

gulp.task('js', () => {
  return gulp.src('./src/js.js')
    .pipe(sourcemaps.init())
    .pipe(babel({presets:['es2015']}))
    .pipe(gulp.dest('./assets'));
});

gulp.task('sass', () => {
  return gulp.src('./src/scss.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('css.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets'))
});
