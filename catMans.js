function catmans(list) {
    const brr = list.filter(({ gender }) => gender === 'м');
    return brr;
  }// возврвщает котов мужского пола
  
  module.exports = catmans;