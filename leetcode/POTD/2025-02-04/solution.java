class Solution {
    public int maxAscendingSum(int[] nums) {
        int max = 0, curr = nums[0];
        for(int i=1;i<nums.length;i++){
            if(nums[i] > nums[i-1]){
                curr += nums[i];
            } else {
                max = Math.max(max, curr);
                curr = nums[i];
            }
        }
        return Math.max(max, curr);
    }
}