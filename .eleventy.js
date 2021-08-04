const { normalize } = require('./utils');

module.exports = function (config) {

  config.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true,
  }));


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

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
      includes: '_includes',
      data: '_data'
    }
  };
};
