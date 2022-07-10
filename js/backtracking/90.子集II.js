/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort((a,b) => a-b);
  const result = [];
  const path = [];

  const travel = (startIndex) => {
    result.push([...path]);
    if (startIndex > nums.length - 1) return;
    
    for (let i = startIndex; i < nums.length; i++) {
      if ( i > startIndex && nums[i] === nums[i-1]) continue;
      path.push(nums[i]);
      travel(i+1);
      path.pop();
    }
  }

  travel(0);
  return result;
};

nums = [1,2,2];
console.log(subsetsWithDup(nums));