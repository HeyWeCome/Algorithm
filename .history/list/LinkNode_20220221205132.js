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

}