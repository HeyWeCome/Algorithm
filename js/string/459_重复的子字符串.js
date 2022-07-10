/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let len = s.length;
  for (let i = 1; i < len; i++) {
    if (len % i === 0) {
      let subStr = s.substring(0, i);
      if (subStr.repeat(len / subStr.length) === s) {
        return true;
      }
    }
  }
  return false;
};

s = "abcabcabcabc";
console.log(repeatedSubstringPattern(s))
