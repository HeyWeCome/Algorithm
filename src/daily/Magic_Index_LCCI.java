package daily;

/**
 * @description:
 *
 * 魔术索引。 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。
 * 给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，如果没有，则返回-1。
 * 若有多个魔术索引，返回索引值最小的一个。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/magic-index-lcci
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 * @author: HeyWeCome
 * @createDate: 2020/7/31 16:14
 */

/**
 * 解题思路：
 * 关键点：有序整数数组、返回索引值最小的、数组值等于下标
 */

/**
 * 第一版解题：简单遍历数组来判断
 * 执行用时：1 ms, 在所有 Java 提交中击败了47.45%的用户
 * 内存消耗：40.7 MB, 在所有 Java 提交中击败了57.58%的用户
 * public static int findMagicIndex(int[] nums) {
 *         for (int i = 0; i < nums.length; i++){
 *             if(nums[i] == i){
 *                 return i;
 *             }
 *         }
 *         return -1;
 *     }
 */

/**
 * 解题思路：在第一版的基础上做了改进，通过跳跃定位比较的下标，就可以快速解题了
 * public int findMagicIndex(int[] nums) {
 *         int i = 0;
 *         do{
 *             if(nums[i] == i){
 *                 return i;
 *             }else {
 *                 i = nums[i] > (i+1) ? nums[i] : (i+1);
 *             }
 *         }while (i < nums.length);
 *         return -1;
 *     }
 */

public class Magic_Index_LCCI {
    // 找到魔术索引
    public static int findMagicIndex(int[] nums) {
        int i = 0;
        do{
            if(nums[i] == i){
                return i;
            }else {
                i = nums[i] > (i+1) ? nums[i] : (i+1);
            }
        }while (i < nums.length);
        return -1;
    }

    public static void main(String[] args) {
        int[] nums = {-531369933, -469065528, -430059048, -428981853, -319235969, -288076332, -286667432, -282312559, -197049680, -197022263, -174416117, -138027773, -121899023, -111631966, -107567458, -70437707, -52463072, -45519851, -38641451, -15825815, -3835472, -1525043, 22, 566842886, 593757472, 605439236, 619794079, 640069993, 657657758, 718772950, 815849552, 839357142, 936585256, 1006188278, 1042347147, 1057129320, 1062178586, 1069769438};
        System.out.println("findMagicIndex(nums) = " + findMagicIndex(nums));
    }
}
