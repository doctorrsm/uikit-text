const gulp = require('gulp');


const nunjucks = require('gulp-nunjucks');


gulp.task('nunjucks', function () {
    return gulp.src('./src/html/*.njk')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('./dist'));
});


gulp.task('watch', function () {
    gulp.watch('./src/html/**/*.njk', gulp.series('nunjucks'));    
});

gulp.task('build', function () {
    gulp.watch('./src/html/**/*.njk', gulp.series('nunjucks'));
});

gulp.task('default', gulp.series( 'nunjucks', 'watch'));