const catsGroupGenerate = require('./catsGroupGenerate');
const youngKitty = require('./youngKitty');

const list = catsGroupGenerate(50);

youngKitty(5, list);
youg.forEach(({ name }) => console.log(name));