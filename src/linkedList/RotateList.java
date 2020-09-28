package linkedList;

/**
 * @description: 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * @author: HeyWeCome
 * @createDate: 2020/9/28 8:30
 * @version: 1.0
 */
public class RotateList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public ListNode rotateRight(ListNode head, int k) {
        if(head==null || k==0) return head;
        ListNode move = head;               // 控制操作位移的结点
        ListNode tail = head;               // 尾结点
        int length = 1;                     // 记录链表的长度

        while(move.next != null) {
            move = move.next;              // 移动结点至尾结点，非空的最后一个结点
            length++;
        }

        tail = move;                      // 指向尾结点
        move.next = head;                 // 将整个结点变成一个环
        move = head;                      // 再指向头结点

        int headMove = length-(k%length); // 头节点需要移动的长度

        while(headMove-- > 0){
            move = move.next;
            tail = tail.next;
        }

        tail.next = null;

        return move;
    }
}
