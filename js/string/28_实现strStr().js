/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") return 0;
  
  let left = 0;
  while (left < haystack.length) {
    let pointer = left;
    let right = 0;
    while (right < needle.length) {
      if (haystack[pointer] == needle[right]) {
        if (right === needle.length-1) {
          return left;
        }
        pointer++;
        right++;
      } else {
        left++;
        break;
      }
    }
  }

  return -1;
};

// haystack = "a", needle = "a";
haystack = "aaaaa", needle = "bba";
// haystack = "", needle = "";
console.log(strStr(haystack, needle));