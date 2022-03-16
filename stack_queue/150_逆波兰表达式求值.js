/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const record = new Map([
    ["+", (a,b) => a*1 + b*1],
    ["-", (a,b) => b*1 - a*1],
    ["*", (a,b) => b*a],
    ["/", (a,b) => (b/a) | 0]
  ])
  const stack = [];

  for(token of tokens) {
    if (!record.has(token)) {
      stack.push(token);
      continue;
    }
    stack.push(record.get(token)(stack.pop(), stack.pop()));
  }

  return stack.pop();
};