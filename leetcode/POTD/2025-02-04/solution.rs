impl Solution {
    pub fn max_ascending_sum(nums: Vec<i32>) -> i32 {
        let mut max_sum = 0;
        let mut curr = nums[0];

        for i in 1..nums.len() {
            if nums[i] > nums[i - 1] {
                curr += nums[i];
            } else {
                max_sum = max_sum.max(curr);
                curr = nums[i];
            }
        }

        max_sum.max(curr)
    }
}
