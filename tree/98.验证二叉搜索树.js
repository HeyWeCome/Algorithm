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

// 1. 利用中序遍历为升序做的
var isValidBST = function(root) {
  const nodeList = [];

  const travel = (root) => {
    if(root === null) return;
    
    travel(root.left);
    nodeList.push(root.val);
    travel(root.right);
  }

  travel(root);

  for (let index = 0; index < nodeList.length-1; index++) {
    if(nodeList[index] >= nodeList[index+1]) return false;
  }
  return true;
};

// 2. 递归做
var isValidBST = function(root) {
  let pre = null;
  const inOrder = (root) => {
    if (root === null) return true;

    let left = inOrder(root.left);
    if (pre !== null && pre.val >= root.val) return false;
    pre = root;
    let right = inOrder(root.right);
    
    return left && right;
  }
  return inOrder(root);
};