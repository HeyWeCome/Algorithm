/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * leetcode:704
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    let mid = Math.floor((low + high)/2);

    if(nums[mid] > target) {
      high = mid-1;
      
    } else if(nums[mid] < target) {
      low = mid+1;
    } else {
      return mid;
    }
  }

  return -1;
};

/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while( left <= right) {
    let mid = Math.floor((right - left)/2);

    if(nums[mid] < target) {
      right = mid + 1;
    } else if(nums[mid] > target)
  }
};