package array;

/**
 * @description: 数组操作
 * @author: heywecome
 * @create: 2021-10-21 14:13
 **/

public class MyArray {

    /**
     * @Author heywecome
     * @Description 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
     * @Date 14:13 2021/10/21
     * @Param [target, nums]
     * @return int
     **/
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0;
        int sum = 0;
        int result = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= target) {
                result = Math.min(result, right-left+1);
                sum -= nums[left++];
            }
        }
        return result == Integer.MAX_VALUE ? 0 : result;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1,1,1,1,1,1,1,1};
        int target = 11;

        MyArray myArray = new MyArray();
        int minSubArrayLen = myArray.minSubArrayLen(target, nums);
        System.out.println(minSubArrayLen);
    }
}
