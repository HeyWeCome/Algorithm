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
var getMinimumDifference = function(root) {
  const result = [];

  const travel = (root) => {
    if (root === null) return;

    travel(root.left);
    result.push(root.val);
    travel(root.right);
  }

  travel(root);
  let minVal = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < result.length; i++) {
    let temp = result[i]-result[i-1];
    if (temp < minVal) minVal = temp;
  }

  return minVal;
};