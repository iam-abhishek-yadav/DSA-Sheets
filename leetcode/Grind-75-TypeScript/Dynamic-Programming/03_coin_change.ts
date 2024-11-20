function coinChange(coins: number[], amount: number): number {
    const dp: number[] = new Array<number>(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (const coin of coins) {
        for (let i: number = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}
