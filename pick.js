function pick(list) {
    const randi = list[Math.floor(Math.random() * list.length)];
    return randi;
  }
  
  module.exports = pick;
  