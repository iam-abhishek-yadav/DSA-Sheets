function lengthOfLongestSubstring(s: string): number {
    const set: Set<string> = new Set();
    let left: number = 0;
    let max: number = 0;

    for (let i = 0; i < s.length; i++) {
        const char: string = s[i];

        while (set.has(char)) {
            const ch: string = s[left];
            set.delete(ch);
            left++;
        }

        set.add(char);
        max = Math.max(max, i - left + 1);
    }

    return max;
}

