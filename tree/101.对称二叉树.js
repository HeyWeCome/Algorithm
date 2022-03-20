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
 * @return {boolean}
 */

// 递归
// var isSymmetric = function(root) {
//   if (root === null) return true;

//   const compare = (left, right) => {
//     // 首先排除为空的情况
//     if ((left === null && right !== null) || (left !== null && right === null)) return false;
//     else if (left === null && right === null) return true;
//     else if (left.val !== right.val) return false;

//     // 然后分别走子树
//     let outSide = compare(left.left, right.right);
//     let inSide = compare(left.right, right.left);
//     return outSide&&inSide;
//   }

//   return compare(root.left, root.right);
// };

// 非递归
var isSymmetric = function(root) {
  if (root === null) return true;

  const queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    let leftNode = queue.shift();
    let rightNode = queue.shift();

    if (leftNode === null && rightNode === null) continue;
    else if(leftNode === null || rightNode === null || leftNode.val !== rightNode.val) return false;
    queue.push(leftNode.left);
    queue.push(rightNode.right);
    queue.push(leftNode.right);
    queue.push(rightNode.left);
  }

  return true;
};