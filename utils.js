const rmDiacritics = (str) => (
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
);

const normalize = (str) => (
  rmDiacritics(str.trim().toLowerCase())
);

module.exports = {
  rmDiacritics,
  normalize,
};
