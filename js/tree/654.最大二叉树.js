/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  // 1. 确定出口
  if (!nums.length) return null;

  // 2. 找出最大值和最大值的下标
  let maxVal = Math.max(...nums);
  let maxIndex = nums.indexOf(maxVal);

  // 3. 构建节点
  const root = new TreeNode(maxVal);

  // 4. 构建左子树和右子树
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex+1));

  // 5. 返回构建的中间节点
  return root;
};