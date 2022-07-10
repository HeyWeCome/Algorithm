/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let record = new Array();
  let result = new Array();

  s.trim().split(" ").forEach(item => {
    let temp = item.trim();
    if (temp.length != 0){
      record.push(temp);
    }
  });

  while (record.length > 0) {
    result.push(record.pop());
  }
  return result.join(" ");
};

s = "  hello world  ";
s = "the sky is blue";
// s = "a good   example"
// console.log("  ".length)
console.log(reverseWords(s));