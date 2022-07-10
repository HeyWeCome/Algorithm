/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const recordMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (!recordMap.has(target-element)) {
      recordMap.set(element, index);
    } else{
      return [recordMap.get(target-element), index];
    }
  }
};

nums = [3,3], target = 6
console.log(twoSum(nums, target))