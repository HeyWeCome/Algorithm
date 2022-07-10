/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let record = new Set();
  while (n >= 4 && !record.has(n)) {
    record.add(n);
    if (n >= 4 && n < 10) {
      n *= n;
    } else {
      let sum = 0;
      n.toString().split('').forEach( item => sum += item*item*1);
      n = sum*1;
    }
  }

  return n === 1 ? true : false;
};

console.log(isHappy(4))