const assert = require('assert');
const catFactory = require('./catFactory');
const catsGroupGenerate = require('./catsGroupGenerate');
const catmans = require('./catmans');
const nameList = require('./nameList');
const namestat = require('./namestat');
const oldCat = require('./oldCat');
const youngKitty =require('./youngKitty');
const catFactoryLoud = require('./catFactoryLoud');
var expect = require('chai').expect;

// Проверка создания кота
describe('Array', function () {
  describe('catFactory', function () {
    it('generate cats', function () {
      const cat = catFactory();
      if (cat.hasOwnProperty('name') === false) {
        throw new Error('Not Name');
      }
      if (cat.hasOwnProperty('age') === false) {
        throw new Error('Not AGE');
      }
      if (cat.hasOwnProperty('gender') === false) {
        throw new Error('Not gender');
      }
      if (cat.hasOwnProperty('leggsCount') === false) {
        throw new Error('Not leggsCount');
      }
      if (cat.hasOwnProperty('tailLength') === false) {
        throw new Error('Not tailLength');
      }
     });
  });
});

// Проверка генерации массива котов
describe('Array', function () {
  describe('catsGroupGenerate', function () {
    it('proverka kolichestva kotov', function () {
      const n = 6;
      const prov = catsGroupGenerate(n);
      assert.equal(prov.length, n);
    });
  });
});

// Проверка вывода котов мужчин
describe('Array', function () {
  describe('catmans', function () {
    it('proverka pola kota', function () {
      const n = 6;
      const prov = catsGroupGenerate(n);
      const result = catmans(prov);
      if (result.hasOwnProperty('ж') === true) {
        throw new Error ('woman in list');
      }
    });
  });
});

// Проверка списка имен
describe('Array', function () {
  describe('nameList', function () {
    it('proverka spiska imen', function () {
      const prov = catsGroupGenerate(10);
      const list = nameList(prov);
      for (let i = 0; i < list.length; i ++) {
        if (list[i] !== 'Василий' && list[i] !== 'Черныш' && list[i] !== 'Рыжик' && list[i] !== 'Белка' && list[i] !== 'Крош' && list[i] !== 'Беляш') {
          throw new Error ('ne rabotaet');
        }
      }
    });
  });
});

// Проверка стастистики(кол-ва) имен
describe('Array', function () {
  describe('namestat', function () {
    it('proverka statisika imen', function () {
      const n = 6;
      const prov = catsGroupGenerate(n);
      const result = namestat(prov);
      function sumnames(result) {
        return Object.values(result).reduce((a, b) => a + b, 0);
      };
      assert.equal(sumnames(result), n);
    });
  });
});

// Проверка старых котов
describe('Array', function () {
  describe('oldcat', function () {
    it('proverka oldovskix kotov', () => {
      const list = catmans(catsGroupGenerate(10));
      const result = oldCat(10, list);
      for (let i = 0; i < list.length; i ++) {
        if (list[i].age > result[0].age) { 
         throw new Error ('problema s oldovskimi kotami');
        }
      }
    });
  });
});

// Проверка молодых кошечек
describe('Array', function () {
  describe('oldcat', function () {
    it('proverka young kitey', () => {
      const list = catsGroupGenerate(10);
      const result = youngKitty(10, list);
      for (let i = 0; i < list.length; i ++) {
        if (result[0].age > result[1].age) { 
         throw new Error ('problema s MOLODYMI COSHKAI');
        }
      }
    });
  });
});

let catFactoryD = require('./catFactoryD');
  describe('Array', function() {
    describe('catFactoryD', function() {
      it('Vsegda 7?', function() {
        const cat = catFactoryD( {
          age: 7,
        });
      const can1 = cat.age
      const can2 = 7
      expect(can1).to.equal(can2) 

     });
  });
});

let catsGroupGenerateD = require('./catsGroupGenerateD');

describe('Array', function() {
  describe('catsGroupGenerateD ', function() {
    it('Vsegda 7?', function(){
      const defaults = {
        age: 7
      }
      const cat = catsGroupGenerateD(5, defaults);
      const can2 = 7
      const can1 = [];
      for (let i = 0; i < cat.length; ++i){
      can1[i] = cat[i].age
      expect(can1[i]).to.equal(can2) 
      }
    });
  });
});

describe('Array', function () {
  describe('catFactoryLoud', function () {
    it('generate cats', function () {
      const cat = catFactoryLoud();
      if (cat.hasOwnProperty('name') === false) {
        throw new Error('Not Name');
      }
      if (cat.hasOwnProperty('age') === false) {
        throw new Error('Not AGE');
      }
      if (cat.hasOwnProperty('gender') === false) {
        throw new Error('Not gender');
      }
      if (cat.hasOwnProperty('leggsCount') === false) {
        throw new Error('Not leggsCount');
      }
      if (cat.hasOwnProperty('tailLength') === false) {
        throw new Error('Not tailLength');
      }
      if (cat.hasOwnProperty('loudness') === false) {
        throw new Error('Not loudness');
      }
     });
  });
});