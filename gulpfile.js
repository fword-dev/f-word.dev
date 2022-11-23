const del = require('del');
const fs = require('fs');
const gulp = require('gulp');
const paths = require('vinyl-paths');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssCsso = require('postcss-csso');
const replace = require('gulp-replace');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
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

// Cache

const cacheRevision = () => {
    return gulp.src([
            'dist/**/*.{css,js,svg,png,woff2}',
            '!dist/images/cover.png',
            'dist/manifest.json',
        ], {
            base: 'dist'
        })
        .pipe(paths(del))
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest('rev.json'))
        .pipe(gulp.dest('dist'));
};

const cacheRewrite = () => {
    const manifest = fs.readFileSync('dist/rev.json');
    return gulp.src([
            'dist/**/*.{html,css}',
            'dist/manifest-*.json',
        ])
        .pipe(revRewrite({
            manifest
        }))
        .pipe(gulp.dest('dist'));
};

const cacheFiles = gulp.series(
    cacheRevision,
    cacheRewrite,
);

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
    cacheFiles,
    cleanFiles,
);
