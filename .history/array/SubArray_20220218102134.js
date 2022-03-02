/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * leetcode 209
 * 输入：target = 7, nums = [2,3,1,2,4,3]
   输出：2
   解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let minCount = Number.MAX_VALUE;
  
  while(left < nums.length) {
    let cycleResult = 0;
    let currentCount = 0;

    for(let right = left; right < nums.length; right++) {
      cycleResult += nums[right];
      currentCount++;

      if(cycleResult >= target){
        if(minCount >= currentCount) {
          minCount = currentCount;
        }

        break;
      }
    }

    left++;
  }

  return minCount == Number.MAX_VALUE ? 0 : minCount;
};

/**
 * 上面方法的进阶！！！这个方法好
 * @param {*} target 
 * @param {*} nums 
 */
var minSubArrayLen2 = function(target, nums) {
  // 计算一次长度
  let len = nums.length;
  let left = right = sum = 0;
  let result = len+1; // 子数组的长度不会超过自身的长度

  while(right < len) {

  }

  return result < len ? 
};

const nums = [2,3,1,2,4,3];
const target = 7;
console.log(minSubArrayLen(target, nums));