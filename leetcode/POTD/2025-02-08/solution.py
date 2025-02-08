import heapq

class NumberContainers:
    def __init__(self):
        self.index_to_number = {}
        self.number_to_indices = {}

    def change(self, index, number):
        if index in self.index_to_number and self.index_to_number[index] == number:
            return
        self.index_to_number[index] = number
        self.number_to_indices.setdefault(number, [])
        heapq.heappush(self.number_to_indices[number], index)

    def find(self, number):
        if number not in self.number_to_indices:
            return -1
        while self.number_to_indices[number] and self.index_to_number.get(self.number_to_indices[number][0]) != number:
            heapq.heappop(self.number_to_indices[number])
        return self.number_to_indices[number][0] if self.number_to_indices[number] else -1
        


# Your NumberContainers object will be instantiated and called as such:
# obj = NumberContainers()
# obj.change(index,number)
# param_2 = obj.find(number)