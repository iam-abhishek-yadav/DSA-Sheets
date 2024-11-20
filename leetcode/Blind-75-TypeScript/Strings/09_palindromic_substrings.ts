function countSubstrings(s: string): number {
    let ans: number = 0;
    const n: number = s.length;
    
    for (let k = 0; k < n * 2 - 1; ++k) {
        let i: number = k >> 1;
        let j: number = (k + 1) >> 1;
        
        while (i >= 0 && j < n && s[i] === s[j]) {
            ++ans;
            --i;
            ++j;
        }
    }
    
    return ans;
}

