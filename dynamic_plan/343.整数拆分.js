/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const record = new Array(n+1).fill(0);
  record[2] = 1;
  
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i-1; j++) {
      record[i] = Math.max(record[i], Math.max((i-j)*j, record[i-j]*j));
    }
  }

  return record[n];
};

console.log(integerBreak(10));