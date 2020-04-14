const babel = require('gulp-babel');
const buffer = require('vinyl-buffer');
const del = require('del');
const gulp = require('gulp');
const paths = require('vinyl-paths');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const terser = require('gulp-terser');

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

gulp.task('scripts', function() {
    return rollup({
        input: 'src/scripts/index.js',
        format: 'es',
    })
    .pipe(source('index.js'))
    .pipe(buffer())
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
            /(<script) type="module"( src=")\/scripts(\/index.js">)/, '$1$2$3'
        ))
        .pipe(gulp.dest('dist'));
});

// Cache

gulp.task('cache:hash', () => {
    return gulp.src([
            'dist/**/*.{css,js,svg,png,woff2}',
            'dist/manifest.json',
        ], {
            base: 'dist'
        })
        .pipe(paths(del))
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest('rev.json'))
        .pipe(gulp.dest('dist'));
});

gulp.task('cache:replace', () => {
    return gulp.src([
            'dist/**/*.{html,css}',
            'dist/manifest-*.json',
        ])
        .pipe(revRewrite({
            manifest:
            gulp.src('dist/rev.json').pipe(paths(del))
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('cache', gulp.series(
    'cache:hash',
    'cache:replace',
));

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
    'cache',
));
