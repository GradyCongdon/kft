import gulp from 'gulp'
import babel from 'gulp-babel'
import jshint from 'gulp-jshint'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'

const dirs = {
    src: 'src',
    dest: 'assets'
};

gulp.task('sass', () => {
  return gulp.src(dirs.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', plugins.sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dirs.dest));
});
