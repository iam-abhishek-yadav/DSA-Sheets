package main

import (
	"container/heap"
)

type MinHeap []int

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

type NumberContainers struct {
	indexToNumber map[int]int
	numberToHeap  map[int]*MinHeap
}

func Constructor() NumberContainers {
	return NumberContainers{
		indexToNumber: make(map[int]int),
		numberToHeap:  make(map[int]*MinHeap),
	}
}

func (this *NumberContainers) Change(index int, number int) {
	if val, exists := this.indexToNumber[index]; exists && val == number {
		return
	}
	this.indexToNumber[index] = number

	if _, exists := this.numberToHeap[number]; !exists {
		h := &MinHeap{}
		heap.Init(h)
		this.numberToHeap[number] = h
	}

	heap.Push(this.numberToHeap[number], index)
}

func (this *NumberContainers) Find(number int) int {
	if h, exists := this.numberToHeap[number]; exists {
		for h.Len() > 0 {
			top := (*h)[0]
			if this.indexToNumber[top] == number {
				return top
			}
			heap.Pop(h)
		}
	}
	return -1
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Change(index,number);
 * param_2 := obj.Find(number);
 */
