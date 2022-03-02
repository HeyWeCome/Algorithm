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

/**
 * 在链表的头部插入元素
 * @param {number} val
 * @return {void} 
 */
MyLinkedList.prototype.addAtHead = function(val){
  const node = new LinkNode(val, this._head);
  this._head = node;
  if(!this._tail) {
    this._tail = node;
  }
}

/**
 * 在链表的尾部插入元素
 * @param {number} val 
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new LinkNode(val, null);
  this._size++;

  if(this._tail) {
    this._tail.next = node;
    this._tail = node;
    return;
  }

  this._head = node;
  this._tail = node;
}

/**
 * 在指定位置插入元素
 * @param {number} index 
 * @param {number} val 
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  // 尾插
  if(index > this._size){
    this.addAtTail(val);
    return;
  }

  // 头插
  if(index <= 0){
    this.addAtHead(val);
    return;
  }

  // 获取目标节点的上一个节点
  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this._size++;
}

/**
 * 删除指定位置的元素
 * @param {number} index 
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this._size) return;
    if(index === 0) {
        this._head = this._head.next;
        // 如果删除的这个节点同时是尾节点，要处理尾节点
        if(index === this._size - 1){
            this._tail = this._head
        }
        this._size--;
        return;
    }
    // 获取目标节点的上一个的节点
    const node = this.getNode(index - 1);    
    node.next = node.next.next;
    // 处理尾节点
    if(index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
}