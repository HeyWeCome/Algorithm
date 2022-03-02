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
  }
};