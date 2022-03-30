/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function(n, k) {
  let result = [];
  let path = [];

  const travel = (n, k, startIndex) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    // 这里 n-(k-path.length)+1
    // 如果我现在需要两个数字，那么开始的位置最多到倒数第二个，不然就不够了
    for (let i = startIndex+1; i <= n-(k-path.length)+1; i++) {
      path.push(i);
      travel(n, k, i);
      path.pop();
    }
  }

  travel(n, k, 0);
  return result;
};