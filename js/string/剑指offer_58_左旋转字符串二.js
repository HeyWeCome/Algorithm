/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  return s.substring(n)+s.substring(0,n);
};
// s = "abcdefg", k = 2;
s = "lrloseumgh", k = 6;
console.log(reverseLeftWords(s, k));
