const babel = require('gulp-babel');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const terser = require('gulp-terser');
const replace = require('gulp-replace');
const del = require('del');

// Styles

gulp.task('styles', () => {
    return gulp.src('dist/styles/index.css')
        .pipe(postcss([
            require('postcss-import'),
            require('postcss-csso'),
        ]))
        .pipe(replace(/\.\.\//g, ''))
        .pipe(gulp.dest('dist'));
});

// Scripts

gulp.task('scripts', () => {
    return gulp.src('dist/scripts/index.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(terser())
        .pipe(gulp.dest('dist'));
});

// Paths

gulp.task('paths', () => {
    return gulp.src('dist/**/*.html')
        .pipe(replace(
            /(<link rel="stylesheet" href=")\/styles(\/index.css">)/, '$1$2'
        ))
        .pipe(replace(
            /(<script src=")\/scripts(\/index.js">)/, '$1$2'
        ))
        .pipe(gulp.dest('dist'));
});

// Clean

gulp.task('clean', () => {
    return del([
        'dist/styles',
        'dist/scripts',
    ]);
});

// Build

gulp.task('build', gulp.series(
    'styles',
    'scripts',
    'paths',
    'clean',
));
