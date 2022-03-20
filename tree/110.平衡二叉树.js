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
var isBalanced = function(root) {
  if (root === null) return true;

  const getDepth = (root) => {
    if (root === null) return 0;

    let left = getDepth(root.left);
    if (left === -1) return -1;
    let right = getDepth(root.right);
    if (right === -1) return -1;
    return Math.abs(left-right) > 1 ? -1 : 1+Math.max(left,right);
  }

  return getDepth(root) === -1 ? false : true;
};