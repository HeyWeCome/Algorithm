/**
 * @param {string[]} strs
 * @return {string}
 */
const strs = ["reflower","flow","flight"];

var longestCommonPrefix = function(strs) {
  let result = "";

  for (let index = 0; index < strs[0].length; index++) {
    let current = result + strs[0][index];
    let flag = true;

    for (let j = 1; j < strs.length; j++) {
      const element = strs[j];
      if (!element.startsWith(current)) {
        flag = false;
        break;
      }
    }

    if (flag) {
      result = current;
    } else {
      break;
    }
  }

  return result;
};

longestCommonPrefix(strs);