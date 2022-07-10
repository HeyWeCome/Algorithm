/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const record = new Array(n+1).fill(0);
  record[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      record[i] += record[j-1]*record[i-j];
    }
  }

  return record[n];
};

console.log(numTrees(10));