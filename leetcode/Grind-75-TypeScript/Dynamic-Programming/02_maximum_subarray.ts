function maxSubArray(nums: number[]): number {
    let n = nums.length
    let dp = new Array(n)
    dp[0] = nums[0]
    let currentSubArraySum = nums[0]
    for ( let i= 1; i < n; i++) {
        if(currentSubArraySum + nums[i] > nums[i]) 
            currentSubArraySum += nums[i];
        else 
            currentSubArraySum = nums[i]; 
        dp[i] = Math.max(dp[i-1], currentSubArraySum)
    } 
    return dp[n-1]
};
