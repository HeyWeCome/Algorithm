/**
 * @param {string} s
 * @return {number}
 */
s = "pwwkew"
s1 = "bbbbb"
// var lengthOfLongestSubstring = function(s) {
//   if (s.length == 0 || s.length == 1) return s.length;

//   let maxLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     let record = new Map();
//     let count = 0;

//     for (let j = i; j < s.length; j++) {
//       const element = s[j];
//       if (record.has(element)) {
//         break;
//       } else {
//         record.set(element, "");
//         count++;
//       }
//     }

//     maxLength < count ? maxLength = count : maxLength;
//   }

//   return maxLength;
// };

/**
 * 双指针解题
 */
var lengthOfLongestSubstring = function(s) {
  const record = new Set(); // 记录重复的字符

  let left = 0, right = -1; // 初始化左指针和右指针
  const len = s.length;     // 字符串的长度
  let maxLen = 0;

  while (left < len) {

    if (left > 0) {
      record.delete(s[left-1]);
    }
    
    while (right+1 < len && !record.has(s[right+1])) {
      record.add(s[++right]);
    }

    let currentLen = right-left+1;
    maxLen = Math.max(currentLen, maxLen);

    left++;
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring(s))
console.log(lengthOfLongestSubstring(s1))