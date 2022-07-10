/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  let result = [];
  let len = nums.length;
  nums.sort((a,b) => a-b);

  for (let i = 0; i < len; i++) {
    const a = nums[i];
    
    if (a > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i-1]) {
      continue;
    }

    let left = i+1;
    let right = len-1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i],nums[left],nums[right]]);
        while (left < right && nums[left] === nums[left+1]) {
          left++;
        }
        while (right > left && nums[right] === nums[right-1]) {
          right--;
        }
        left++;
        right--;
      } else if(nums[i]+nums[left]+nums[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};

nums = [-1,0,1,2,-1,-4]
// nums = [];
// nums = [0];

console.log(threeSum(nums));