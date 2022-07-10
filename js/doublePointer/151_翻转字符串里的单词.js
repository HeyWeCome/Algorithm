/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let result = new Array();
  s = s.trim().split(' ');

  s.forEach((item) => {
    if (item.trim() !== '' && item !== ' ') {
      result.push(item);
    }
  })

  return result.reverse().join(' ');
};

s = "the sky is blue"
s = "  hello  world  "
reverseWords(s);