const  catsGroupGenerateD = require('./catsGroupGenerateD');

const defaults = {
  age: 5,
};
const list = catsGroupGenerateD(10, defaults);
list.forEach((list) => console.log(list));