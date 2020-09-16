package linkedList;

/**
 * @description: 第二题
 * @author: HeyWeCome
 * @createDate: 2020/9/16 18:51
 * @version: 1.0
 */
public class SumOfTwoNum {
      static class ListNode {
          int val;
          ListNode next;
          ListNode(int x) { val = x; }
    }

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode root = new ListNode(0);
        ListNode cursor = root;
        int carry = 0;  // 进位数
        while(l1 != null || l2 != null || carry != 0){
            int val1 = l1 != null ? l1.val : 0;
            int val2 = l2 != null ? l2.val : 0;
            int sumVal = val1 + val2 + carry;
            carry = sumVal / 10;    // 两位数相加 进位不是0 就是1

            ListNode sumNode = new ListNode(sumVal % 10);
            cursor.next = sumNode;
            cursor = sumNode;

            if(l1 != null) l1 = l1.next;
            if(l2 != null) l2 = l2.next;
        }

        return root.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(0);
        ListNode l2 = new ListNode(0);
        ListNode head1 = l1;
        ListNode head2 = l2;
        
        int[] a1 = {2,4,3};
        int[] a2 = {5,6,4};

        for(int i = 0; i < a1.length; i++){
            head1.next = new ListNode(a1[i]);
            head1 = head1.next;
        }

        for(int i = 0; i < a2.length; i++){
            head2.next = new ListNode(a2[i]);
            head2 = head2.next;
        }

        ListNode result = addTwoNumbers(l1.next,l2.next);

        while(result!=null){
            System.out.println("result. val = " + result. val);
            result = result.next;
        }
    }
}
