class Solution {
    public int maximumSum(int[] nums) {
        int maxSum = -1;
        HashMap<Integer, Integer> digitSumMap = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            int digitSum = 0;
            int num = nums[i];
            while (num != 0) {
                digitSum += num % 10;
                num = num / 10;
            }

            if (!digitSumMap.containsKey(digitSum)) {
                digitSumMap.put(digitSum, nums[i]);
            } else {
                maxSum = Math.max(maxSum, digitSumMap.get(digitSum) + nums[i]);
                digitSumMap.put(digitSum, Math.max(digitSumMap.get(digitSum), nums[i]));
            }
        }
        return maxSum;
    }
}