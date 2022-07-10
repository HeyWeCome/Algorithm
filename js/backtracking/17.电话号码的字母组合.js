/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  
  const number = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const result = [];
  const path = [];

  const travel = (path, digits, currentIndex) => {
    if(path.length === digits.length){
      result.push([...path].join(''));
      return;
    }

    for (let i = currentIndex; i < digits.length; i++) {
      const digit = digits[i];
      for (const ch of number[digit]) {
        path.push(ch);
        travel(path, digits, i+1);
        path.pop();
      }
    }
  }

  travel(path, digits, 0);
  return result;
};

console.log(letterCombinations("23456789"));