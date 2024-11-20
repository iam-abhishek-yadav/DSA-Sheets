function wordBreak(s: string, wordDict: string[]): boolean {
    const n: number = s.length;
    const dp: boolean[] = Array<boolean>(n + 1).fill(false);
    dp[0] = true;
    
    for (let i: number = 1; i <= n; i++) {
        for (let word of wordDict) {
            if (dp[i - word.length] && s.startsWith(word, i - word.length)) {
                dp[i] = true;
            }
        }
    }
    
    return dp[n];
}
