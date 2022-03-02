/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let startX = startY = 0; // 起始位置
  let loop = Math.floor(n/2); // 旋转的圈数
  let mid = Math.floor(n/2);  // 中间位置
  let offset = 1; // 控制每一层填充元素的个数
  let count = 1;  // 更新填充的数字
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let row = startX, col = startY;
    // 上行从左到右(左闭右开)
    for(; col < startY + n - offset; col++) {
      res[row][col] = count++;
    }

    // 右列从上到下(左闭右开)
    for(;row < startX + n - offset; row++) {
      res[row][col] = count++;
    }

    // 下行从右到左(左闭右开)
    for(; col > startX; col--){
      res[row][col] = count++;
    }

    // 左列从下到上(左闭右开)
    for(; row > startY; row--){
      res[row][col] = count++;
    }

    // 更新起始位置
    startX++;
    startY++;

    // 更新offset
    offset += 2;
  }

  // n 为奇数，给矩阵最中间的位置赋值
  if(n % 2 == 1){
    res[mid][mid] = count;
  }
  return res;
};

const matrix = generateMatrix(5);
// console.log(matrix);

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  
  let rowLength = matrix.length, colLength = matrix[0].length;
  let left = 0, right = colLength-1, top = 0, bottom = rowLength-1;

  let loop = rowLength*colLength;
  let count = 1;
  let result = new Array();

  while(count <= loop){
    // 从左到右
    for(let i = left; i <= right; i++){
      result.push(matrix[top][i]);
      num++;
    }
    top++;

    // 从上到下
    for(let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // 从右到左
    for(let i = right; i >= left; i--){
      result.push(matrix[bottom][i]);
    }
    bottom--;

    // 从下到上
    for(let i = bottom; i >= top; i--){
      result.push(matrix[left][i]);
    }
    left++;
  }

};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);