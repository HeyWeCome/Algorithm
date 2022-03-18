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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let queue = [];

  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;
    let curLevel = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node) curLevel.push(node.val);
      else curLevel.push(null);
      queue.push(node.left);
      queue.push(node.right);
    }

    console.log(curLevel);
    // 如果这一层节点数是奇数，则不对称
    if (curLevel.length % 2 !== 0 && curLevel.length !== 1) return false;

    // 节点数为偶数时
    while (curLevel.length > 1) {
      if (curLevel.shift() !== curLevel.pop()) return false;
    }
  }

  return true;
};