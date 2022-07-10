/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = new Array();

  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    switch (element) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      default:
        if (element != stack.pop()) {
          return false;
        }
    }
  }

  return s.length === 0;
};

// s = "()[]{}"
// s = "(]"
// s = "([)]"
// s = "{[]}"
// s = "["
s = "(("
console.log(isValid(s));