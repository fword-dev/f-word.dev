module.exports = function(config) {
    config.addPassthroughCopy('src/fonts');
    config.addPassthroughCopy('src/images');
    config.addPassthroughCopy('src/.webmanifest');
    config.addPassthroughCopy('src/episodes/**/*.mp3');

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

    config.addTransform('xmlmin', function(content, outputPath) {
        if(outputPath && outputPath.endsWith('.xml')) {
            let prettydata = require('pretty-data');
            return prettydata.pd.xmlmin(content);
        }
        return content;
    });

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
        passthroughFileCopy: true,
        templateFormats: [
            'md', 'njk'
        ],
    };
};
