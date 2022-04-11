/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) return true;

  let range = nums[0];
  for (let i = 0; i < nums.length-1 && i <= range; i++) {
    const frame = nums[i]; // 跳跃的范围
    if (i+frame > range) range = i+frame;
    if (range >= nums.length-1) return true;
  }
  return false;
};

nums = [2,3,1,1,4];
nums = [2,3,1,1,4];
console.log(canJump(nums));
