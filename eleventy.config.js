const fs = require('node:fs');
const esbuild = require('esbuild');
const htmlmin = require('html-minifier');
const markdown = require('markdown-it')({ html: true });
const markdownItNamedHeadings = require('markdown-it-named-headings');
const lightningcss = require('lightningcss');
const music = require('music-metadata');
const prettydata = require('pretty-data');
const yaml = require('js-yaml');
const packageJson = require('./package.json');

module.exports = (config) => {
    // Audio Data Filters

    config.addFilter('length', (path) => {
        const stats = fs.statSync(path);

        return stats.size;
    });

    const getDuration = (path) => {
        return music.parseFile(path)
            .then(metadata => {
                const duration = parseFloat(metadata.format.duration);
                return new Date(Math.ceil(duration) * 1000).toISOString().substring(11, 19);
            })
            .catch(error => {
                console.log(error);
            });
    }

    config.addNunjucksAsyncFilter('duration', async (path, callback) => {
        const duration = await getDuration(path);

        callback(null, duration);
    });

    // HTML Minification

    config.addFilter('htmlmin', (value) => {
        return htmlmin.minify(
            value, {
                removeComments: true,
                collapseWhitespace: true
            }
        );
    });

    config.addTransform('htmlmin', (content, outputPath) => {
        if(outputPath && outputPath.endsWith('.html')) {
            const result = htmlmin.minify(
                content, {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    decodeEntities: true,
                    includeAutoGeneratedTags: false,
                    removeComments: true,
                }
            );

            return result;
        }

        return content;
    });

    // CSS

    const styles = [
        './src/styles/index.css',
    ];

    const processStyles = async (path) => {
        return await lightningcss.bundle({
            filename: path,
            minify: true,
            sourceMap: false,
            targets: lightningcss.browserslistToTargets(
                packageJson.browserslist,
            ),
            drafts: {
                nesting: true,
            },
        });
    };

    config.addTemplateFormats('css');

    config.addExtension('css', {
        outputFileExtension: 'css',
        compile: async (content, path) => {
            if (!styles.includes(path)) {
                return;
            }

            return async () => {
                let { code } = await processStyles(path);

                return code;
            };
        },
    });

    // JavaScript

    config.addTemplateFormats('js');

    config.addExtension('js', {
        outputFileExtension: 'js',
        compile: async (content, path) => {
            if (path !== './src/scripts/index.js') {
                return;
            }

            return async () => {
                let output = await esbuild.build({
                    target: 'es2020',
                    entryPoints: [path],
                    minify: true,
                    bundle: true,
                    write: false,
                });

                return output.outputFiles[0].text;
            }
        }
    });

    // XML Minification for RSS

    config.addTransform('xmlmin', (content, outputPath) => {
        if(outputPath && outputPath.endsWith('.xml')) {
            return prettydata.pd.xmlmin(content);
        }

        return content;
    });

    // Markdown

    config.setLibrary(
        'md', markdown.use(markdownItNamedHeadings)
    );

    config.addFilter('markdown', (value) => {
        return markdown.render(value);
    });

    // YAML

    config.addDataExtension('yml', (contents) => {
        return yaml.load(contents);
    });

    // Passthrough Copy

    [
        'src/fonts',
        'src/images',
        'src/manifest.json',
        'src/episodes/**/*.!(md|yml)',
    ].forEach(
        path => config.addPassthroughCopy(path)
    );

    // Config

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: [
            'md', 'njk'
        ],
    };
};
