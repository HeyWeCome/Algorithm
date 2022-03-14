/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let result = [];
  s.split('').forEach( (item) => {
    if (item === ' ') {
      result.push(["%20"]);
    } else {
      result.push(item);
    }
  })

  return [...result].join('');
};

s = "We are happy.";
console.log(replaceSpace(s));