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
  // 双指针解法
  if(!head || !head.next) return head;

  let current = head;
  let pre = null;
  
  while(current != null){
    let temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }
  return pre;
};

/**
 * LeetCode 24: 两两交换链表中的节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
   let ret = new ListNode(0, head);
   let current = ret;

   while(current.next && current.next.next) {
    let temp = current.next.next;
    let pre = current.next;

    current.next = temp;
    pre.next = temp.next;
    temp.next = pre;
    current = pre;
   }

   return ret.next;
};

/**
 * leetcode 19：删除链表的倒数第 N 个节点
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let ret = new ListNode(0, head);
  let slow = fast = ret;

  // fast先走 n 步
  while(n-- > 0){
    fast = fast.next;
  }

  // 直到fast走到末尾
  while(fast.next){
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return ret.next;
};

/**
 * leetcode 面试题 02.07. 链表相交
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  let curA = headA;
  let curB = headB;

  while(curA != curB){
    curA = curA === null ? curB : curA.next;
    curB = curB === null ? curA : curB.next;
  }

  return curA;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

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

  if(!fast || !fast.next){
    return null;
  }

  slow = head;
  while(slow != fast){
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};