/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let pointer1 = list1;
  let pointer2 = list2;
  let result = new ListNode(0, null);
  let head = result;

  while(pointer1 && pointer2) {
    if (pointer1.val < pointer2.val) {
      head.next = pointer1;
      pointer1 = pointer1.next;
      head  = head.next;
    } else {
      head.next = pointer2;
      pointer2 = pointer2.next;
      head = head.next;
    }
  }

  if(pointer1) head.next = pointer1;
  if(pointer2) head.next = pointer2;

  return result.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}