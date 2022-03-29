/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let count = 0;
  let index = s.length-1; // 饼干数组的下标
  // 遍历孩子们
  for (let i = g.length-1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      count++;
      index--;
    }
  }

  return count;
};