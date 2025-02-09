public class Solution {
    public long countBadPairs(int[] nums) {
        int length = nums.length;
        int[] adjustedValues = new int[length];

        for (int i = 0; i < length; i++) {
            adjustedValues[i] = nums[i] - i;
        }

        Arrays.sort(adjustedValues);

        long goodPairs = 0, currentCount = 1;

        for (int i = 1; i < length; i++) {
            if (adjustedValues[i] == adjustedValues[i - 1]) {
                currentCount++;
            } else {
                goodPairs += (currentCount * (currentCount - 1)) / 2;
                currentCount = 1;
            }
        }

        goodPairs += (currentCount * (currentCount - 1)) / 2;

        long totalPairs = (long) length * (length - 1) / 2;
        return totalPairs - goodPairs;
    }
}
