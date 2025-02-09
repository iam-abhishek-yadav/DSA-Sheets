class Solution:
    def countBadPairs(self, nums: List[int]) -> int:
        length = len(nums)
        adjusted_values = [nums[i] - i for i in range(length)]
        
        adjusted_values.sort()
        
        good_pairs = 0
        current_count = 1

        for i in range(1, length):
            if adjusted_values[i] == adjusted_values[i - 1]:
                current_count += 1
            else:
                good_pairs += (current_count * (current_count - 1)) // 2
                current_count = 1
        
        good_pairs += (current_count * (current_count - 1)) // 2
        total_pairs = length * (length - 1) // 2

        return total_pairs - good_pairs