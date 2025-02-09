impl Solution {
    pub fn count_bad_pairs(nums: Vec<i32>) -> i64 {
        let length = nums.len();
        let mut adjusted_values: Vec<i32> = nums.iter().enumerate().map(|(i, &num)| num - i as i32).collect();
        
        adjusted_values.sort();

        let mut good_pairs: i64 = 0;
        let mut current_count: i64 = 1;

        for i in 1..length {
            if adjusted_values[i] == adjusted_values[i - 1] {
                current_count += 1;
            } else {
                good_pairs += (current_count * (current_count - 1)) / 2;
                current_count = 1;
            }
        }

        good_pairs += (current_count * (current_count - 1)) / 2;
        let total_pairs = (length as i64) * (length as i64 - 1) / 2;

        total_pairs - good_pairs
    }
}