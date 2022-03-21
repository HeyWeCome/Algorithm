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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  // 递归遍历+递归三部曲
  let res = [];
  
  // 1. 确认递归函数 函数参数
  const getPath = (node, curPath) => {
    // 2.确认终止条件
    if (node.left === null && node.right === null) {
      // 叶子节点的值后面不需要跟 '->'
      curPath += node.val;
      res.push(curPath);
      return;
    }

    // 3.确定单层递归逻辑
    curPath += node.val+'->';
    if (node.left) getPath(node.left, curPath);
    if (node.right) getPath(node.right, curPath);
  }

  getPath(root, '');
  return res;
};