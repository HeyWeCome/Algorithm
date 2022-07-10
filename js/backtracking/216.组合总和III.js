/**
 * @param {number} k k个数字
 * @param {number} n n为要求的和
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let result = [];
  let path = [];

  const travel = (path, sum, startIndex) => {
    if (sum >= n) {
      if (sum === n && path.length === k) {
        result.push([...path]);
      }
      return;
    }

    for (let i = startIndex; i <= 9; i++) {
      path.push(i);
      sum += i;
      travel(path, sum, i+1);
      path.pop();
      sum -= i;
    }
  }

  travel(path, 0, 1);
  return result;
};

// k = 3, n = 7;
k = 3, n = 9;
// k = 4, n = 1
console.log(combinationSum3(k,n));