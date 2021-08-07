const { normalize } = require('./utils');

module.exports = function (config) {

  /* Plugin Markdown */

  const md = require("markdown-it")({
    breaks: true,
    linkify: true,
  });
  
  md.use( require('markdown-it-sub') );
  md.use( require('markdown-it-sup') );
  md.use( require('markdown-it-attrs') );
  md.use( require('markdown-it-anchor') );
  md.use( require("markdown-it-toc-done-right"), {
      level: [2, 3, 4, 5]
  });
  md.use( require('markdown-it-texmath'), {
      engine: require('katex'),
      katexOptions: { displayMode: true }
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
      return str.trim().toLowerCase()
        .replace(/\w\S*/g, (w) => (
          w.replace(/^\w/, (c) => c.toUpperCase())
        ));
	});

  config.addFilter('lowercase', (str) => {
    if (str)
      return str.trim().toLowerCase();
	});

  config.addFilter('only', (pages, category) => {
    if (pages)
      return pages.filter((p) => (
        normalize(p.url.match(/^\/([^/]*)\//)[1])
          .includes(normalize(category))
      ));
	});


  /* Passthrough copies */

  config.addPassthroughCopy("styles");
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
