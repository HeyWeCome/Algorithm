/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a,b) => a-b);
  const result = [];
  const path = [];

  const travel = (path, sum, startIndx) => {
    if(sum >= target) {
      if (sum === target) result.push([...path]);
      return;
    }

    for (let i = startIndx; i < candidates.length; i++) {
      // 为了排除相似的元素
      if (i-1 >= startIndx && candidates[i-1] === candidates[i]) continue;

      // 不是重复的元素，开始排列组合
      path.push(candidates[i]);
      sum += candidates[i];
      travel(path, sum, i+1);
      path.pop();
      sum -= candidates[i];
    }
  }

  travel(path, 0, 0);
  return result;
};

candidates = [10,1,2,7,6,1,5], target = 8;
console.log(combinationSum2(candidates, target));