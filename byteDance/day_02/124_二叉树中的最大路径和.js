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
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  const dfs = (root) => {
    // 递归终止条件
    if (root == null) {
      return 0;
    }

    const left = dfs(root.left);  // 左子树提供的最大路径和
    const right = dfs(root.right); // 右子树提供的最大路径和

    const innerMaxSum = left+root.val+right;  // 当前子树内部的最大路径和
    maxSum = Math.max(maxSum, innerMaxSum);  // 看看是不是比当前最大的大

    const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

    // 如果对外提供的路径和为负数，直接返回0，否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }

  dfs(root);
  return maxSum;
};

