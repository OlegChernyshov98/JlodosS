function catmans(list) {
  /*
let brr = []
  for (let i = 0; i < list.lenght; i++) {
    if (list[i].gender === 'м') {
       brr = brr.push(list[i])
    }
  } */
  const brr = list.filter(({ gender }) => gender === 'м');
  return brr;
}// возврвщает котов мужского пола

module.exports = catmans;
