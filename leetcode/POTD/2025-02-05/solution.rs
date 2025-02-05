impl Solution {
    pub fn are_almost_equal(s1: String, s2: String) -> bool {
        let mut diff = Vec::new();

        for (a, b) in s1.chars().zip(s2.chars()) {
            if a != b {
                diff.push((a, b));
                if diff.len() > 2 {
                    return false;
                }
            }
        }

        diff.is_empty() || (diff.len() == 2 && diff[0] == (diff[1].1, diff[1].0))
    }
}
