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
var rightSideView = function(root) {
  const result = [];
  const queue = [];

  if (root === null) {
    return result;
  }

  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;
    
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      // 当长度为length-1时，表示到了最后一个节点了
      if (i === len-1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};