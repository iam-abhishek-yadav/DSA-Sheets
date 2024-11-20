function uniquePaths(m: number, n: number): number {
    const dp: number[][] = new Array(m);
    
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    
    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    
    return dp[m - 1][n - 1];
}
