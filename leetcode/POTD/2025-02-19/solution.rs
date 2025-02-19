impl Solution {
    pub fn get_happy_string(n: i32, k: i32) -> String {
        let mut res = Vec::new();
        Solution::generate("".to_string(), n as usize, &mut res);
        res.get((k - 1) as usize).cloned().unwrap_or_else(|| "".to_string())
    }

    fn generate(s: String, n: usize, res: &mut Vec<String>) {
        if s.len() == n {
            res.push(s);
            return;
        }
        for ch in ['a', 'b', 'c'] {
            if s.is_empty() || s.chars().last().unwrap() != ch {
                Solution::generate(format!("{}{}", s, ch), n, res);
            }
        }
    }
}
