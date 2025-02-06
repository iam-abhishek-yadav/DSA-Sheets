use std::collections::HashMap;
impl Solution {
    pub fn tuple_same_product(nums: Vec<i32>) -> i32 {
        let length = nums.len();
        let mut product_map: HashMap<i32, i32> = HashMap::new();

        // Step 1: Calculate all products of pairs
        for first in 0..length - 1 {
            for second in first + 1..length {
                let product = nums[first] * nums[second];
                *product_map.entry(product).or_insert(0) += 1;
            }
        }

        // Step 2: Count the frequency of each product
        let mut result = 0;
        for &freq in product_map.values() {
            if freq > 1 {
                result += freq * (freq - 1) * 4;
            }
        }

        result
    }
}