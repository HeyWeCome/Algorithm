/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  let result = new Set();
  nums = nums.sort();

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    
    for (let j = i+1; j < nums.length; j++) {
      const b = nums[j];
      
      for (let k = j+1; k < nums.length; k++) {
        const c = nums[k];
        if (a+b+c === 0) {
          result.add([a,b,c])
        }
      }
    }
  }

  return Array.from(new Set([...result]));
};

nums = [-1,0,1,2,-1,-4];

console.log(threeSum(nums));