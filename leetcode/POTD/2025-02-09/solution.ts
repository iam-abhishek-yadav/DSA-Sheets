function countBadPairs(nums: number[]): number {
	let length: number = nums.length
	let adjustedValues: number[] = nums.map((num, i) => num - i)

	adjustedValues.sort((a, b) => a - b)

	let goodPairs: number = 0,
		currentCount: number = 1

	for (let i = 1; i < length; i++) {
		if (adjustedValues[i] === adjustedValues[i - 1]) {
			currentCount++
		} else {
			goodPairs += (currentCount * (currentCount - 1)) / 2
			currentCount = 1
		}
	}

	goodPairs += (currentCount * (currentCount - 1)) / 2
	let totalPairs: number = (length * (length - 1)) / 2

	return totalPairs - goodPairs
}
