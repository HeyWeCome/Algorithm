/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  while (k > 0) {
    let minNum = Math.min(...nums);
    let index = nums.indexOf(minNum);
    nums[index] = -nums[index];
    k--;
  }

  const result = nums.reduce((pre,cur) => {
    return pre+cur;
  })

  return result;
};

nums = [4,2,3], k = 1;
nums = [3,-1,0,2], k = 3;
nums = [2,-3,-1,5,-4], k = 2;
console.log(largestSumAfterKNegations(nums, k));
