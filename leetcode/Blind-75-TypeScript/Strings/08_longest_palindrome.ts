function longestPalindrome(s: string): string {
    let max: number = 0;
    let start: number = 0;

    const expand = (s: string, left: number, right: number): number => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        const single: number = expand(s, i, i);
        const double: number = expand(s, i, i + 1);
        const curr: number = Math.max(single, double);

        if (curr > max) {
            max = curr;
            start = i - ((curr - 1) >> 1);
        }
    }

    return s.slice(start, start + max);
}

