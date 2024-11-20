function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    const prefix: number[] = new Array(n);
    const suffix: number[] = new Array(n);
    
    for (let i: number = 0; i < n; i++) {
        prefix[i] = i === 0 ? 1 : prefix[i - 1] * nums[i - 1];
        suffix[n - i - 1] = i === 0 ? 1 : suffix[n - i] * nums[n - i];
    }

    for (let i: number = 0; i < n; i++) {
        nums[i] = prefix[i] * suffix[i];
    }
    
    return nums;
}
