class Solution:
    def tupleSameProduct(self, nums):
        length = len(nums)
        product_list = []
        
        # Step 1: Calculate all products of pairs
        for first in range(length - 1):
            for second in range(first + 1, length):
                product_list.append(nums[first] * nums[second])
        
        # Step 2: Count the frequency of each product
        product_count = Counter(product_list)
        result = sum(freq * (freq - 1) * 4 for freq in product_count.values() if freq > 1)
        
        return result
