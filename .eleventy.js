const { slugify } = require('./utils');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (config) {

  /* Plugin Markdown */

  const md = require("markdown-it")({
    breaks: true,
  });
  
  md.use( require('markdown-it-sub') );
  md.use( require('markdown-it-sup') );
  md.use( require('markdown-it-attrs') );
  md.use( require('markdown-it-anchor'), {
    slugify
  });

  md.use( require("markdown-it-toc-done-right"), {
    level: [2, 3, 4, 5],
    slugify,
  });

  md.use( require('markdown-it-container'), 'details', {
    validate: function(params) {
      return params.trim().match(/^details\s+\[(.*)\]$/);
    },
  
    render: function (tokens, idx) {
      const m = tokens[idx].info.trim().match(/^details\s+\[(.*)\]$/);
  
      if (tokens[idx].nesting === 1) {
        // opening tag
        return "<details>\n"
          + '  <summary>\n'
          + `    <span>${md.utils.escapeHtml(m[1])}</span>\n`
          + '  </summary>\n'
          + '  <div>\n';
      } else {
        // closing tag
        return '  </div>\n</details>\n';
      }
    }
  });

  md.use( require('markdown-it-texmath'), {
      engine: require('katex'),
      katexOptions: {
        displayMode: true,
        output: 'mathml'
      }
  });

  config.setLibrary("md", md);


  /* Collections */

  config.addCollection('pageTags', (collections) => {
		const uniqueTags = [...new Set(collections
			.getAll()
			.reduce((tags, item) => tags.concat(item.data.tags), [])
			.filter((tag) => !!tag)
			.filter((tag) => !!tag && !['page', 'post'].includes(tag))
			.sort())];
		return uniqueTags;
	});


  /* Filters */

  config.addFilter('capitalize', (str) => {
    if (str)
      return str.trim()
        .replace(/^(.)(.*)$/, (all, first, others) => (
          first.toUpperCase() + others.toLowerCase()
        ));
	});

  config.addFilter('lowercase', (str) => {
    if (str)
      return str.trim().toLowerCase();
	});

  
  /**
   * Returns a subset of pages of the specified category
   */
  config.addFilter('only', (pages, category) => {
    if (pages)
      return pages
      .filter((p) => !p.data.hidden)
      .filter((p) => (
        p.data.category === category
      ));
	});


  /**
   * Extract previous and next page of a collection of pages
   */
  config.addFilter('getNextPrevOf', (pages, url) => {
    if (!pages)
      return;

    let wasFound = false;
    const idx = pages.reduce((counter, p) => {
      if (wasFound)
        return counter;
      wasFound = p.url === url;
      return !wasFound ? ++counter : counter
    }, 0)
    if (wasFound) {
      return {
        prev: pages[idx-1],
        next: pages[idx+1],
      }
    }
  })


  

  config.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: false
});


  /* Passthrough copies */

  config.addPassthroughCopy("styles");
  config.addPassthroughCopy("assets");
  config.addPassthroughCopy("src/**/*.md");

  
  return {
    dir: {
      input: 'src',
      output: 'build',
      layouts: '_layouts',
      includes: '_includes',
      data: '_data'
    }
  };
};
