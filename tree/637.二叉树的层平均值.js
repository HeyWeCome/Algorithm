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
var averageOfLevels = function(root) {
  const result = [];
  const queue = [];

  if (root === null) return result;
  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;
    let curLevel = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    let sum = curLevel.reduce( (pre, cur) => pre+cur);
    
    result.push((sum/curLevel.length).toFixed(5));
  }

  return result;
};