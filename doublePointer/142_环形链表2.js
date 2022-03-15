/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head || !head.next) return null;
  let slow = head.next;
  let fast = head.next.next;

  while(fast && fast.next && fast != slow) {
    slow = slow.next; // 慢的走一步
    fast = fast.next.next; // 快的走两步
  }

  // 没有环
  if(!fast || !fast.next){
    return null;
  }

  // 从相交处开始，一个从头开始，一个从相交处开始，相遇的地方就是交汇处
  slow = head;
  while(slow != fast){
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};