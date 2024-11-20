function maxSubArray(nums: number[]): number {
    let currentSum: number = 0;
    let maxSum: number = -Infinity;
    
    for (const num of nums) {
        currentSum = Math.max(currentSum + num, num);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
