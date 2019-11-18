const catmans = require('./catmans')

function oldCat (n, list) {
    let ban = catmans(list);
    ban.sort((a, b) => {
      return b.age - a.age
    });
     ban.splice(n);
    return ban;
  }
  module.exports = oldCat;