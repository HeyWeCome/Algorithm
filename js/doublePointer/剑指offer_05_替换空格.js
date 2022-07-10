/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let result = new Array();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result.push("%20");
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
};

s = "We are happy."
console.log(replaceSpace(s));