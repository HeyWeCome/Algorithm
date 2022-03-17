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
var largestValues = function(root) {
  let result = [];
  let queue = [];

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

    result.push(Math.max([...curLevel]));
  }

  return result;
};