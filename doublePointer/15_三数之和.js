/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length;
  if (len < 3) return [];
  let result = new Map();

  nums = nums.sort((a,b) => a-b);

  for (let i = 0; i < len; i++) {
    let a = nums[i];
    if (a > 0) break;

    if (i > 0 && nums[i] === nums[i-1]) {
      continue;
    }

    let left = i+1;
    let right = len-1;
    while (left < right) {
      let b = nums[left];
      let c = nums[right];
      const sum = a + b + c;
      if (sum === 0) {
        result.set([a,b,c].toString(), [a,b,c]);
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

  return [...result.values()];
};

nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums))