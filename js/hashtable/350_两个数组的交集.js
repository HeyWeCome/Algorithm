/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 nums1 = [4,9,5], nums2 = [9,4,9,8,4]
var intersect = function(nums1, nums2) {
  let result;
  if (nums1.length > nums2.length) {
    result = operate(nums2, nums1);
  } else {
    result = operate(nums1, nums2);
  }

  console.log([...result.values()]);
};

var operate = (nums1, nums2) => {
  let result = new Map();

  nums1.forEach( item => {
    let index = nums2.indexOf(item);

    if (index >= 0) {
      result.set(index, item);
      nums2[index] = -1;
    }
  })

  return result;
}

intersect(nums1, nums2);