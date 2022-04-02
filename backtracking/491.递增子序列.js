/**
 * 和90 子集二结合起来看
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  // const result = [];
  const result = new Map();
  const path = [];

  const travel = (startIndex) => {
    if (path.length >= 2) result.set(path.toString(), [...path]);

    if (startIndex > nums.length) return;

    for (let i = startIndex; i < nums.length; i++) {
      if (path.length > 0 && nums[i] < path[path.length-1]){
        continue;
      }

      path.push(nums[i]);
      travel(i+1);
      path.pop();
    }
  }

  travel(0);
  return Array.from(result.values());
};

// nums = [4,6,7,7];
// nums = [4,4,3,2,1];
nums = [100,90,80,70,60,50,60,70,80,90,100];
console.log(findSubsequences(nums));