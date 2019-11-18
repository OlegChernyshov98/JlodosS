const pick = require('./pick');


const gage = [1, 2, 3, 4, 5, 6, 7];
const gname = ['Василий', 'Черныш', 'Рыжик', 'Белка', 'Крош', 'Беляш'];
const ggender = ['м', 'ж'];
const glegscount = [3, 4, 5];
const gtaillength = [10, 13, 16, 17, 20, 23];

const defaults = {
  name: 'Василий',
  age: 7,
};

function catFactoryD(defaults) {
  const cat = {
    name: pick(gname),
    age: pick(gage),
    gender: pick(ggender),
    leggsCount: pick(glegscount),
    tailLength: pick(gtaillength),

  };
  for (const key in cat) {
    if (defaults.hasOwnProperty('name')) {
      cat.name = defaults.name;
    } else { // если такого нет, то добавить из кэта
      cat.name = pick(gname);
    }
    if (defaults.hasOwnProperty('age')) {
      cat.age = defaults.age;
    } else {
      cat.age = pick(gage);
    }
    if (defaults.hasOwnProperty('gender')) {
      cat.gender = defaults.gender;
    } else {
      cat.gender = pick(ggender);
    }
    if (defaults.hasOwnProperty('leggsCount')) {
      cat.leggsCount = defaults.leggsCount;
    } else {
      cat.leggsCount = pick(glegscount);
    }
    if (defaults.hasOwnProperty('tailLength')) {
      cat.tailLength = defaults.tailLength;
    } else {
      cat.tailLength = pick(gtaillength);
    }
  }

  return cat;
}
module.exports = catFactoryD;