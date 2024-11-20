function climbStairs(n: number): number {
    if (n <= 2) return n;
    const dp: number[] = new Array<number>(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i: number = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
