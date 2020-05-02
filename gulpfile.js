let gulp = require('gulp'),
  minCSS = require('gulp-clean-css'),
  browserSync = require('browser-sync').create(),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  autopref = require('gulp-autoprefixer'),
  comb  = require('gulp-csscomb'),
  minHTML = require('gulp-htmlclean');

//Puth
let fromScss = 'dev/scss/**/*.scss',
    styleScss = 'dev/scss/style.scss',
    toCSS = 'prod/styles/',
    toMinCSS = 'prod/styles/',
    fromHTML = 'dev/*.html',
    toMinHTML = 'prod/';


gulp.task('html', function() {
  return gulp.src(fromHTML)
    .pipe(minHTML())
    .pipe(gulp.dest('prod/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src(styleScss)
    .pipe(sass())
    .pipe(autopref({
      overrideBrowserslist:  ['last 2 versions'],
      cascade: false
    })) 
    .pipe(comb('csscomb.json'))
    .pipe(gulp.dest(toCSS))
    .pipe(minCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(toMinCSS))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {

  browserSync.init({
    server: "prod/"
  });
      
  gulp.watch(fromScss, gulp.parallel('sass'));
  gulp.watch(fromHTML, gulp.parallel('html'));
});
  
gulp.task('default', gulp.series('html','sass','serve'));