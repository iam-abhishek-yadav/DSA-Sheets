function reverseBits(n: number): number {
    let result: number = 0;
    for (let i: number = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result >>> 0;
}
