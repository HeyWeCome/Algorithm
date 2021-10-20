package array;

import java.util.Arrays;

/**
 * @description: 移除元素
 * @author: heywecome
 * @create: 2021-10-19 15:47
 **/

public class RemoveElement {

    /**
     * @Author heywecome
     * @Description 27题：给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度
     * @Date 15:49 2021/10/19
     * @Param [nums, val]
     * @return int
     *
     * 示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。
     *
     * 示例 2: 给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
     **/
    public int removeElement(int[] nums, int val) {
        int slowPoint = 0;

        for (int fastPoint = 0; fastPoint < nums.length; fastPoint++) {
            if (nums[fastPoint] != val){
                nums[slowPoint++] = nums[fastPoint];
            }
        }

        return slowPoint;
    }

    /**
     * @Author heywecome
     * @Description leetcode26题，删除有序数组中的重复项
     * 给你一个有序数组 nums ，请你原地 删除重复出现的元素，使每个元素只出现一次 ，返回删除后数组的新长度。
     * 不要使用额外的数组空间，你必须在原地修改输入数组 并在使用 O(1) 额外空间的条件下完成。
     *
     * @Date 16:47 2021/10/19
     * @Param [nums]
     * @return int
     *
     * 输入：nums = [1,1,2]
     * 输出：2, nums = [1,2]
     * 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
     *
     * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
     * 输出：5, nums = [0,1,2,3,4]
     * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
     *
     **/
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0 || nums.length == 1) {
            return nums.length;
        }

        int slowPoint = 0;
        for (int fastPoint = 1; fastPoint < nums.length; fastPoint++) {
            if (nums[fastPoint] != nums[slowPoint]) {
                nums[++slowPoint] = nums[fastPoint];
            }
        }

        return ++slowPoint;
    }

    /**
     * @Author heywecome
     * @Description 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
     * @Date 9:56 2021/10/20
     * @Param [nums]
     * @return void
     *
     * 输入: [0,1,0,3,12]
     * 输出: [1,3,12,0,0]
     **/
    public void moveZeroes(int[] nums) {
        if (nums.length <= 1)
            return;

        int slowPoint = 0;
        for (int fastPoint = 0; fastPoint < nums.length; fastPoint++) {
            if (nums[fastPoint] != 0) {
                int temp = nums[fastPoint];
                nums[fastPoint] = nums[slowPoint];
                nums[slowPoint++] = temp;
            }
        }

    }

    /**
     * @Author heywecome
     * @Description leetcode:844题
     * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。
     * 如果相等，返回 true ；否则，返回 false 。
     * 注意：如果对空文本输入退格字符，文本继续为空。
     *
     * @Date 10:50 2021/10/20
     * @Param [s, t]
     * @return boolean
     **/
    public boolean backspaceCompare(String s, String t) {
        return handleStringToRemoveBackspace(s).equals(handleStringToRemoveBackspace(t));
    }

    public String handleStringToRemoveBackspace(String s) {
        StringBuilder strBuilder = new StringBuilder(s);

        int slowPoint = 0;
        for (int fastPoint = 0; fastPoint < strBuilder.length(); fastPoint++) {
            if (strBuilder.charAt(fastPoint) != '#') {
                char temp = strBuilder.charAt(slowPoint);
                strBuilder.setCharAt(slowPoint++, strBuilder.charAt(fastPoint));
                strBuilder.setCharAt(fastPoint, temp);
            } else {
                if (slowPoint != 0)
                    slowPoint--;
            }
        }

        return strBuilder.substring(0, slowPoint);
    }

    /**
     * @Author heywecome
     * @Description 977. 有序数组的平方
     * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
     * @Date 15:51 2021/10/20
     * @Param [nums]
     * @return int[]
     **/
    public int[] sortedSquares(int[] nums) {
        int right = nums.length - 1;
        int left = 0;
        int[] result = new int[nums.length];
        int index = result.length - 1;
        while (left <= right) {
            if (nums[left] * nums[left] > nums[right] * nums[right]) {
                result[index--] = nums[left] * nums[left];
                left++;
            } else {
                result[index--] = nums[right] * nums[right];
                right--;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{-4,-1,0,3,10};
        int val = 5;

//        String s = "a##c";
//        String t = "#a#c";
        RemoveElement removeElement = new RemoveElement();
        int[] sortedSquares = removeElement.sortedSquares(nums);
        System.out.println(Arrays.toString(sortedSquares));
//        System.out.println(removeElement.backspaceCompare(s, t));
//        System.out.println(removeElement.handleStringToRemoveBackspace(t).toString());
    }
}
