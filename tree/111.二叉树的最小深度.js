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
// var minDepth = function(root) {
//   const queue = [];
//   let count = 0;

//   if (root === null) return 0;
//   queue.push(root);

//   while (queue.length > 0) {
//     let len = queue.length;
//     count++;
//     for (let i = 0; i < len; i++) {
//       const node = queue.shift();
//       if (node.left === null && node.right === null) return count;
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
//   return count;
// };

var minDepth = function(root) {

  const getDepth = (root) => {
    if (root === null) return 0;
    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);

    // 当左子树为空，右子树不为空，此时并不是最低点，不看左子树，直接走右子树
    if (root.left === null && root.right !== null) {
      return 1+rightDepth;
    }

    // 当右子树为空，左子树不为空，此时并不是最低点，不看右子树，直接走左子树
    if (root.left !== null && root.right === null) {
      return 1+leftDepth;
    }

    let result = 1+Math.min(leftDepth, rightDepth);
    return result;
  }

  return getDepth(root);
};