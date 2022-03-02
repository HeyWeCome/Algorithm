/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * leetcode 203
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if(head.val == null || head.next == null){
    return [];
  }

  let header = ListNode(0);
  header.next = head;
  let current = header;

  while(current.next != null){
    if(current.next.val == val){
      current.next = current.next.next;
    }else{
      current = current.next;
    }
  }

  return header.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}