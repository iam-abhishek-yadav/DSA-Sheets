class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        max_sum, curr = 0, nums[0]
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                curr += nums[i]
            else :
                max_sum = max(max_sum, curr)
                curr = nums[i]
        return max(max_sum, curr)