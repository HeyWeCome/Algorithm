/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1) return 0;
  let len = nums.length;
  let step = 0;
  let start = 0;

  while (true) {
    let end = start+nums[start];
    // 如果刚好覆盖到了最后一个节点，直接返回
    if (end >= len-1) return step+1;

    let max = Number.MIN_SAFE_INTEGER;
    // 如果没有覆盖，则找到下一个最大的点
    for (let i = start+1; i <= end; i++) {
      if (nums[i]+i > max) {
        max = nums[i]+i;
        start = i;
      }
    }
    step++;
  }
};

// var jump = function(nums) {
//   if (nums.length === 1) return 0;
//   let count = 0;
//   let start = 0;
//   let len = nums.length;

//   while (true) {

//   }
// };

// nums = [2,1]
nums = [2,3,1,1,4];
// nums = [1,2,1,1,1];
console.log(jump(nums));