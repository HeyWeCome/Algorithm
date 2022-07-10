/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const record = new Array(m); 
  for(let i = 0; i < record.length; i++){
    record[i] = new Array(n).fill(1); //每行有10列
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      record[i][j] = record[i-1][j] + record[i][j-1];
    }
  }

  return record[m-1][n-1];
};

console.log(uniquePaths(1,1))