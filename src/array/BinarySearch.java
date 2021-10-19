package array;

/**
 * @description: 数组二分查找
 * @author: heywecome
 * @create: 2021-10-18 14:02
 **/

public class BinarySearch {

    /**
     * @Author heywecome
     * @Description 普通的二分查找
     * @Date 14:03 2021/10/18
     * @Param [nums, target]
     * @return int
     **/
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length;

        while(left < right) {
            int mid = left + (right - left)/2;
            if (nums[mid] < target)
                left = mid + 1;
            else if (nums[mid] > target)
                right = mid;
            else
                return mid;
        }
        return -1;
    }

    /**
     * @Author heywecome
     * @Description 35题，寻找插入位置
     * @Date 14:04 2021/10/18
     * @Param [nums, target]
     * @return int
     **/
    public int searchInsert(int[] nums, int target) {
        if (target > nums[nums.length-1])
            return nums.length;
        if (target < nums[0])
            return 0;

        int left = 0, right = nums.length;

        while(left < right) {
            int mid = left + (right-left)/2;
            if (nums[mid] < target)
                left = mid + 1;
            else if (nums[mid] > target)
                right = mid;
            else
                return mid;
        }
        return left;
    }

    /**
     * @Author heywecome
     * @Description 34.在排序数组中查找元素的第一个和最后一个位置
     * @Date 14:08 2021/10/18
     * @Param [nums, target]
     * @return int[]
     **/
    public int[] searchRange(int[] nums, int target) {
        int index = search(nums, target); // 首先通过二分查找数值

        if (index == -1)
            return new int[]{-1, -1}; // 不存在target的情况

        // 如果存在，则通过滑动指针来寻找区间
        int left = index;
        int right = index;

        while (left - 1 >= 0 && nums[left - 1] == nums[index])
            left--;

        while (right + 1 < nums.length && nums[right + 1] == nums[index])
            right++;

        return new int[]{left, right};
    }

    /***
     * @Author heywecome
     * @Description 给定一个非负整数x，计算并返回 x 的算术平方根
     * @Date 16:36 2021/10/18
     * @Param [x]
     * @return int
     **/
    public int mySqrt(int x) {
        if (x == 0 || x == 1)
            return x;

        int low = 0;
        int high = x;

        while(low < high) {
            int mid = low + ((high - low)/2);

            if ((long)mid * mid > x)
                high = mid;
            else if ((long)mid * mid < x)
                low = mid+1;
            else if ((long)mid * mid == x)
                return mid;
        }

        return low-1;
    }

    /**
     * @Author heywecome
     * @Description 判断一个数是不是完全平方数
     * @Date 16:55 2021/10/18
     * @Param [num]
     * @return boolean
     **/
    public boolean isPerfectSquare(int num) {
        if (num == 1)
            return true;

        long low = 0;
        long high = num;

        while (low < high) {
            long mid = low + (high - low) / 2;

            if (mid*mid == num)
                return true;
            else if (mid*mid < num)
                low = mid+1;
            else
                high = mid;
        }
        return false;
    }

    public int removeElement(int[] nums, int val) {
        int slowPoint = 0;

        for (int fastPoint = 0; fastPoint < nums.length; fastPoint++) {
            if (nums[fastPoint] != val)
                nums[slowPoint++] = nums[fastPoint];
        }

        return slowPoint;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{5,7,7,8,8,10};
        int target = 8;

        BinarySearch binarySearch = new BinarySearch();
//        int[] range = binarySearch.searchRange(nums, target);
//        for (int i : range) {
//            System.out.print(i);
//        }
        boolean result = binarySearch.isPerfectSquare(16);
        System.out.println(result);
    }
}
