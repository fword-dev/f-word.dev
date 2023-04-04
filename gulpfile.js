const del = require('del');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssCsso = require('postcss-csso');
const replace = require('gulp-replace');
const rollup = require('rollup');
const rollupBabel = require('@rollup/plugin-babel');
const rollupTerser = require('@rollup/plugin-terser');

// Styles

const buildStyles = () => {
    return gulp.src('dist/styles/index.css')
        .pipe(postcss([
            postcssImport,
            postcssCsso,
        ]))
        .pipe(replace(/\.\.\//g, ''))
        .pipe(gulp.dest('dist'));
};

// Scripts

const buildScripts = () => {
    return rollup
        .rollup({
            input: './src/scripts/index.js',
            plugins: [
                rollupBabel({
                    babelHelpers: 'bundled',
                }),
                rollupTerser(),
            ],
        })
        .then(bundle => {
            return bundle.write({
                file: './dist/index.js',
                format: 'umd',
                name: 'library',
            });
        });
};


// Paths

const replacePaths = () => {
    return gulp.src('dist/**/*.html')
        .pipe(replace(
            /(<link rel="stylesheet" href=")\/styles(\/index.css">)/, '$1$2'
        ))
        .pipe(replace(
            /(<script) type="module"( src=")\/scripts(\/index.js">)/, '$1$2$3'
        ))
        .pipe(gulp.dest('dist'));
};

// Clean

const cleanFiles = () => {
    return del([
        'dist/styles',
        'dist/scripts',
        'dist/rev.json',
    ]);
};

// Build

exports.default = gulp.series(
    buildStyles,
    buildScripts,
    replacePaths,
    cleanFiles,
);
