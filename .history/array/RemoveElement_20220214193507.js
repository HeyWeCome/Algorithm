/**
 * leetcode 27 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const nums = [0,1,2,2,3,0,4,2];
const target = 2;
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
    } else if(nums[head] != val && nums[tail] != val){
      head++;
    }
  }
  return head;
};

const result = removeElement(nums, target);
console.log("结果为", result);