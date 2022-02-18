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
  const len = nums.length;
  let left = right = sum = 0;
  let result = len+1; // 子数组的长度不会超过自身的长度

  while(right < len) {
    sum += nums[right++];
    // 窗口滑动
    // 从头开始减，有可能第一个数比较小，剪了之后还是比target大，所以用的while
    while(sum >= target){
      result = result < right-left ? result : right-left;
      sum -= nums[left++];
    }
  }

  return result > len ? 0 : result;
};


/**
 * leetcode 904 水果成篮问题
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const len = fruits.length;
  let left = right = 0;
  let result = 0;
  
  while(right < len) {
    let sum = 0;
    let cate1 = fruits[left];
    let cate2 = fruits[right];

    // 首先往后面走，看到哪里水果不一样
    while((fruits[right] == cate1 || fruits[right] == cate2) && right < len){
      sum = sum > right-left+1 ? sum: right-left+1;
      right++;
      
      if(fruits[right] != cate1 && cate1 == cate2){
        cate2 = fruits[right];
      }
    }

    left = right-1;
    cate1 = fruits[left];
    while(left >= 1 && fruits[left-1] == cate1){
      left--;
    }

    result = result > sum ? result : sum;
  }

  return result;
};

const fruits = [0,1,2,2];
console.log(totalFruit(fruits));