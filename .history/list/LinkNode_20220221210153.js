class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * 初始化数据
 * 单链表 存储头尾节点 和 节点数量
 */
var MyLinkedList = function() {
  this._size = 0;
  this._tail = null;
  this._head = null;
}

/**
 * 根据给定下标返回数据
 * @param {number} index 
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
  if(index < 0 || index >= this._size){
    return null;
  }

  // 创建头部虚拟节点
  let cur = new LinkNode(0, this._head);
  // 0 -> head
  while(index-- >= 0) {
    cur = cur.next;
  }
  return cur;
}
/**
 * 做一层封装
 * @param {number} index 
 */
MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this._size){
    return -1;
  }
  // 获取当前节点
  return this.getNode(index).val;
}