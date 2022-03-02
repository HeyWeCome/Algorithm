/**
 * leetcode 27 移除元素，方法一：用的是双指针，但是我是从头和从尾同时出发的
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const nums = [0,1,2,2,3,0,4,2];
const target = 2;
var removeElement1 = function(nums, val) {
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

/**
 * leetcode 27 移除元素，方法二：用的是双指针，参考代码随想录，快慢指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function(nums, val) {
  let slowPointer = 0;

  for( let fastPointer = 0; fastPointer < nums.length; fastPointer++ ) {
    if(nums[fastPointer] != val && nums[slowPointer] == val) {
      nums[slowPointer+]
    }
  }
};

const result = removeElement2(nums, target);
console.log("结果为", result);