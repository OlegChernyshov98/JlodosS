const catsGroupGenerate = require('./catsGroupGenerate');

const oldCat = require('./oldCat');

const list = catsGroupGenerate(10);
console.log(list)

console.log(oldCat(3, list));