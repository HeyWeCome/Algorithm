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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = new Array();
  let queue = new Array();

  if ( root === null ) {
    return result;
  }

  queue.push(root);
  while (queue.length !== 0) {
    // 将当前层级节点记录下来
    let len = queue.length;
    // 存放每一层的节点
    let curLevel = [];

    // 开始遍历这一层的节点
    for (let i = 0; i < len; i++) {
      // 从头开始弹出元素
      let node = queue.shift();
      curLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // 把每一层的节点都放进结果中
    result.push(curLevel);
  }

  return result;
};