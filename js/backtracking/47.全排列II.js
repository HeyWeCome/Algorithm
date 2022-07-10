/**
 * @param {number[]} nums
 * @return {number[][]}
 * 全排列2
 */
// var permuteUnique = function(nums) {
//   const result = new Map();
//   const path = [];

//   const backtracking = (used) => {
    
//     if (path.length === nums.length){
//       result.set(path.toString(), [...path]);
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       if (used[i] === 1) continue;
//       used[i] = 1;
//       path.push(nums[i]);
//       backtracking(used);
//       path.pop();
//       used[i] = 0;
//     }
//   }

//   backtracking([0,0,0]);
//   return result.values();
// };


var permuteUnique = function (nums) {
  nums.sort((a, b) => {
      return a - b
  })
  let result = []
  let path = []

  function backtracing(used) {
    if (path.length === nums.length) {
      result.push(path.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      if (!used[i]) {
        used[i] = true
        path.push(nums[i])
        backtracing(used)
        path.pop()
        used[i] = false
      }
    }
  }
  backtracing([])
  return result
};
nums = [1,1,2];
console.log(permuteUnique(nums));