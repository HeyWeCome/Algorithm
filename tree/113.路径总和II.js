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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const result = [];
  const record = [];

  if (root === null) return result;

  const travel = (node, value) => {
    // 记录第一个节点
    record.push(node.val);
    value -= node.val;

    // 到了叶子节点，有合适的解
    if (!node.left && !node.right && value === 0) {
      result.push([...record]);
    }

    // 单层递归逻辑
    if (node.left) travel(node.left, value);
    if (node.right) travel(node.right, value);

    // 弹出来第一个节点
    let currenNode = record.pop();
    value += currenNode;
  }

  travel(root, targetSum);
  return result;
};