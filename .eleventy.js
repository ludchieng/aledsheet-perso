module.exports = function (config) {

  config.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true,
  }));

  config.addCollection('pageTags', (collections) => {
		const uniqueTags = collections
			.getAll()
			.reduce((tags, item) => tags.concat(item.data.tags), [])
			.filter((tag) => !!tag)
			.filter((tag) => !!tag && !['page', 'post'].includes(tag))
			.sort();
		return Array.from(new Set(uniqueTags));
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
