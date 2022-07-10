/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//   if (n===0) return 0;
//   else if(n===1) return 1;
//   else {
//     return fib(n-1)+fib(n-2);
//   }
// };

var fib = function(n) {
  const record = [];
  record[0] = 0;
  record[1] = 1;

  for (let i = 2; i <= n; i++) {
    record[i] = record[i-1]+record[i-2];
  }

  return record[n];
};

console.log(fib(4));