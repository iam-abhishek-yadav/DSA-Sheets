class MinHeap {
	private heapArray: number[]

	constructor() {
		this.heapArray = []
	}

	push(value: number): void {
		this.heapArray.push(value)
		let index = this.heapArray.length - 1

		while (index > 0) {
			let parent = (index - 1) >> 1
			if (this.heapArray[parent] <= this.heapArray[index]) break

			;[this.heapArray[parent], this.heapArray[index]] = [
				this.heapArray[index],
				this.heapArray[parent],
			]
			index = parent
		}
	}

	pop(): number | undefined {
		if (this.heapArray.length === 0) return undefined

		let result = this.heapArray[0]
		let lastElement = this.heapArray.pop()

		if (this.heapArray.length) {
			this.heapArray[0] = lastElement!
			let index = 0,
				size = this.heapArray.length

			while (true) {
				let left = index * 2 + 1,
					right = index * 2 + 2,
					min = index

				if (left < size && this.heapArray[left] < this.heapArray[min])
					min = left
				if (right < size && this.heapArray[right] < this.heapArray[min])
					min = right
				if (min === index) break

				;[this.heapArray[index], this.heapArray[min]] = [
					this.heapArray[min],
					this.heapArray[index],
				]
				index = min
			}
		}

		return result
	}

	peek(): number | undefined {
		return this.heapArray[0]
	}

	size(): number {
		return this.heapArray.length
	}
}

class NumberContainers {
	private indexToNumber: Map<number, number>
	private numberToIndices: Map<number, MinHeap>

	constructor() {
		this.indexToNumber = new Map()
		this.numberToIndices = new Map()
	}

	change(index: number, number: number): void {
		if (
			this.indexToNumber.has(index) &&
			this.indexToNumber.get(index) === number
		)
			return

		this.indexToNumber.set(index, number)

		if (!this.numberToIndices.has(number)) {
			this.numberToIndices.set(number, new MinHeap())
		}

		this.numberToIndices.get(number)!.push(index)
	}

	find(number: number): number {
		if (!this.numberToIndices.has(number)) return -1

		let heap = this.numberToIndices.get(number)!

		while (heap.size() && this.indexToNumber.get(heap.peek()!) !== number) {
			heap.pop()
		}

		return heap.size() ? heap.peek()! : -1
	}
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * const obj = new NumberContainers();
 * obj.change(index, number);
 * const param_2 = obj.find(number);
 */
