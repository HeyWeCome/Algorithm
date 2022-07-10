/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (nums.length <= 1) return nums.length;
  let preDiff = 0; // 前一对的差值
  let curDiff = 0; // 现在一对的差值
  let count = 1;

  for (let i = 0; i < nums.length-1; i++) {
    curDiff = nums[i+1]-nums[i];
    if ((curDiff < 0 && preDiff >= 0) || (curDiff > 0 && preDiff <= 0)) {
      count++;
      preDiff = curDiff;
    }
  }

  return count;
};

console.log(wiggleMaxLength([0,0]));

/**
 *     int wiggleMaxLength(vector<int>& nums) {
        if (nums.size() <= 1) return nums.size();
        int curDiff = 0; // 当前一对差值
        int preDiff = 0; // 前一对差值
        int result = 1;  // 记录峰值个数，序列默认序列最右边有一个峰值
        for (int i = 0; i < nums.size() - 1; i++) {
            curDiff = nums[i + 1] - nums[i];
            // 出现峰值
            if ((curDiff > 0 && preDiff <= 0) || (preDiff >= 0 && curDiff < 0)) {
                result++;
                preDiff = curDiff;
            }
        }
        return result;
    }
 */