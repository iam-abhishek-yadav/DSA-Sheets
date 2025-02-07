use std::collections::HashMap;

impl Solution {
    pub fn query_results(_limit: i32, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut result = Vec::new();
        let mut ball_to_color = HashMap::new();
        let mut color_count = HashMap::new();

        for query in queries.iter() {
            if query.len() != 2 {
                continue;
            }
            let ball_id = query[0];
            let new_color = query[1];

            if let Some(&previous_color) = ball_to_color.get(&ball_id) {
                if let Some(count) = color_count.get_mut(&previous_color) {
                    *count -= 1;
                    if *count == 0 {
                        color_count.remove(&previous_color);
                    }
                }
            }

            ball_to_color.insert(ball_id, new_color);
            *color_count.entry(new_color).or_insert(0) += 1;
            result.push(color_count.len() as i32);
        }

        result
    }
}
