function ListNode(x){
  this.val = x;
  this.next = null;
}

// 笨方法
// function reverseBetween(head, m, n) {
//   const dummy = new ListNode(-1);
//   dummy.next = head;
  
//   let start = dummy;
//   // 先走到需要反转的起点位置
//   for (let i = 0; i < m-1; i++) {
//     start = start.next;
//   }

//   // 从start走到结束的节点
//   let pointer = start;
  

//   for (let i = 0; i < n-m+1; i++) {
//     pointer = pointer.next;
//   }

//   // 切割出需要翻转的链表
//   let leftNode = start.next;    // 翻转链表的起始位置
//   let rightNode = pointer.next; // 翻转链表的下一个位置

//   // 切短连接
//   start.next = null;
//   pointer.next = null;

//   reverseLinkedList(leftNode);
//   start.next = pointer;
//   leftNode.next = rightNode;

//   return dummy.next;
// }

// const reverseLinkedList = (head) => {
//   let pre = null;
//   let cur = head;

//   while (cur) {
//       const next = cur.next;
//       cur.next = pre;
//       pre = cur;
//       cur = next;
//   }
// }

function reverseBetween(head, m, n) {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  // 走到待翻转链表的前一个位置
  let pre = dummyNode;
  for (let i = 1; i < m-1; i++) {
    pre = pre.next;
  }

  // 开始反转的地方
  let cur = pre.next;
  for (let i = 0; i < n-m+1; i++) {
    let next = cur.next;
    cur.next = next.next;
    next.next = pre;
    pre.next = next;
  }

  return dummyNode.next;
}

module.exports = {
  reverseBetween: reverseBetween,
};
