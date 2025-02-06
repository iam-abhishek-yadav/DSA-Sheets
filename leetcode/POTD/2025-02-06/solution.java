class Solution {
    public static int tupleSameProduct(int[] nums) {
        int length = nums.length;
        int pairCount = length * (length - 1) / 2;
        int[] productArray = new int[pairCount];
        int productIndex = 0;

        for (int first = 0; first < length - 1; first++) {
            for (int second = first + 1; second < length; second++) {
                productArray[productIndex++] = nums[first] * nums[second];
            }
        }

        Arrays.sort(productArray);

        int result = 0;
        int frequency = 1;
        for (int i = 1; i < pairCount; i++) {
            if (productArray[i] == productArray[i - 1]) {
                frequency++;
            } else {
                if (frequency > 1) {
                    result += frequency * (frequency - 1) * 4;
                }
                frequency = 1;
            }
        }

        if (frequency > 1) {
            result += frequency * (frequency - 1) * 4;
        }

        return result;
    }
}
