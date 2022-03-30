/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  const path = [];

  const travel = (path, sum, startIndex) => {
    // console.log(sum);
    if (sum >= target) {
      if (sum === target){
        result.push([...path]);
        return;
      }
      return;
    }
    
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      sum += candidates[i];
      travel(path, sum, i);
      path.pop();
      sum -= candidates[i];
    }
  }

  travel(path, 0, 0);
  return result;
};

candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates, target));