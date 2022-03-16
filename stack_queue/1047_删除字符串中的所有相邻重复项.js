/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    let tempEl = stack.pop();

    if (element !== tempEl) {
      if (tempEl) stack.push(tempEl);
      stack.push(element);
    }
  }

  return stack.join('');
};

s = "abbaca";
console.log(removeDuplicates(s))