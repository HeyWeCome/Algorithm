/**
 * @param {number} n 皇后的个数
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  // 验证棋盘是否合法
  const isVaild = (row, col, chessboard, n) => {
    // 检查列
    for (let i = 0; i < row; i++) {
      if (chessboard[i][col] === 'Q') return false;
    }

    // 检查 45度角是否有皇后
    for (let i = row-1, j = col-1; i >= 0 && j >= 0; i--,j--) {
      if (chessboard[i][j] == 'Q') return false;
    }

    // 检查 135度角是否有皇后
    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessboard[i][j] == 'Q') return false;
    }

    return true;
  }

  function transformChessBoard(chessBoard) {
    let chessBoardBack = []
    chessBoard.forEach(row => {
        let rowStr = ''
        row.forEach(value => {
            rowStr += value
        })
        chessBoardBack.push(rowStr)
    })

    return chessBoardBack
}

  const backtracking = (n, row, chessboard) => {
    // 终止条件：到达最后一层之后，返回
    if (row === n){
      result.push(transformChessBoard(chessboard));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isVaild(row, col, chessboard, n)) {
        chessboard[row][col] = 'Q';
        backtracking(n, row+1, chessboard);
        chessboard[row][col] = '.';
      }
    }
  }

  let result = [];
  let chessboard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  backtracking(n,0,chessboard);
  return result;
};

console.log(solveNQueens(4));