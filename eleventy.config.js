const fs = require('fs');
const htmlmin = require('html-minifier');
const markdown = require('markdown-it')({ html: true });
const markdownItNamedHeadings = require('markdown-it-named-headings');
const music = require('music-metadata');
const prettydata = require('pretty-data');
const yaml = require('js-yaml');

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
                    removeComments: true,
                    collapseWhitespace: true
                }
            );

            return result;
        }

        return content;
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
