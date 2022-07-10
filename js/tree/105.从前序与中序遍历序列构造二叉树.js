/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;

  // 取出中心点
  let rootVal = preorder.shift();
  // 赋值中心点
  const root = new TreeNode(rootVal);
  // 找到中心点在中序遍历中的位置
  let rootIndex = inorder.indexOf(rootVal);

  // 赋值中心点的左节点
  root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex));
  // 赋值中心点的右节点
  root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex+1));

  return root;
};