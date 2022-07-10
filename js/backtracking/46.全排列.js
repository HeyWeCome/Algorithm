/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const path = [];

  const travel = (used) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i] === 1) continue; // path中已有的元素，直接跳过
      used[i] = 1;
      path.push(nums[i]);
      travel(used);
      path.pop();
      used[i] = 0;
    }
  }

  travel([0,0,0]);
  return result;
};

nums = [1,2,3];
console.log(permute(nums));