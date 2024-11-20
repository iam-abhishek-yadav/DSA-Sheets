function numDecodings(s: string): number {
    const n: number = s.length;
    const dp: number[] = new Array<number>(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;

    for (let i: number = 2; i <= n; i++) {
        const a: number = parseInt(s[i - 1]);
        const b: number = parseInt(s.substring(i - 2, i));
        if (a >= 1) {
            dp[i] += dp[i - 1];
        }
        if (b >= 10 && b <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
}
