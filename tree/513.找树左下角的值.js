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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  if (root && root.left === null && root.right === null) return root.val;

  const queue = [];
  let result;
  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (i === 0) result = node.val;
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }

  return result;
};