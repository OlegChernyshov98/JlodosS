function nameList(list) {
    const arr = [];
  
    list.forEach(({ name }) => arr.push(name));
  
    return arr;
  }
  
  module.exports = nameList;
  