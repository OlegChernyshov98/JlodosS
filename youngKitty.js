function youngKitty(n, list) {
  const youg = list.filter(({ gender }) => gender === 'ж');
  youg.sort((a, b) => {
    return a.age - b.age;
  });
  youg.splice(n, youg.length);
  return youg;
}

module.exports = youngKitty;
