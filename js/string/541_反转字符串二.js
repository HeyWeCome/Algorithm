/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const len = s.length;
  let tempS = s.split("");

  for (let i = 0; i < len; i += 2*k) {
    let left = i-1, right = i+k > len ? len : i+k;
    while (++left < --right) {
      let temp = tempS[left];
      tempS[left] = tempS[right];
      tempS[right] = temp;
    }
  }
  return tempS.join("");
};

s = "abcdefg", k = 2;
console.log(reverseStr(s,k));