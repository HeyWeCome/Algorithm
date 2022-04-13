/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const sum = (array) => {
    return array.reduce(function(acr, cur){
      return acr + cur;
    });
  }
  // 如果加油站点所有汽油加起来，小于油耗，则结束
  if (sum(gas) < sum(cost)) return -1;

  const len = gas.length;

  for (let i = 0; i < len; i++) {
    // 当前加油站的点不够出发，直接跳过
    if (gas[i] < cost[i] || gas[i] === 0) continue;
    
    // 如果够
    let container = 0;
    for (let j = 0; j < len; j++) {
      let index = (i+j)%len;
      // 加上当前加油站的油
      container += gas[index];
      // 减去路程的油
      container -= cost[index];

      if (container < 0) break;
    }

    if (container >= 0) return i;
  }

  return -1;
};

gas = [1,2,3,4,5], cost = [3,4,5,1,2];
// gas = [2,3,4], cost = [3,4,3];
// gas = [5,1,2,3,4], cost = [4,4,1,5,1]
console.log(canCompleteCircuit(gas, cost))