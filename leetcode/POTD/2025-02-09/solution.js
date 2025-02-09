/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
	let length = nums.length
	let adjustedValues = nums.map((num, i) => num - i)

	adjustedValues.sort((a, b) => a - b)

	let goodPairs = 0,
		currentCount = 1

	for (let i = 1; i < length; i++) {
		if (adjustedValues[i] === adjustedValues[i - 1]) {
			currentCount++
		} else {
			goodPairs += (currentCount * (currentCount - 1)) / 2
			currentCount = 1
		}
	}

	goodPairs += (currentCount * (currentCount - 1)) / 2
	let totalPairs = (length * (length - 1)) / 2

	return totalPairs - goodPairs
}
