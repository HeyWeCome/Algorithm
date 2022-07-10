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
// 层次遍历解题：速度比较慢
// var countNodes = function(root) {
//   if (root === null) return 0;

//   let queue = [];
//   let length = 0;
//   queue.push(root);
//   while (queue.length) {
//     let len = queue.length;
//     length += len;
//     for (let i = 0; i < len; i++) {
//       let node = queue.shift();
//       if(node.left) queue.push(node.left);
//       if(node.right) queue.push(node.right);
//     }
//   }

//   return length;
// };

var countNodes = function(root) {
  if (root === null) return 0;

  let leftNum = countNodes(root.left);
  let rightNum = countNodes(root.right);
  return leftNum+rightNum+1;
};