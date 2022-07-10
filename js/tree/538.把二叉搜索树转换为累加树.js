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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;

  const travel = (root) => {
    if (root !== null) {
      // 遍历右子树
      travel(root.right);
      // 遍历顶点
      root.val += sum;
      sum = root.val;
      // 遍历左子树
      travel(root.left);
      return root;
    }
    return null;
  }

  return travel(root);
};
