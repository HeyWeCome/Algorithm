/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  const queue = [];

  if (root === null) return result;
  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;
    let curLevel = [];

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      for (const child of node.children) {
        queue.push(child);
      }
    }

    result.push(curLevel);
  }

  return result;
};