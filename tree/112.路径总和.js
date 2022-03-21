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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (root == null) return false;
  
  const travel = (node, value) => {
    // 1. 确定终止条件
    if (!node.left && !node.right && value === 0) return true;
    if (!node.left && !node.right && value !== 0) return false;

    // 2. 处理单层逻辑
    // 左
    if (node.left) {
      value -= node.left.val;
      if (travel(node.left, value)) return true;
      value += node.left.val;
    }

    // 右
    if (node.right) {
      value -= node.right.val;
      if (travel(node.right, value)) return true;
      value += node.right.val;
    }

    return false;
  }

  return travel(root, targetSum-root.val);
};

// var hasPathSum = function(root, targetSum) {
//   if (root === null) return false;

//   if (root.left === null && root.right === null) {
//     return targetSum - root.val === 0;
//   }

//   return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val);
// };