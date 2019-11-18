function namestat(list) {
  const stats = {

  };

  list.forEach(function (cat) {
    const key = cat.name;
    if (stats.hasOwnProperty(key)) {
      stats[key] += 1;
    }
    else {
      stats[key] = 1;
    }
  });
  return stats;
}
// console.log(namestat(list))

module.exports = namestat;
