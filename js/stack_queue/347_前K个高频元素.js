/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const record = new Map();
  
  nums.forEach( (item) => {
    if (record.has(item)) {
      record.set(item, record.get(item)+1);
    } else {
      record.set(item, 1);
    }
  })

  let result = Array.from(record);
  result = result.sort((a,b) => b[1]-a[1]).filter((item, index) => {
    return index < k;
  })

  return [...(new Map(result)).keys()];
};

nums = [1,1,1,2,2,3,2,2,2], k = 2;
topKFrequent(nums, k);