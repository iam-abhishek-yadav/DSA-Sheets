function canPartition(nums: number[]): boolean {
    let sum: number = nums.reduce((acc: number, num: number) => acc + num, 0);
    if (sum % 2 !== 0) return false;

    const subsum: number = sum / 2;
    const n: number = nums.length;
    const dp: boolean[][] = Array.from({ length: n + 1 }, () => Array(subsum + 1).fill(false));

    for (let i = 0; i <= n; i++) dp[i][0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= subsum; j++) {
            dp[i][j] = j < nums[i - 1] ? dp[i - 1][j] : dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
        }
    }

    return dp[n][subsum];
}
