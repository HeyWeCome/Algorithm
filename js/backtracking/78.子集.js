/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []; // 存放结果集
  const path = []; // 存放单个集合

  const travel  = (startIndex) => {
    result.push([...path]);
    // 起始位置大于数组长度，就到了叶子节点，直接返回
    if (startIndex > nums.length) return;

    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      travel(i+1);
      path.pop();
    }
  }
  travel(0);
  return result;
};

nums = [0];
console.log(subsets(nums));