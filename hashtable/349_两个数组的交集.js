/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
nums1 = [1,2,2,1], nums2 = [2,2];
nums3 = [4,9,5], nums4 = [9,4,9,8,4]
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let intersect = new Set([...set1].filter( x => set2.has(x)));
  return [...intersect];
};

console.log(intersection(nums1, nums2));