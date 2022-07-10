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
var sumOfLeftLeaves = function(root) {
  if (root === null) return 0;
  let res = 0;

  // 判断是不是左节点，是的话就加起来
  if (root.left !== null && root.left.left === null && root.left.right === null) {
    res += root.left.val;
  }

  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) + res;
};

// 自己做的
var sumOfLeftLeaves = function(root) {
  // 如果只有一个节点，返回0
  if(root !== null && root.left === null && root.right === null) return 0;
  const result = [];

  const getleftVal = (root) => {
    if (root === null) {
      return;
    }

    if (root.left !== null && root.left.left === null && root.left.right === null) {
      result.push(root.left.val);
    }

    getleftVal(root.left);
    getleftVal(root.right);
  }

  getleftVal(root);
  let sum = [...result].reduce( (pre, cur) => pre+cur, 0)
  return sum;
};