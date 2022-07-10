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

// 递归
// var invertTree = function(root) {

//   const invert = (left, right) => {
//     let temp = left;
//     left = right;
//     right = temp;

//     root.left = left;
//     root.right = temp;
//   }

//   if( root === null) return root;

//   invert(root.left, root.right);
//   invertTree(root.left);
//   invertTree(root.right);

//   return root;
// };

// 层序遍历
var invertTree = function(root) {

  const invertNode = (root) => {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }

  let queue = [];
  if( root === null) return root;
  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      invertNode(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
};