function longestPalindrome(s: string): number {
    let ans: number = 0;
    let record: number[] = new Array(128).fill(0);
    for (let i: number = 0; i < s.length; i++) {
        record[s.charCodeAt(i)]++;
    }
    for (let i: number = 65; i < 128; i++) {
        let count = record[i];
        ans += count % 2 == 0 ? count : count - 1;
    }
    return ans < s.length ? ans + 1 : ans;
};
