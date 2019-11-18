
const pick = require('./pick');

const gage = [1, 2, 3, 4, 5, 6, 7];
const gname = ['Василий', 'Черныш', 'Рыжик', 'Белка', 'Крош', 'Беляш'];
const ggender = ['м', 'ж'];
const glegscount = [3, 4, 5];
const gtaillength = [10, 13, 16, 17, 20, 23];
const gloudness = [10, 20, 30, 40, 150];

function catFactoryLoud() {
  const cat = {
    name: pick(gname),
    age: pick(gage),
    gender: pick(ggender),
    leggsCount: pick(glegscount),
    tailLength: pick(gtaillength),
    loudness: pick(gloudness),

  };
  return cat;
}// возвращает объект со свойстсвами

module.exports = catFactoryLoud;
