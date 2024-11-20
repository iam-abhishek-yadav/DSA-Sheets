function lengthOfLIS(nums: number[]): number {
    const dp: number[] = new Array<number>(nums.length).fill(1);
    let max: number = 1;
    for (let i: number = 1; i < nums.length; i++) {
        for (let j: number = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
        if (dp[i] > max) {
            max = dp[i];
        }
    }
    return max;
}
