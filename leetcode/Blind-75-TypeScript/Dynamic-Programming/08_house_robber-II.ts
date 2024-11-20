function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    const n: number = nums.length;
    const dp1: number[] = new Array<number>(n).fill(0);
    const dp2: number[] = new Array<number>(n).fill(0);

    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);
    for (let i: number = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i - 2] + nums[i], dp1[i - 1]);
    }

    dp2[0] = 0;
    dp2[1] = nums[1];
    dp2[2] = Math.max(nums[1], nums[2]);
    for (let i: number = 3; i < n; i++) {
        dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1]);
    }

    return Math.max(dp1[n - 2], dp2[n - 1]);
}

