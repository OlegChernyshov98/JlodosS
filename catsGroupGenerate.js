const catFactory = require('./catFactory'); // отсылка в прошлой функции

function catsGroupGenerate(n) {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(catFactory());
  }// создает массив объектов со свойствами
  return arr;
}
module.exports = catsGroupGenerate;
