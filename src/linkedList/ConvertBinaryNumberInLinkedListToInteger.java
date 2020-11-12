package linkedList;

/**
 * @description:给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。
 * 已知此链表是一个整数数字的二进制表示形式。
 * 请你返回该链表所表示数字的十进制值。
 * @author: HeyWeCome
 * @createDate: 2020/11/12 21:29
 * @version: 1.0
 */
public class ConvertBinaryNumberInLinkedListToInteger {
    public class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
            val = x;
        }
    }

    class Solution {
        int flag = 0;
        public int getDecimalValue(ListNode head) {
            if (head == null) return 0;
            return getDecimalValue(head.next) + (int) Math.pow(2, flag++) * head.val;
        }
    }
}
