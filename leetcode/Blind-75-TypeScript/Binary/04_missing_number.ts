function missingNumber(nums: number[]): number {
    let xor: number = 0;
    let i: number;
    for (i = 0; i < nums.length; i++) {
        xor ^= nums[i];
        xor ^= i;
    }
    xor ^= i;
    return xor;
}
