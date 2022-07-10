function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2){
  const result = new ListNode(-1);
  let current = result;
  
  while (pHead1 != null && pHead2 != null) {
    if (pHead1.val > pHead2.val) {
      current.next = pHead2;
      pHead2 = pHead2.next;
    } else {
      current.next = pHead1;
      pHead1 = pHead1.next;
    }
    current = current.next;
    current.next = null;
  }

  if (pHead1 != null) current.next = pHead1;
  if (pHead2 != null) current.next = pHead2;

  return result.next;
}
module.exports = {
    Merge : Merge
};