/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const record = new Array(m); 
  for(let i = 0; i < record.length; i++){
    record[i] = new Array(n).fill(0); //每行有10列
  }

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    record[i][0] = 1;
  }

  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
    record[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] !== 1) {
        record[i][j] = record[i-1][j] + record[i][j-1];
      }
    }
  }

  return record[m-1][n-1];
};

console.log(uniquePathsWithObstacles([[0,1],[0,0]]));