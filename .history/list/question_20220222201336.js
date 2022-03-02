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

  let header = new ListNode(0);
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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * leetcode 206
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(!head || !head.next) return head;

  let current = head;
  let pre = new ListNode(0, null);
  
  while(current. != null){
    let temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }

  return current;
};

console.log(first)

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}