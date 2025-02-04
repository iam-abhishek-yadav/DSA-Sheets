func maxAscendingSum(nums []int) int {
    maxSum, curr := 0, nums[0]

    for i := 1; i < len(nums); i++ {
        if nums[i] > nums[i-1] {
            curr += nums[i]
        } else {
            if curr > maxSum {
                maxSum = curr
            }
            curr = nums[i]
        }
    }

    if curr > maxSum {
        maxSum = curr
    }
    
    return maxSum
}