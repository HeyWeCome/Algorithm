function ListNode(x){
    this.val = x;
    this.next = null;
}

function ReverseList(pHead) {
  if (!pHead || !pHead.next) return pHead;

  let current = pHead;
  let pre = null;

  while (current != null) {
    let temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }

  return pre;
}
module.exports = {
  ReverseList: ReverseList,
};