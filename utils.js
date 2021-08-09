const rmDiacritics = (str) => (
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
);

const normalize = (str) => (
  rmDiacritics(str.trim().toLowerCase())
);

const slugify = (str) => (
  encodeURIComponent(normalize(str).replace(/[?!'"«»,\.:/\\()&%*\s]+/g, '-'))
)

module.exports = {
  rmDiacritics,
  normalize,
  slugify,
};
