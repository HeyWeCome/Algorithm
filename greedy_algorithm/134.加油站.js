/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 暴力解法：
// var canCompleteCircuit = function(gas, cost) {
//   const sum = (array) => {
//     return array.reduce(function(acr, cur){
//       return acr + cur;
//     });
//   }
//   // 如果加油站点所有汽油加起来，小于油耗，则结束
//   if (sum(gas) < sum(cost)) return -1;

//   const len = gas.length;

//   for (let i = 0; i < len; i++) {
//     // 当前加油站的点不够出发，直接跳过
//     if (gas[i] < cost[i] || gas[i] === 0) continue;
    
//     // 如果够
//     let container = 0;
//     for (let j = 0; j < len; j++) {
//       let index = (i+j)%len;
//       // 加上当前加油站的油
//       container += gas[index];
//       // 减去路程的油
//       container -= cost[index];

//       if (container < 0) break;
//     }

//     if (container >= 0) return i;
//   }

//   return -1;
// };

// 贪心策略
// 问题1: 为什么应该将起始站点设为k+1？
// 因为k->k+1站耗油太大，0->k站剩余油量都是不为负的，每减少一站，就少了一些剩余油量。所以如果从k前面的站点作为起始站，剩余油量不可能冲过k+1站。
// 问题2: 为什么如果k+1->end全部可以正常通行，且rest>=0就可以说明车子从k+1站点出发可以开完全程？

// 因为，起始点将当前路径分为A、B两部分。其中，必然有(1)A部分剩余油量<0。(2)B部分剩余油量>0。

// 所以，无论多少个站，都可以抽象为两个站点（A、B）。(1)从B站加满油出发，(2)开往A站，车加油，(3)再开回B站的过程。

// 重点：B剩余的油>=A缺少的总油。必然可以推出，B剩余的油>=A站点的每个子站点缺少的油。
var canCompleteCircuit = function(gas, cost) {
  let curSum = 0;
  let totalSum = 0;
  let start = 0;
  let len = gas.length;

  for (let i = 0; i < len; i++) {
    curSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];
    if (curSum < 0){
      start = i+1;
      curSum = 0;
    }
  }

  if (totalSum < 0) return -1;
  return start;
};

gas = [1,2,3,4,5], cost = [3,4,5,1,2];
// gas = [2,3,4], cost = [3,4,3];
// gas = [5,1,2,3,4], cost = [4,4,1,5,1]
console.log(canCompleteCircuit(gas, cost))