'use strict'

import gulp from 'gulp'
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
});

gulp.task('test', () => {
  console.log('ok!')
});

gulp.task('js', () => {
  return gulp.src(dirs.src+files.js)
    .pipe(sourcemaps.init())
    .pipe(babel({presets:['es2015']}))
    .pipe(sourcemaps.write(dirs.dest))
    .pipe(gulp.dest(dirs.dest));
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
