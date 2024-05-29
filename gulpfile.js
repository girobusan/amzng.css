const gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require( 'cssnano' );
var autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const compiler = require('sass');

sass.compiler = compiler;

gulp.task('sass',function() {
    return gulp.src('./dev/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe( postcss( [ 
        autoprefixer(),
        // cssnano
        ] ) )
      .pipe(gulp.dest('./css'));
  });

gulp.task('watch', function(){
  gulp.watch('./dev/scss/**/*.scss', gulp.series('sass')); 
})
