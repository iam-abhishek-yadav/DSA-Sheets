function countBits(n: number): number[] {
    const res: number[] = [];
    const hammingWeight = function(n: number): number {
        let count: number = 0;
        while (n) {
            count++;
            n &= (n - 1);
        }
        return count;
    };
    for (let i: number = 0; i <= n; i++) {
        res.push(hammingWeight(i));
    }
    return res;
}
