function findAnagrams(s: string, p: string): number[] {
    const ans: number[] = [], m = s.length, n = p.length, cnt1 = new Array(26).fill(0), cnt2 = new Array(26).fill(0);
    if (m < n) return ans;
    const idx = (c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0);
    for (const c of p) ++cnt1[idx(c)];
    for (const c of s.slice(0, n - 1)) ++cnt2[idx(c)];
    for (let i = n - 1; i < m; ++i) {
        ++cnt2[idx(s[i])];
        if (cnt1.toString() === cnt2.toString()) ans.push(i - n + 1);
        --cnt2[idx(s[i - n + 1])];
    }
    return ans;
}
