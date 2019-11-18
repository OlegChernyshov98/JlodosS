const catsGroupGenerate = require('./catsGroupGenerate');

const list = catsGroupGenerate(50);

function youngKitty(n) {
  const youg = list.filter(({ gender }) => gender === 'ж');
  youg.sort((a, b) => {
    return a.age - b.age;
  });
  youg.splice(n, youg.length);
  return youg.forEach(({ name }) => console.log(name));
}

module.exports = youngKitty;
