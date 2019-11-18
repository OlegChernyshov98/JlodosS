const catsGroupGenerate = require('./catsGroupGenerate');

const namestat = require('./namestat');

const list = catsGroupGenerate(4);

const result = namestat(list);

console.log(result);
