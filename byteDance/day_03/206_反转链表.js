/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 没有节点或者只有一个节点
  if (!head || !head.next) {
    return head;
  }

  // 如果至少有两个节点
  let current = head;
  let pre = null; // 常规解题思路，虚拟头结点

  while (!current) {
    let temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }

  return pre;
};