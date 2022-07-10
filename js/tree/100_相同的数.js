/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  
  const compare = (p, q) => {
    if ( (p===null && q!==null) || (p!==null && q===null) ) return false;
    else if (p === null && q === null) return true;
    else if (p.val !== q.val) return false;

    let leftRes = compare(p.left, q);
    let rightRes = compare(p.right, q);
    return leftRes && rightRes;
  }

  return compare(p, q);
};