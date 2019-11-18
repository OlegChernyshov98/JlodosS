const catFactory = require('./catFactory')

describe('Array', function() {
  describe('catFactory', function() {
    it('generate cats', function() {
     const cat = catFactory();
     if ( cat.hasOwnProperty('name') === false ) {
       throw new Error ('Not Name') } 
    });
  });
});
