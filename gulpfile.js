const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const compiler = require('sass');

sass.compiler = compiler;

gulp.task('sass',function() {
    return gulp.src('./dev/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });

gulp.task('watch', function(){
  gulp.watch('./dev/scss/**/*.scss', gulp.series('sass')); 
})
