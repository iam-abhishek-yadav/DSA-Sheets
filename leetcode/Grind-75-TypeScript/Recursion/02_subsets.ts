function subsets(nums: number[]): number[][] {
    const generateSubsets = (start: number): number[][] => {
        if (start === nums.length) return [[]];
        const subs: number[][] = generateSubsets(start + 1);
        return [...subs.map((sub: number[]) => [nums[start], ...sub]), ...subs];
    };

    return generateSubsets(0);
}
