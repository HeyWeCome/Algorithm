function ListNode(x){
  this.val = x;
  this.next = null;
}

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
 function hasCycle( head ) {
  if (!head) return false;
  if (head != null && head.next == null) return false;

  let fast = head;
  let slow = head;

  while (fast && slow) {
    slow = slow.next;

    if (fast.next) fast = fast.next.next;
    else return false;

    if (fast == slow) return true;
  }

  return false;
}
module.exports = {
  hasCycle : hasCycle
};