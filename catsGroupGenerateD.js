const cfd = require('./catFactoryD');

function catsGroupGenerateD(n, defaults) {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(cfd(defaults));
  }
  return arr;
}
module.exports = catsGroupGenerateD;
