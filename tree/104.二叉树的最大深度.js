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
// var maxDepth = function(root) {
//   const queue = [];
//   let count = 0;

//   if (root === null) return 0;
//   queue.push(root);

//   while (queue.length > 0) {
//     let len = queue.length;
//     count++;
//     for (let i = 0; i < len; i++) {
//       const node = queue.shift();
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
//   return count;
// };

var maxDepth = function(root) {
  let count = 1;

  const dfs = (root, count) => {
    if( root === null ) return 0;
    return Math.max(dfs(root.left, count+1), dfs(root.right, count+1));
  }

  return dfs(root, count);
};