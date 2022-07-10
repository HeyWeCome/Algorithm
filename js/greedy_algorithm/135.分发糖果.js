/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const candyArr = new Array(ratings.length).fill(1);

  // 从前往后比较，后边评分比左边大的情况
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i-1]) candyArr[i] = candyArr[i-1]+1;
  }

  // 从后往前比较，左边评分比右边大的情况
  for (let i = ratings.length-2; i >= 0; i--) {
    if (ratings[i] > ratings[i+1]) candyArr[i] = Math.max(candyArr[i], candyArr[i+1]+1);
  }

  return candyArr.reduce((pre, cur) => pre+cur);
};

ratings = [1,0,2];
console.log(candy(ratings))