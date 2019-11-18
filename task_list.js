const catsGroupGenerate = require('./catsGroupGenerate');

const nameList = require('./nameList');

const list = catsGroupGenerate(10);

console.log(nameList(list));
