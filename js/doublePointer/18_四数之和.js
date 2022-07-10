/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  if (nums.length < 4) return [];

  nums.sort((a,b) => a-b); // 先排序
  const len = nums.length;
  let result = new Map();

  // 走第一重循环，转化为三指针问题
  for (let i = 0; i < len; i++) {
    const a = nums[i];

    // 第二重循环
    let tempRes = target-a;
    for (let j = i+1; j < len; j++) {
      const b = nums[j];
      let left = j+1;
      let right = len-1;

      while (left < right) {
        let tempArr = [a, nums[j], nums[left], nums[right]];
        if (nums[j]+nums[left]+nums[right] === tempRes) {
          result.set(tempArr.toString(), tempArr);
          while (left < right && nums[left] === nums[left+1]) {
            left++;
          }
          while (right > left && nums[right] === nums[right-1]) {
            right--;
          }
          left++;
          right--;
        } else if(nums[j]+nums[left]+nums[right] > tempRes) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return Array.from(result.values());
};