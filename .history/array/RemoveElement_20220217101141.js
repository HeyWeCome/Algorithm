/**
 * leetcode 27 移除元素，方法一：用的是双指针，但是我是从头和从尾同时出发的
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// const nums = [0,1,2,2,3,0,4,2];
// const target = 2;
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
    if( nums[fastPointer] != val ) {
      nums[slowPointer++] = nums[fastPointer];
    }
  }

  return slowPointer;
};


/**
 * leetcode 26. 删除有序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slowPointer = 0;

  for( let fastPointer = 1; fastPointer < nums.length; fastPointer++ ) {
    if ( nums[slowPointer] != nums[fastPointer] ) {
      nums[++slowPointer] = nums[fastPointer];
    }
  }
  return slowPointer+1;
};


/**
 * leetcode 283. 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if(nums.length > 1){
    let slow = 0;
    for(let fast = 0; fast < nums.length; fast++) {
      if (nums[fast] != 0) {
        let temp = nums[fast];
        nums[fast] = nums[slow];
        nums[slow++] = temp;
      }
    }
  }
};

/**
 * 844. 比较含退格的字符串
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const s = "ab##";
const t = "ad#c";
var backspaceCompare = function(s, t) {

};

var handleBackspaceCompare = function(s) {
  let slow = 0;
  s = s.split('');
  for(let fast = 0; fast < s.length; fast++) {
    if(s[fast] != '#'){
      s[slow++] = s[fast];
    } else{
      slow-2 >= 0 ? slow = slow-2 : slow = 0;
    }
  }

  return s.join('').substring(0, slow);
};

console.log(handleBackspaceCompare(s));