/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead){
  if(!pHead || !pHead.next) return null;
  let slow = pHead.next;
  let fast = pHead.next.next;

  while (fast && slow && fast != slow) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (!fast || !fast.next) return null;

  slow = pHead;
  while (fast != slow) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};