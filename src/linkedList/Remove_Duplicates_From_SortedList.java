package linkedList;

/**
 * @description: 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * @author: HeyWeCome
 * @createDate: 2020/9/18 19:40
 * @version: 1.0
 */
public class Remove_Duplicates_From_SortedList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public ListNode deleteDuplicates(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }
        head.next = deleteDuplicates(head.next);
        if(head.val == head.next.val) head = head.next;
        return head;
    }
}
