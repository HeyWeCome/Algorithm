package linkedList;

/**
 * @description: 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * @author: HeyWeCome
 * @createDate: 2020/9/17 16:24
 * @version: 1.0
 */

/**
 * 思路：用两个指针来跑，他们之间差n个位置，前指针到了末尾，后指针就是要删除的
 */
public class Remove_Nth_Node_From_End_of_List {
     static class ListNode {
         int val;
         ListNode next;
         ListNode(int x) { val = x; }
    }

    public static ListNode removeNthFromEnd(ListNode head, int n) {
        if(head == null || head.next == null) return null;

        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode first = dummy;     // 第一个跑的指针
        ListNode second = dummy;    // 第二个跑的指针

        for (int i = 1; i <= n + 1; i++) {
            first = first.next;
        }

        // 第一个指针走到末尾，第二个一起动，保持间距
        while (first != null) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;
        return dummy.next;
    }

    public static void main(String[] args) {
        int[] num = {1};
        ListNode list = new ListNode(0);
        ListNode head = list;

        for (int i = 0; i < num.length; i++){
            ListNode temp = new ListNode(num[i]);
            list.next = temp;
            list = temp;
        }

        ListNode listNode = removeNthFromEnd(head.next, 6);

        while(listNode != null){
            System.out.println("head.val = " + listNode.val);
            listNode = listNode.next;
        }
    }
}
