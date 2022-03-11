/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = new Map();
  let count = 0;

  nums1.forEach( item1 => {
    nums2.forEach( item2 => {
      let sum = item1+item2;
      if (map.has(sum)) {
        map.set(sum, map.get(sum)+1);
      } else {
        map.set(sum, 1);
      }
    })
  })

  nums3.forEach( item3 => {
    nums4.forEach( item4 => {
      const sum = item3+item4;
      if (map.has(-sum)) {
        count += map.get(-sum);
      }
    })
  })

  return count;
};

nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
console.log(fourSumCount(nums1, nums2, nums3, nums4))