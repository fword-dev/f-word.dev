const gulp = require('gulp');
const postcss = require('gulp-postcss');

// Styles

gulp.task('styles', () => {
    return gulp.src('src/styles/index.css')
        .pipe(postcss([
            require('postcss-import'),
            require('postcss-csso')
        ]))
        .pipe(gulp.dest('dist'));
});

// Build

gulp.task('build', gulp.series(
    'styles'
));
