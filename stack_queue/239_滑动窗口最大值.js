/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums == null || nums.length < 2) return nums;
  const window  = [];
  const result = [];

  // 窗口存放的是下标
  for (let i = 0; i < k; i++) {
    // 确保加进来的元素要比当前窗口中的元素大
    while (window.length && nums[i] >= nums[window[window.length-1]]) {
      // 比要加进来的元素小的都弹出去
      window.pop();
    }
    window.push(i);
  }

  // 窗口开始滑动
  result.push(nums[window[0]]);
  for (let i = k; i < nums.length; i++) {
    while (window.length && nums[i] >= nums[window[window.length-1]]) {
      window.pop();
    }
    window.push(i);

    // 一旦窗口划走了，就弹出这个元素
    while (window[0] <= i-k) {
      window.shift();
    }
    // 只要窗口没有划走，栈顶就是最大的元素
    result.push(nums[window[0]]);
  }

  return result;
};

nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums, k));