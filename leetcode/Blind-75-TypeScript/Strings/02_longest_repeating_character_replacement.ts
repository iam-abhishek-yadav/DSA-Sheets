function characterReplacement(s: string, k: number): number {
    const counter: number[] = new Array(26).fill(0);
    let i: number = 0;
    let j: number = 0;
    let maxCnt: number = 0;

    for (; i < s.length; ++i) {
        const c: number = s.charCodeAt(i) - 'A'.charCodeAt(0);
        ++counter[c];
        maxCnt = Math.max(maxCnt, counter[c]);

        if (i - j + 1 - maxCnt > k) {
            --counter[s.charCodeAt(j) - 'A'.charCodeAt(0)];
            ++j;
        }
    }

    return i - j;
}
