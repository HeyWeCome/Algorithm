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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  // 1. 情况一：没找到删除的节点，遍历到空节点直接返回，说明删除完了
  if (root === null) return root;

  if (root.val === key) {
    // 2. 情况二：找到了删除节点，且左右子树都为空
    if (root.left === null && root.right === null) {
      return null;
    }

    // 3. 情况三：找到了删除节点，左子树为空，右子树不为空，则直接返回右孩子
    else if (root.left === null && root.right !== null) {
      return root.right;
    }

    // 4. 情况四：找到了删除节点，左子树不为空，右子树为空，则直接返回左孩子
    else if (root.right === null && root.left !== null) {
      return root.left;
    }

    // 5. 情况五：左右子树都不为空
    else {
      let cur = root.right;
      while (cur.left) {
        cur = cur.left;
      }
      // 将左子树连接到右子树最小的节点上，也就是右子树最左边的节点
      cur.left = root.left;
      root = root.right;
      return root;
    }
  }

  if (root.val > key) root.left = deleteNode(root.left, key);
  if (root.val < key) root.right = deleteNode(root.right, key);
  return root;
};