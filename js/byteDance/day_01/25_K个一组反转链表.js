/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const reverseList = (head) => {
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let dummy = new ListNode(0,head);  // 虚拟头结点

  let left = dummy; // 左侧边界
  let current = dummy;
  
  while(current.next != null){
    let cycleCount = 0; // 每一次前进的步数
    // 开始执行每一次的前进
    while (cycleCount < k && current != null) {
      current = current.next;
      cycleCount++;
    }

    // 如果当前为空节点了，不执行任何操作，直接出去
    if (current == null) {
      break;
    }

    // 现在current走到了当前翻转的最后一个节点
    let start = left.next; // 指向第一个节点
    let next = current.next; // 未翻转列表的第一个节点

    current.next = null; // 当前翻转链表的最后一个节点置空
    left.next = reverseList(start); // 翻转当前操作列表
    start.next = next;  // 指向下一个带翻转链表的第一个节点
    left = start; // 进入下一个待翻转链表
    current = left;
  }

  return dummy.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}