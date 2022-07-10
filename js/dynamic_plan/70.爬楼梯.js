/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const record = [];
  record[1] = 1;
  record[2] = 2;
  record[3] = 3;

  if (n <= 3) return n;
  else {
    for (let i = 4; i <= n; i++) {
      record[i] = record[i-1] + record[i-2];
    }

    return record[n];
  }
};

console.log(climbStairs(4))