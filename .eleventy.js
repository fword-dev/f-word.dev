module.exports = function(config) {
    // Audio Data Filters

    config.addFilter('length', function(path) {
        const fs = require('fs');
        const stats = fs.statSync(path);
        return stats.size;
    });

    function getDuration(path) {
        const music = require('music-metadata');

        return music.parseFile(path)
            .then(metadata => {
                const duration = parseFloat(metadata.format.duration);
                const date = new Date(null).setSeconds(Math.ceil(duration));

                return new Intl.DateTimeFormat('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false,
                    timeZone: 'UTC',
                }).format(date);
            })
            .catch(error => {
                console.log(error);
            });
    }

    config.addNunjucksAsyncFilter('duration', async function (path, callback) {
        const duration = await getDuration(path);

        callback(null, duration);
    });

    // HTML Minification

    config.addFilter('htmlmin', function(value) {
        let htmlmin = require('html-minifier');
        return htmlmin.minify(
            value, {
                removeComments: true,
                collapseWhitespace: true
            }
        );
    });

    config.addTransform('htmlmin', (content, outputPath) => {
        if(outputPath && outputPath.endsWith('.html')) {
            let htmlmin = require('html-minifier');
            let result = htmlmin.minify(
                content, {
                    removeComments: true,
                    collapseWhitespace: true
                }
            );
            return result;
        }
        return content;
    });

    // XML Minification for RSS

    config.addTransform('xmlmin', function(content, outputPath) {
        if(outputPath && outputPath.endsWith('.xml')) {
            let prettydata = require('pretty-data');
            return prettydata.pd.xmlmin(content);
        }
        return content;
    });

    // Markdown Options

    let markdownIt = require('markdown-it');
    let markdownItNamedHeadings = require('markdown-it-named-headings');

    config.setLibrary('md', markdownIt({
        html: true
    }).use(markdownItNamedHeadings));

    // Passthrough Copy

    config.addPassthroughCopy('src/fonts');
    config.addPassthroughCopy('src/images');
    config.addPassthroughCopy('src/styles');
    config.addPassthroughCopy('src/scripts');
    config.addPassthroughCopy('src/manifest.json');
    config.addPassthroughCopy('src/episodes/**/*.mp3');

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
