/**
 * leetcode 27 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const nums = [3,2,2,3];
const target = 3;
var removeElement = function(nums, val) {
  let head = 0;
  let tail = nums.length-1;

  while( head <= tail ) {
    if( nums[head] == val && nums[tail] != val){
      nums[head++] = nums[tail--];
    } else if(nums[head] == val && nums[tail] == val){
      tail--;
    } else if(nums[head] != val && nums[tail] == val){
      head++;
      tail--;
    }
  }

  
};