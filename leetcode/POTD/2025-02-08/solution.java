class NumberContainers {
    Map<Integer, Integer> indexToNumber;
    Map<Integer, PriorityQueue<Integer>> numberToIndices;

    public NumberContainers() {
        indexToNumber = new HashMap<>();
        numberToIndices = new HashMap<>();
    }

    public void change(int index, int number) {
        if (indexToNumber.containsKey(index) && indexToNumber.get(index) == number) return;
        indexToNumber.put(index, number);
        numberToIndices.computeIfAbsent(number, k -> new PriorityQueue<>()).offer(index);
    }

    public int find(int number) {
        if (!numberToIndices.containsKey(number)) return -1;
        PriorityQueue<Integer> indices = numberToIndices.get(number);
        while (!indices.isEmpty() && indexToNumber.get(indices.peek()) != number) {
            indices.poll();
        }
        return indices.isEmpty() ? -1 : indices.peek();
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * NumberContainers obj = new NumberContainers();
 * obj.change(index,number);
 * int param_2 = obj.find(number);
 */