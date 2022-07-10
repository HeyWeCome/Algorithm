function ListNode(x){
  this.val = x;
  this.next = null;
}

/**
  * 
  * @param head ListNode类 
  * @param k int整型 
  * @return ListNode类
  */
 function reverseKGroup( head ,  k ) {
  if (!head || !head.next) return head;

  const dummyNode = new ListNode(-1);
  let resultNode = dummyNode;
  let current = head;
  const record = [];

  while (true) {
    if (record.length % k === 0 && record.length !== 0) {
      while (record.length > 0) {
        resultNode.next = record.pop();
        resultNode = resultNode.next;
        resultNode.next = null;
      }
    } else {
      if (current == null) break;
      record.push(current);
      current = current.next;
    }
  }

  if (record.length > 0) {
    while (record.length > 0) {
      resultNode.next = record.shift();
      resultNode = resultNode.next;
      resultNode.next = null;
    }
  }

  return dummyNode.next;
}
module.exports = {
  reverseKGroup : reverseKGroup
};