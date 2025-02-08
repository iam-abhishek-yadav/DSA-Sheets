use std::collections::{HashMap, BinaryHeap};
use std::cmp::Reverse;

struct NumberContainers {
    index_to_number: HashMap<i32, i32>,
    number_to_heap: HashMap<i32, BinaryHeap<Reverse<i32>>>,
}

impl NumberContainers {
    fn new() -> Self {
        Self {
            index_to_number: HashMap::new(),
            number_to_heap: HashMap::new(),
        }
    }

    fn change(&mut self, index: i32, number: i32) {
        if let Some(&existing) = self.index_to_number.get(&index) {
            if existing == number {
                return;
            }
        }

        self.index_to_number.insert(index, number);
        self.number_to_heap
            .entry(number)
            .or_insert(BinaryHeap::new())
            .push(Reverse(index));
    }

    fn find(&mut self, number: i32) -> i32 {
        if let Some(heap) = self.number_to_heap.get_mut(&number) {
            while let Some(&Reverse(top)) = heap.peek() {
                if self.index_to_number.get(&top) == Some(&number) {
                    return top;
                }
                heap.pop();
            }
        }
        -1
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * let mut obj = NumberContainers::new();
 * obj.change(index, number);
 * let ret_2: i32 = obj.find(number);
 */
