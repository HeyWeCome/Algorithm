var removeElement = function(nums, val) {
  let slow = 0;
  let fast = 0;
  let len = nums.length;

  while (fast < len) {
    if (nums[fast] != val) {
      nums[slow++] = nums[fast++];
    } else {
      fast++;
    }
  }

  return slow;
}

// nums = [3,2,2,3], val = 3;
nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums, val));