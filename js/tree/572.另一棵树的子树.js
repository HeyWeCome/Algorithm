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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (root === null && subRoot === null) return true;
  if ((root === null && subRoot !== null) || (root !== null && subRoot === null)) return false;

  // 1.要么两棵树相等
  const whetherSameTree = (root, subRoot) => {
    if( (root === null && subRoot !== null) || (root !== null && subRoot === null)) return false;
    else if(root === null && subRoot === null) return true;
    else if(root.val !== subRoot.val) return false;
    return whetherSameTree(root.left, subRoot.left) && whetherSameTree(root.right, subRoot.right);
  }

  // 2.要么subRoot是root的子树
  let leftRes = isSubtree(root.left, subRoot);
  let rightRes = isSubtree(root.right, subRoot);

  return whetherSameTree(root,subRoot) || leftRes || rightRes;
};