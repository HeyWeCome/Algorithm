/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const record = [];
  record[0] = cost[0];
  record[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    record[i] = Math.min(record[i-1], record[i-2])+cost[i];
  }

  return Math.min(record.pop(),record.pop());
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));