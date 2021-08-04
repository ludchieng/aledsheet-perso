module.exports = function (config) {

  config.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true,
  }));

  config.addCollection('pageTags', (collections) => {
		const uniqueTags = [...new Set(collections
			.getAll()
			.reduce((tags, item) => tags.concat(item.data.tags), [])
			.filter((tag) => !!tag)
			.filter((tag) => !!tag && !['page', 'post'].includes(tag))
			.sort())];
		return uniqueTags;
	});
  config.addFilter('capitalize', (str) => {
		return str.trim().toLowerCase()
      .replace(/\w\S*/g, (w) => (
        w.replace(/^\w/, (c) => c.toUpperCase())
      ));
	});


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
