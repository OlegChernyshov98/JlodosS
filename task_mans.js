const catsGroupGenerate = require('./catsGroupGenerate');

const catmans = require('./catmans');

const list = catsGroupGenerate(10);

const result = catmans(list);

result.forEach((result) => console.log(result));
