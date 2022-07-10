/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  const queue = [];
  const record = new Map();
  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (record.has(node.val)) record.set(node.val, record.get(node.val)+1);
      else record.set(node.val, 1);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  let result = [];
  let max = Number.MIN_SAFE_INTEGER;
  for (const key of record.keys()) {
    let value = record.get(key);
    if (value > max) {
      max = value;
      result = [];
      result.push(key);
    } else if (value === max) {
      result.push(key);
    }
  }

  return result;
};


// 不使用额外空间的解法
var findMode = function(root) {
  // 不使用额外空间，使用中序遍历，利用二叉搜索树的特性，设置出现最大次数初始值为1
  let count = 0, maxCount = 1;
  let pre = root, res = [];

  // 1.确定递归函数及函数参数
  const travelTree = (cur) => {
    // 2. 确定递归终止条件
    if (cur === null) return;

    travelTree(cur.left);
    // 3. 处理单层逻辑
    if (pre.val === cur.val) count++;
    else count = 1;
    pre = cur;

    if (count === maxCount) res.push(cur.val);
    if (count > maxCount) {
      res = [];
      maxCount = count;
      res.push(cur.val);
    }

    travelTree(cur.right);
  }

  travelTree(root);
  return res;
};